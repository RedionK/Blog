---
title: "Getting started with Next.js"
date: "2020-11-29"
---

## DRAFT

Intro: What is the video about?

Start with what is nextjs, why should we use it, what problems does it solve, what does it provide?

npx create-next-app name-of-app (what is npx and why we are using it here)

cd into created directory

run the development server(npm run dev)

**Routing**

A page is a React Component that is being exported (must be exported as default, explain why) from the 'pages' directory. The name of the route will be the filename. Ex. pages/about.js will be accessible at /about. pages/index.js is the "/" directory by default.

Pages can also be nested like so pages/posts/first-post.js. This page will be accessible at this route posts/first-post.

**Linking pages**

import the Link from 'next/link'

wrap any a tag with the Link tag and add an href attribute to the Link tag pointing to where you want to link like so href="posts/first-post" To add attributes like className, do it on the a tag and not the link tag.

explain why <> </> is used on the first-post.js file component.

**Client-Side Navigation**

The Link component enables client-side navigation between two pages in the same next.js app. For external pages use a tag only. This means that the page transition happens using javascript which is faster than the default navigation done by the browser. If you were to use just the <a> tag the browser will do a full refresh of the page.

**Code Splitting**

Next.js does code splitting automatically. When one page is rendered, the code for all the other pages in the app is not served initially. This makes sure that one page loads quickly. This also means that we are loading the code of that page only and all errors will be from there.

In a production build of next.js, whenever the Link component appears in the browser's viewport, those links are prefeched in the background so that when we click on those links the transition is near-instant.

## Assets

Next.js serves static files under the top-level 'public' directory. This means that static files in the 'public' directory will be available anywhere on the app and the src will be /vercel.svg. This folder is useful for 'robots.txt', favicon.ico, google site verification and any other ststic files including html.

## Metadata

<Head> is a react component built into next.js which allows you to modify the head of a page.

import from next/head

Here you can add the title, meta, link a favicon etc. You can also add a key attribute to each tag under head to avoid duplicates.

Contents of the 'head' get cleared upon unmounting the component. So each page has to completely define what it needs in 'head'

To customize the <html> like adding the 'lang' attribute you can do so by creating a 'pages/\_document.js' file.

# Pre-rendering

Nextjs pre-renders every page by default. This means that the html is generated in advance for each page instead of having it done by the browser in javascript. The minimum amount of javascript is needed to generate this html in advance and when the page is loaded by the browser, the rest of the javascript runs to make the page fully interactive. This is called hydration.

Pre-rendering can result in better performance and SEO

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. Next.js allows you to create a hybrid app as well which uses Static Generation for some pages and Server-side Rendering for others.

## Static Generation

This is the pre-render method that generates the HTML at build time. The pre-rendered HTML is then reused on each request. Static Generation should be used whenever possible because the page can be built once and served. This makes it faster than having a server render the page on every request. Static Generation should be used if the page can be pre-rendered without a user's request. Ex. Marketing pages, Blog posts etc.

### With or without data

Pages that do not fetch any data at build time will be pre-rendered automatically.

### getStaticProps

Pages that can only be generated after fetching external data at build time will need to export an async function called getStaticProps in addition to the page component itself. getStaticProps will run at build time and inside this function we can fetch external data and send it as props to the page. getStaticProps runs only on the server-side and it wont even be included in the JS bundle for the browser. In development 'npm run dev' getStaticProps runs on every request, in production it runs at build time. Because of this you can't use data that's only available during request time like query parameters or HTTP headers. Can only be exported from a page.

## Server-side Rendering

This is the pre-rendering method that generates the HTML on each request. If a page can't be pre-rendered ahead of a user's request or the page shows frequently updated data, then Server-side Rendering should be used. It will be slower but the pre-rendered page will always be up-to-date. You can also skip pre-rendering altogether and use client-side JavaScript to populate frequently updated data. To use server-side rendering you need to export 'getServerSideProps' instead of 'getStaticProps' from your page.

### getServerSideProps

getServerSideProps is called at request time, therefore its parameter 'context' contains request specific parameters. Should only be used if we need to pre-render a page whose data must be fetched at request time. It will be slower than getStaticProps because the server must compute the result on every request.

## Client-side rendering

You can also pre-render without data and then load the data on the client-side. First statically generate(pre-render) parts of the page that do not require external data. Second, when the page loads, fetch external data from the client using Javascript and populate the remaining parts and show a loading state while they are being populated. Client-side rendering should be used on private, user-specific pages where SEO is not relevant.

## Dynamic Routes

If a page path depends on external data we can use dynamic routes in next.js to statically generate pages with paths that depend on that data. This will give us dynamic URLs. First we create a page with it's name wrapped in [ ] like [id].js under the pages directory. Pages wrapped in [ ] are dynamic routes. In this page we create the component for a page. Second we export an async function called 'getStaticPaths' which should return a list 'paths' of possible values for 'id' which is the name of our file. This is a list of objects with a params key which has an object inside with an id key. This key should match the file name we are trying to make dynamic id = [id]. Third we export getStaticProps again to get the data for each specific post or 'id' which we now have access to from exporting getStaticPaths. getStaticPaths in this case returns the content for each [id] and adds it to props which we can then render in our component.
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
