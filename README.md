# Interview test for data.gouv

This project is using Vue.js 3 has been generated with Vite.
It is a response for the test interview available here https://github.com/etalab/interview-test-dev-front

## Things to improve

- Currently, the user token is not being saved. One option would be to store it in the localStorage and cookies. However, it's important to handle this process carefully to ensure protection against XSS and CSRF attacks.
- Do unit and end-to-end tests.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
