# Landing page with SSR and data fetching (recruitment task)

![ui_demo](https://raw.githubusercontent.com/aronmandrella/landing-page-with-ssr-and-data-fetching/master/ui_demo_1.PNG)

## Live demo link

[🔗 Live demo](TODO)

## How to install and run

Run in dev mode

```
npm install
npm run dev
```

Build and prepare for hosting

```
npm install
npm run build
npm run export
```

## Specifications:

✔️ Uses Next.js + React + TypeScript + Tailwind CSS.

✔️ Does SSR based on data provided by CMS (CMS gives some multi-path url, and a JSON that describes what should be rendered at given url)

✔️ All API responses (GET + POST) are validated, and error is displayed when needed.

✔️ Has Responsive UI.

## Note about Tailwind CSS:

I've used tailwind mostly to test it. Also it makes making responsive layouts easy,
and it enforces UI consistency. I think it's great for creating layouts, but not that
great for creating reusable components since code can get a little messy.
