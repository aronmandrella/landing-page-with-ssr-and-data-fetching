import React from "react";

import { NextPage, GetStaticPaths, GetStaticPropsResult, GetStaticPropsContext } from "next";

import { AppNav, IAppNavRoute } from "@components/AppNav";
import { HeroSection } from "@components/HeroSection";
import { HugeTestimonialSection } from "@components/HugeTestimonialSection";
import { NewsletterSection } from "@components/NewsletterSection";

import { getPage, getAllPages, IPageSectionProps } from "@api/endpoints";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

interface IIndexProps {
  appNavRoutes: IAppNavRoute[];
  sections: IPageSectionProps[];
}

const Index: NextPage<IIndexProps> = (props) => {
  const { appNavRoutes, sections } = props;

  return (
    <>
      <AppNav routes={appNavRoutes} />

      <main className="flex flex-col">
        <div className="flex flex-row space-x-1"></div>

        {sections.map((section, i) => {
          const type = section.type;
          const key = type + i;

          switch (type) {
            case "hero":
              return <HeroSection key={key} text={section.text} img={section.img} />;

            case "testimonial":
              return (
                <HugeTestimonialSection key={key} text={section.text} author={section.author} />
              );

            case "newsletter":
              return <NewsletterSection key={key} />;
          }
        })}
      </main>
    </>
  );
};

export default Index;

/* -------------------------------------------------------------------------- */
/*                                DATA FETCHING                               */
/* -------------------------------------------------------------------------- */

/*
  Getting list of all possible urls.
*/
export const getStaticPaths: GetStaticPaths = async () => {
  const getAllPagesResponse = await getAllPages();
  if (!getAllPagesResponse.success) {
    throw new Error(`${getAllPagesResponse.error.title} : ${getAllPagesResponse.error.message}`);
  }

  const allPages = getAllPagesResponse.data;

  const paths = allPages.map((p) => {
    const url = p.url;
    if (url.charAt(0) !== "/") {
      throw new Error(`$At getStaticPaths : url '${url}' should start with '/' character.`);
    }

    if (url === "/") {
      return { params: { slug: [] } };
    } else {
      const urlParts = url.split("/").slice(1, Infinity);

      return { params: { slug: urlParts } };
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
};

/*
  Getting content of every page.
*/
export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IIndexProps>> => {
  const slug = context.params?.slug || [];
  if (!Array.isArray(slug)) {
    throw new Error(`Slug should be array but is '${slug}'.`);
  }

  const url = `/${slug.join("/")}`;

  const getAllPagesResponse = await getAllPages();
  if (!getAllPagesResponse.success) {
    throw new Error(`${getAllPagesResponse.error.title} : ${getAllPagesResponse.error.message}`);
  }

  const allPages = getAllPagesResponse.data;

  const pageId = allPages.find((p) => p.url === url)?.id;
  if (!pageId) {
    throw new Error(
      `Invalid page url '${slug}', valid ones: [${allPages.map((p) => p.url).join(", ")}].`
    );
  }

  const getPageResponse = await getPage(pageId);
  if (!getPageResponse.success) {
    throw new Error(`${getPageResponse.error.title} : ${getPageResponse.error.message}`);
  }

  const sections = getPageResponse.data.sections;
  const appNavRoutes: IAppNavRoute[] = allPages.map((p) => {
    return {
      text: p.id,
      href: p.url,
    };
  });

  return {
    props: {
      sections,
      appNavRoutes,
    },
  };
};
