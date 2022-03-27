import axios from "axios";

/*
  Little helper for managing authentication, and requests responses / errors.
  It makes sure that everything is type safe, and that no error will be thrown.
*/

/* ----------------------------- AXIOS INSTANCE ----------------------------- */

const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: "https://adchitects-cms.herokuapp.com",
  auth: {
    username: String(process.env.NEXT_PUBLIC_API_USER),
    password: String(process.env.NEXT_PUBLIC_API_PASS),
  },
});

/* -------------------------------- REQUESTER ------------------------------- */

interface ISendApiRequest<T> {
  (props: {
    method: "GET" | "POST";
    url: string;
    data?: any;
    // Should return validated input data or throw error.
    requestDataValidator?: (data: any) => any | never;
    // Should return validated response data or throw error.
    responseDataValidator: (data: any) => T | never;
  }):
    | {
        success: true;
        statusCode: number;
        data: T;
      }
    | {
        success: false;
        statusCode: number | null;
        error: {
          title: string;
          message: string;
          exception: any;
        };
      };
}

const sendApiRequest = async <T>({
  method,
  url,
  data,
  requestDataValidator = (v) => v,
  responseDataValidator,
}: Parameters<ISendApiRequest<T>>[0]): Promise<ReturnType<ISendApiRequest<T>>> => {
  try {
    const { status: responseStatus, data: responseData } = await axiosInstance(url, {
      method: method,
      data: requestDataValidator(data),
    });

    return {
      success: true,
      statusCode: responseStatus,
      data: responseDataValidator(responseData),
    };
  } catch (error: any) {
    console.error(error);

    if (axios.isAxiosError(error)) {
      const { message, response } = error;

      return {
        success: false,
        statusCode: response?.status || null,
        error: {
          title: `At '${url}' endpoint`,
          message: response?.data?.message || message,
          exception: error,
        },
      };
    } else {
      return {
        success: false,
        statusCode: null,
        error: {
          title: `At '${url}' endpoint`,
          message: error?.message || "Unexpected error",
          exception: error,
        },
      };
    }
  }
};

/* ------------------------------- API CLIENT ------------------------------- */

export const apiClient = {
  get: async <T>(props: Omit<Parameters<ISendApiRequest<T>>[0], "method">) => {
    return sendApiRequest({
      method: "GET",
      ...props,
    });
  },

  post: async <T>(props: Omit<Parameters<ISendApiRequest<T>>[0], "method">) => {
    return sendApiRequest({
      method: "POST",
      ...props,
    });
  },
};
