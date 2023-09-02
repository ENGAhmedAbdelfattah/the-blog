📗 The Blog APP
===
Blog is an assessment app from Owais Capital

## 📝 Papar Information
- Title:  `The-Blog`
- Author:  `Ahmed Mahmoud Abdelfattah`

## 💻 Install
- I did was start with a fresh Create Next App instance to use the lasted version of Next v. (13.4.12)
- the commends for install next

  ```
  npx create-next-app@latest

  ```

  ```
  npm run build
  ```
## 💽 Dependence

  ```
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.3",
    "@types/node": "20.4.6",
    "@types/react": "18.2.18",
    "@types/react-dom": "18.2.7",
    "eslint": "8.46.0",
    "eslint-config-next": "13.4.12",
    "formik": "^2.4.3",
    "next": "13.4.12",
    "next-themes": "^0.2.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-icons": "^4.10.1",
    "react-paginate": "^8.2.0",
    "react-query": "^3.39.3",
    "react-redux": "^8.0.5",
    "react-toastify": "^9.1.3",
    "typescript": "5.1.6",
    "yup": "^1.2.0"
  }

  ```
## 💽 Dependence on Development
  ```
  "devDependencies": {
    "babel-plugin-styled-components": "^2.1.4",
    "sass": "^1.64.2"
  }
  ```
- to install this dependence my use npm package by command
  ```
    npm install
  ```
