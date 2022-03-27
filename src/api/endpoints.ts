import { assert, array, object, string, union, literal, Infer } from "superstruct";

import { apiClient } from "./apiClient";

/* ------------------------- SCHEMAS AND VALIDATORS ------------------------- */

const GetAllPagesResponseDataSchema = array(
  object({
    url: string(),
    id: string(),
  })
);

const GetPageResponseDataSchema = object({
  url: string(),
  id: string(),
  sections: array(
    union([
      object({
        type: literal("hero"),
        text: string(),
        img: string(),
      }),
      object({
        type: literal("testimonial"),
        text: string(),
        author: string(),
      }),
      object({
        type: literal("newsletter"),
      }),
    ])
  ),
});

const PostNewsletterEmailResponseDataSchema = object({
  message: string(),
});

export type IPageSectionProps = Infer<typeof GetPageResponseDataSchema>["sections"][0];

/* ------------------------------- VALIDATORS ------------------------------- */

/*
    NOTE:
    In fullstack application where backend and frontend share
    TypeScript interfaces, casing with 'as' should would be enough. 
    This 'full check' approach would be good for cases where endpoint data
    could potentially change.
*/

const validateGetAllPagesResponseData = (data: any) => {
  // Throws error if schema is not matched
  assert(data, GetAllPagesResponseDataSchema);

  return data;
};

const validateGetPageResponseData = (data: any) => {
  // Throws error if schema is not matched
  assert(data, GetPageResponseDataSchema);

  return data;
};

const validatePostNewsletterEmailResponseData = (data: any) => {
  // Throws error if schema is not matched
  assert(data, PostNewsletterEmailResponseDataSchema);

  return data;
};

/* ---------------------------------- APIS ---------------------------------- */

export const getAllPages = async () => {
  return await apiClient.get({
    url: `/pages`,
    responseDataValidator: validateGetAllPagesResponseData,
  });
};

export const getPage = async (id: string) => {
  return await apiClient.get({
    url: `/page/${id}`,
    responseDataValidator: validateGetPageResponseData,
  });
};

export const postNewsletterEmail = async (email: string) => {
  return await apiClient.post({
    url: `/newsletter`,
    data: { email },
    responseDataValidator: validatePostNewsletterEmailResponseData,
  });
};
