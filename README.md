# [Kodama](https://kodama.vercel.app) - A social platform for sharing, discussing and discover games

> Track games you've played, save those you want to play, tell your friends what's good

<h1 style="display:flex; align-items: center;"> <img src="https://slackmojis.com/emojis/5812-david_lynch/download" style="width:50px; margin-right:8px"/> The Idea</h1>

The primary idea of Kodama is building a frontend application that emulates a social media platform with features similar to [Letterboxd](https:letterboxd.com) and a UI/UX similar to [RAWG](https:rawg.io), utilizing the RAWG and HLTB APIs. The project is currently in development.

There's a future idea about evolving Kodama to a fullstack application to persist data and to be actually useful and not just a frontend side project without any real application.

---

<h1 style="display:flex; align-items: center;"> <img src="https://cdn-icons-png.flaticon.com/512/3171/3171906.png" style="width:40px; margin-right:8px"/> The Client (Front End) Stack</h1>

At first view, the whole frontend stack idealized for Kodama could be viewed as being a bit bloated, but actually it is, at least for the intial state of the project, the idea of this stack is that it can be easilly manageable for a huge project, which for a professional and production-size point of view it actually makes sense.

- The Vite <img src="https://vitejs.dev/logo-with-shadow.png" style="width:18px"/> is the first building block of the stack, serving as a serving the code locally during development and bundling all javascript, css and other assets for production.

- The framework that will be used is React <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" style="width:18px"/> , with TypeScirpt <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" style="width:18px"/> support. There are many reasons for the choice of using React as the framework, such as popularity in the market, the basic familiarity with its concepts that I already have, which will be useful when I'll be learning the usage of typescript within the frontend application context.

- For styling it'll be used Tailwind <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" style="width:18px"/> as a CSS framework  with a Prettier <img src="https://cdn.worldvectorlogo.com/logos/prettier-1.svg" style="width:18px"/> plugin that will sort classes with the intended tailwindcss class order.

- The testing will be handled by Vitest <img src="https://seeklogo.com/images/V/vitest-logo-9ADDA575A5-seeklogo.com.png" style="width:18px"/> for unit and integration tests, and Cypress <img src="https://pics.freeicons.io/uploads/icons/png/3556671901536211770-512.png" style="width:18px"/> for e2e tests;

- The deploy will be done with Vercel <img src="https://i.pinimg.com/originals/c4/35/6c/c4356cd5454d06585e0a46066b555172.png" style="width:18px"/>. There is also the idea of using a vite plugin for Server Side Rendering for dealing with SEO.

---
<h1 style="display:flex; align-items: center;"> <img src="https://cdn-icons-png.flaticon.com/512/3171/3171906.png" style="width:40px; margin-right:8px"/> The Server (Back End) Stack</h1>

At the moment the only idea is to build a server using nest js, prisma and mongodb/postgresdb, more will be added to this readme along with the progression of the design.

---
# Stages of the Development

## Stage 1 - Dummy Front-End

I think the ideal development workflow, for a one person project like this, would be to begin with the building of the server and no the client view, because the front-end will be modified A LOT after the development of the server API, making the front end a not optimal feature to be developed first.

But, I know myself too well that maybe this project will never be fully finished, and my main intention with this projet, was to study and develop my client/front-end skills, so the only reason to start with the client development it's my *vaporware spirit*.

Main Features 21/22:

- [x] Homepage
  - [x] Infinite Scrolling  
  - [x] Game Cards  
- [x] Game page
  - [x] Screenshots
  - [x] Stores
  - [x] Metadata
  - [x] Ratings
  - [x] Screenshot at the background
- [x] Log in page
  - [x] Random screenshot at the background
- [x] Sign up page
  - [x] Random screenshot at the background
- [x] Password redefinition page
  - [x] Random screenshot at the background
- [x] 404 Pages
- [x] Loader
- [x] Error Pages
- [x] Navbar
- [x] Sidebar
- [x] Resposivity
- [ ] Search engine

## Stage 2 - Fully functional Back End accessible by API requests

TBD

## Stage 3 - Server-Client Integration

TBD
