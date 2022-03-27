import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import { Button, Container } from "@ui";

import { AppLogoIcon } from "./AppLogoIcon";
import { useIsTopInView } from "./useIsTopInView";

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

/*
  There is no endpoint for getting
  content of navbar so I've hard-coded it.
  (/posts doesn't provide name, only href)
*/
const ROUTES = [
  {
    href: "/solutions",
    text: "Solutions",
  },
  {
    href: "/about",
    text: "About",
  },
];

/* -------------------------------------------------------------------------- */
/*                         HELPER <AppLink/> COMPONENT                        */
/* -------------------------------------------------------------------------- */

interface IAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const AppLink: React.VFC<IAppLinkProps> = React.memo(
  React.forwardRef<HTMLAnchorElement, IAppLinkProps>((props, ref) => {
    const { className, href, children, ...anchorProps } = props;

    const router = useRouter();

    return (
      <a
        {...anchorProps}
        className={clsx(
          className,
          "text-center text-base font-sans font-regular",
          "transition-opacity duration-75",
          "cursor-pointer",
          "text-on-surface-1",
          "hover:opacity-70 active:opacity-50",
          router.asPath === href && "underline"
        )}
        href={href}
        ref={ref}
      >
        {children}
      </a>
    );
  })
);

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export interface IAppNavRoute {
  text: string;
  href: string;
}

interface IAppNavProps {
  className?: string;
  routes: IAppNavRoute[];
}

export const AppNav: React.VFC<IAppNavProps> = React.memo((props) => {
  const { className, routes } = props;

  const isTopInView = useIsTopInView();

  return (
    <nav
      className={clsx(
        className,
        "sticky top-0",
        "bg-surface-1 border-b border-surface-border shadow-md",
        isTopInView && "shadow-transparent",
        "transition-shadow"
      )}
    >
      <Container
        className="flex flex-row items-center justify-between py-1.5 space-x-6"
        maxWidth="lg"
      >
        <Link href="/" passHref>
          <a>
            <AppLogoIcon />
          </a>
        </Link>

        {/*
          This could be rendered conditionally based on current screen size, but it would require
          waiting for hydration. Server side rendering everything initially, and then hiding
          unwanted parts with CSS is better UX since user will always see what he should on given device.
        */}

        <ul
          className="hidden lg:flex flex-row items-center space-x-3"
          style={{ marginRight: "auto" }}
          role="list"
        >
          {routes.map((route) => {
            const { text, href } = route;

            return (
              <li key={text}>
                <Link href={href} passHref>
                  <AppLink>{text}</AppLink>
                </Link>
              </li>
            );
          })}
        </ul>

        <Button
          className="hidden lg:block"
          theme="filled"
          onClick={() => alert("Something will happen")}
        >
          Contact us
        </Button>

        <div
          className="flex items-center justify-center lg:hidden cursor-pointer h-3"
          onClick={() => alert("Menu goes here")}
        >
          <svg viewBox="0 0 100 80" width="32" height="32">
            <rect className="fill-on-surface-1" width="100" height="20"></rect>
            <rect className="fill-on-surface-1" y="30" width="100" height="20"></rect>
            <rect className="fill-on-surface-1" y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </Container>
    </nav>
  );
});
