# github-users-viewer

Small SPA to view most popular github profiles by selected programming language.

**DEMO HERE**

#### How to run

1. `git clone https://github.com/krambertech/github-users-viewer.git`
2. `cd github-users-viewer`
3. `npm install`
4. Fill config file (`public/static/config.js`) with desires data, such as in `public/static/config.js.sample`
5. `npm start`
6. Now open http://localhost:3000/

**To build**

```
npm run build
```

**Run tests**

There are tests for reducers logic designed with mocha. To run them:

```
npm test
```

#### What is used

- [Webpack](https://webpack.github.io)
- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Babel](https://babeljs.io/)
- [PostCSS](https://github.com/postcss/postcss)
- [CSS modules](https://github.com/outpunk/postcss-modules)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Mocha](https://mochajs.org/)