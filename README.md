kitajchuk-web3
==============

> Once a day unlearn something new.

[![CI](https://github.com/kitajchuk/kitajchuk-web/actions/workflows/main.yml/badge.svg)](https://github.com/kitajchuk/kitajchuk-web/actions/workflows/main.yml)
[![CircleCI](https://circleci.com/gh/kitajchuk/kitajchuk-web/tree/main.svg?style=shield)](https://circleci.com/gh/kitajchuk/kitajchuk-web/tree/main)

## Stack

- [Next.js](https://nextjs.org)
- [Preact](https://preactjs.com/)

## Jamstack

- [kitajchuk.vercel.app](https://kitajchuk.vercel.app/)
  - Build command: `yarn download-s3 && next build`
- [kitajchuk.netlify.app](https://kitajchuk.netlify.app/)
  - Build command: `yarn download-s3 && next build && next export`
  - Publish directory: `out`

## Commands

- `yarn install`
  - Installs node packages
  - Installs [husky](https://typicode.github.io/husky/) for git `pre-commit` hooks
  - Husky will run `yarn build` before a git commit and stop the commit if `lint` or `build` fails
- `yarn dev`
  - Serves local dev at [localhost:3000](http://localhost:3000)
- `yarn lint`
  - Runs [ESLint](https://eslint.org/) validations on source JS
  - Install the [ESLint plugin for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint&ssr=false#overview)
- `yarn build && yarn start`
  - Create an optimized Next.js production build and serve it locally
- `yarn build && yarn export`
  - Create a static production build for any static deploy target