## ➡️ Directory Hierarchy
```
the-blog
├── .editorconfig
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .next
├── .vscode
│   └── settings.json
├── LICENSE
├── next-env.d.ts
├── next.config.js
├── node_modulests
├── package-lock.json
├── package.json
├── public
│   ├── icons
│   ├── images
│   │   ├── home
│   │   │   └── ImagePost.jpg
│   │   ├── logo.png
│   │   └── pageDetails
│   │       └── postItem.jpg
│   └── pattern
├── README.md
├── src
│   ├── api
│   │   ├── commentsApi.ts
│   │   ├── postsApi.ts
│   │   └── userApi.ts
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── apple-icon.png
│   │   ├── favicon.ico
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── newblog
│   │   │   └── page.tsx
│   │   ├── newsletter
│   │   │   └── page.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── posts
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   └── projects
│   │       └── page.tsx
│   ├── components
│   │   ├── providers
│   │   │   ├── Providers.tsx
│   │   │   ├── ReactQueryProv.tsx
│   │   │   ├── ReduxProv.tsx
│   │   │   └── ThemeProv.tsx
│   │   └── UI
│   │       ├── common
│   │       │   ├── CustomNotFound.tsx
│   │       │   ├── TextError.jsx
│   │       │   ├── ThemeSwitcher.tsx
│   │       │   └── TmPreload.tsx
│   │       ├── footer
│   │       │   ├── Footer.tsx
│   │       │   └── units
│   │       │       └── FooterItems.tsx
│   │       ├── header
│   │       │   ├── Header.tsx
│   │       │   └── items
│   │       │       ├── MenuIcon.tsx
│   │       │       └── NavLinks.tsx
│   │       └── pages
│   │           ├── home
│   │           │   └── sections
│   │           │       ├── AllBlogPosts
│   │           │       │   ├── AllBlogPosts.tsx
│   │           │       │   └── blocks
│   │           │       │       └── Pagination.tsx
│   │           │       ├── landing
│   │           │       │   └── Landing.tsx
│   │           │       └── RecentBlogPosts
│   │           │           ├── RecentBlogPosts.tsx
│   │           │           └── units
│   │           │               ├── BlogPostsItem.tsx
│   │           │               └── BlogPostsItemClient.tsx
│   │           ├── newblog
│   │           │   └── sections
│   │           │       └── newPostForm
│   │           │           └── NewPostForm.tsx
│   │           └── postDetails
│   │               └── sections
│   │                   ├── PostASide
│   │                   │   └── PostASide.tsx
│   │                   ├── PostComments
│   │                   │   ├── PostComments.tsx
│   │                   │   └── units
│   │                   │       └── CommentItem.tsx
│   │                   ├── PostInfo
│   │                   │   └── PostInfo.tsx
│   │                   └── PostStories
│   │                       └── PostStories.tsx
│   ├── hooks
│   ├── redux
│   │   ├── app
│   │   │   ├── hooks.ts
│   │   │   └── store.ts
│   │   ├── features
│   │   │   ├── activeNav
│   │   │   │   └── activeNavSlice.ts
│   │   │   └── activePageNumber
│   │   │       └── activePageNumberSlice.ts
│   │   └── types
│   │       └── ActionCreatorTypes.tsx
│   ├── styles
│   │   ├── app.scss
│   │   ├── base
│   │   │   ├── _base.scss
│   │   │   ├── _global-rules.scss
│   │   │   ├── _reset-me.scss
│   │   │   ├── _theme.scss
│   │   │   └── _tm-preload.scss
│   │   ├── helpers
│   │   │   ├── _mixin.scss
│   │   │   └── _variable.scss
│   │   ├── myFramework
│   │   │   ├── _keyframs.scss
│   │   │   └── _myFramework.scss
│   │   ├── UI
│   │   │   ├── common
│   │   │   │   ├── _common.scss
│   │   │   │   └── _themeSwitcher.scss
│   │   │   ├── footer
│   │   │   │   └── _footer.scss
│   │   │   ├── header
│   │   │   │   └── _header.scss
│   │   │   ├── pages
│   │   │   │   ├── home
│   │   │   │   │   ├── sections
│   │   │   │   │   │   ├── AllBlogPosts
│   │   │   │   │   │   │   ├── blocks
│   │   │   │   │   │   │   │   └── _Pagination.scss
│   │   │   │   │   │   │   └── _AllBlogPosts.scss
│   │   │   │   │   │   ├── landing
│   │   │   │   │   │   │   └── _landing.scss
│   │   │   │   │   │   └── RecentBlogPosts
│   │   │   │   │   │       ├── units
│   │   │   │   │   │       │   └── _BlogPostsItem.scss
│   │   │   │   │   │       └── _RecentBlogPosts.scss
│   │   │   │   │   └── _home.scss
│   │   │   │   ├── newblog
│   │   │   │   │   ├── sections
│   │   │   │   │   │   └── newPostForm
│   │   │   │   │   │       └── _NewPostForm.scss
│   │   │   │   │   └── _newblog.scss
│   │   │   │   └── postDetails
│   │   │   │       ├── sections
│   │   │   │       │   ├── PostASide
│   │   │   │       │   │   └── _PostASide.scss
│   │   │   │       │   ├── PostComments
│   │   │   │       │   │   ├── units
│   │   │   │       │   │   │   └── _CommentItem.scss
│   │   │   │       │   │   └── _PostComments.scss
│   │   │   │       │   └── PostInfo
│   │   │   │       │       └── _PostInfo.scss
│   │   │   │       └── _PostDetails.scss
│   │   │   └── _layout.scss
│   │   └── vendors
│   │       └── _normalize.scss
│   ├── types
│   │   ├── comments.ts
│   │   ├── post.ts
│   │   └── user.ts
│   └── utils
└── tsconfig.json

```

## 👨🏻‍💻 Code Details
- I used Function Components - not class Components in React library.
- I used App folder base router- not page folder base router in Next library.
- I used React Query in client components to Fetch the full post content, author, and comments from the given API using.
- I used React Query to send the post data to the given API endpoint.
- I used Formik for build and handle form for send the post data.
- I used react-toastify to display a notification on submit.
- I used sass for style.
- I used Fetch directly in server components to Fetch the full post content, author, and comments from the given API using.

## 🗒️ You can let me know any feedback that I can improve the project with it

## ↩️ References
- [React Reference](https://react.dev/reference/react)
- [Next Documentation](https://nextjs.org/docs)
- [Json Placeholder Guide](https://jsonplaceholder.typicode.com/guide/)

## 🔑 License
**This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.**

##
👋 I hope you like my project.
