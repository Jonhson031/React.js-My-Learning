// * React Server Components vs Client Components

// * Next.js is rendered by server and not the client (browser)
// in regular React or JS when you trying to console.log something it will be logged inside browser's console

// * in Next.js it will be executed inside your terminal

// * Main advantage of server side rendering: Less client-side JS, better for SEO.

// ? Client Components
// Components that are pre-rendered on server, but then also rendered on the client
// It happens because those components using some feauters that can't be rendered on the server.

// * For Example:
// 1) React Hooks are not avaible on the server side (useEffect, useState
// 2) Event Handlers (onClick, onChange)

// * To use client components in Next.js we must type "use client" on the top of code.