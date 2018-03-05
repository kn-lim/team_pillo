# Team Pillo
By Kevin Lim, Ken Truong and Perry Liu

## Key Resources
[React.js](https://reactjs.org/)

[React Router](https://github.com/ReactTraining/react-router)

[React Router Documentation](https://reacttraining.com/react-router/web/guides/philosophy)

[Bootstrap](https://getbootstrap.com/)

[Reactstrap](https://reactstrap.github.io/)

[Redux.js](https://github.com/reactjs/redux)

## How to Run
Use this to install all the packages needed:
```
npm install --save react react-dom react-scripts react-router react-router-dom react-router-redux react-router-config bootstrap reactstrap@5.0.0-beta redux react-redux

npm install --save-dev url-loader file-loader
```

Then go to your Webpack config located at:
```
/node_modules/webpack-dev-server/client/webpack.config.js
```

Add this to webpack.config.js:
```
module: {
  loaders: [
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
  ]
}
```

## How to Test
Before starting the testing procedure, you must ensure that your package.json have:
```
"scripts": {
  "test": "react-scripts test --env=jsdom",
}
```
If you are on a Mac, ensure that you have Homebrew installed and run this command:
```
brew install watchman
```

Test .js files are located in src/test