This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




# DateTimepicker Component

The `DateTimepicker` component is a React component that allows users to select date and time values using the Material-UI DateTimePicker. This component also includes functionality to handle date and time filtering and displays a loading spinner during searching.

## Installation

Before using this component, make sure you have the following dependencies installed:

- React
- Material-UI (MUI)
- dayjs
- @mui/x-date-pickers

You can install them using npm or yarn:

```bash
npm install react
npm install @mui/material @mui/x-date-pickers
npm install dayjs



Props
The DateTimepicker component accepts the following optional props:

color: Customize the spinner's color (default is #D9D9D9).
ringWidth: Customize the spinner's ring width (default is 6).
className: Add additional CSS classes to the component.