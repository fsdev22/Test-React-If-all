# :blue_book: React Js Boilerplate

A boilerplate/starter project for quickly building react js webapp. visit (https://reactjs.org/docs/getting-started.html) for details.

By running some simple steps you will get a production-ready react-js app installed and fully configured on your machine. The apps comes with many built-in features centralized error handling, form validation, unit tests, State data centralized using redux, etc. For more details, check the features list below.

## :open_book: **Table of Contents**

- [:blue\_book: React Js Boilerplate](#blue_book-react-js-boilerplate)
  - [:open\_book: **Table of Contents**](#open_book-table-of-contents)
  - [**Getting Started**](#getting-started)
  - [**Features**](#features)
  - [**Commands**](#commands)
  - [**Packages**](#packages)
  - [**Project Structure**](#project-structure)
  - [**UI Design**](#ui-design)
  - [**Theming**](#theming)
  - [**Form Validation**](#form-validation)
  - [**Centralized State**](#centralized-state)
  - [**Navigation**](#navigation)
  - [**Authentication**](#authentication)
  - [**API Callout**](#api-callout)
  - [**Internationalization**](#internationalization)
  - [**Unit Test**](#unit-test)
  - [**Security**](#security)
  - [**Linting**](#linting)
  - [**License**](#license)

## **Getting Started**

Before you start the below steps, make sure you have installed node (**v19.7.0** or above) in your machine. This repo is compataible with **node** version **19.7.0**. If you install any higer version or lower version of node, you have to adjust other project's packages versions accordingly. Also this project is build with react version
**v18.2.0**

To start a project follow the below setps:

**1.** Installations:

**1.** Install node.js in your computer (https://nodejs.org/en/download/)

**2.** Install the dependencies:

```bash
npm install
```

**3.** Init your own repo and push it to your version control provider(_ex:_ Github, Bitbucket, etc.):

```bash
git init
git status
git add -A
git commit -m "commit message"
git remote add origin your_repo_url
git push -u origin master
```

**Note:** In case if you face any test coverage error while commmit, just go to the `.husky` folder and open the `pre-commit` file. Remove/Commentout the `npm run test` statement and push it to git. **Keep in mind that after your inital commit is completed just reverback the changes of `pre-commit` file.** _Never remove this commands again. Later if you face any coverage error, write the proper test case and fix it._

**4.** Command to start:

```bash
# Start a local dev server for the app
npm run dev
```

**5.** Changes in **package.json** file:

Change the followings inside the `package.json` file -

```bash
"name": "your-project-name",
"description": "your project related description",
"author": "auther of the code",
```

**7.** Remove the content of README.md file:

Remove all the content of README file and put your own project related content.
For example -

```bash
Your project name
The list of commands and its use cases
```

**8.** Testing the app using react dev tool: (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

With this tool you can get clear insight about your react application.
For debugging redux you can use redux-devtools (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

**Development and Production Mode**: Your project will always run in one of two modes: development or production. By default, running your project locally runs it in development mode via any available port, whereas a published project (via aws), or any other service provider , will run in production mode.

## **Features**

- **Dependency management**: with [vite] (https://vitejs.dev/guide/)
- **Application testing on web**: React dev tools(https://beta.reactjs.org/learn/react-developer-tools)
- **UI design**: using [material-ui](https://mui.com/material-ui/getting-started/overview/).
- **Theme setup**: using [nmaterial-ui theme](https://mui.com/material-ui/customization/theming/) feature.
- **UI responsive**: UI responsive using material-ui build in [responsive](https://mui.com/material-ui/migration/v5-style-changes/) feature.
- **Dark mode/night mode**: Dark mode and night mode of UI using material-ui [dark mode](https://mui.com/material-ui/customization/dark-mode/) feature.
- **Internationalization**: using [i18next](https://www.i18next.com/).
- **Localization**: using [react-i18next](https://www.npmjs.com/package/react-i18next) , [i18next](https://www.i18next.com/) and [i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector)
- **Centralized state management**: using [react-redux](https://react-redux.js.org/introduction/getting-started) and [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started).
- **Form validation**: using [react-hook-form](https://react-hook-form.com/get-started).
- **API callout**: using [axios](https://www.npmjs.com/package/axios).
- **Page navigation**: using [react-router-dom V6](https://reactrouter.com/en/main/start/tutorial).
- **Unit test**: unit tests using [vitest](https://vitest.dev/)
- **Code coverage**: static code coverage check using [vitest](https://vitest.dev/guide/coverage.html) code coverage features.
- **Code quality**: static code quality check with [Eslint](https://eslint.org/docs/user-guide/getting-started)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Code editor**: use [vscode](https://code.visualstudio.com/)

## **Commands**

Running locally:

```bash
# Start a local dev server for the app
npm run dev

```

Testing:

```bash
# run all tests
npm run test

# run test coverage
npm run coverage
```

Linting:

````bash
# run ESLint
npm run linter

# fix ESLint errors
npm run linter:fix

# run prettier
npm run prettier

# fix prettier errors
npm run prettier:fix

Build:
```bash
npm run build
````

## **Packages**

You will find the list of packages that is being used in this project inside the `package.json` file.

Dependencies packages:

| Name | Description |
| ---- | ----------- |

|[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)|https://www.npmjs.com/package/@reduxjs/toolkit|
|[axios](https://github.com/axios/axios)|Axios is a simple promise based HTTP client for the browser and node.js.|
|[i18next](https://www.npmjs.com/package/i18next)|i18next is a very popular internationalization framework for browser or any other javascript environment|
|[react](https://www.npmjs.com/package/react)|React is a JavaScript library for creating user interfaces.|
|[react-dom](https://www.npmjs.com/package/react-dom)|This package serves as the entry point to the DOM and server renderers for React.|
|[react-hook-form](https://react-hook-form.com/get-started)|Performant, flexible and extensible forms with easy-to-use validation.|
|[react-i18next](https://react.i18next.com/)|`react-i18next` is a powerful internationalization framework for React / React Native which is based on `i18next`.|
|[react-redux](https://react-redux.js.org/introduction/getting-started)|React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.|
|[@emotion/react](https://emotion.sh/docs/introduction)|Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.|
|[@emotion/styled](https://emotion.sh/docs/styled)|styled is a way to create React components that have styles attached to them.|
|[@hookform/resolvers](https://react-hook-form.com/api/useform/#resolver)|This function allows you to use any external validation library such as Yup, Zod, Joi, Vest, Ajv and many others. The goal is to make sure you can seamlessly integrate whichever validation library you prefer. If you're not using a library, you can always write your own logic to validate your forms.|
|[joi](https://github.com/hapijs/joi#readme)|The most powerful schema description language and data validator for JavaScript.|
|[@mui/material](https://mui.com/)|MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.|
|[@mui/icons-material](https://mui.com/material-ui/material-icons/)|2,100+ ready-to-use React Material Icons from the official website.|
|[react-router-dom](https://www.npmjs.com/package/react-router-dom)|The react-router-dom package contains bindings for using React Router in web applications.|
|[i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector)|This is a i18next language detection plugin use to detect user language in the browser with support for:
cookie (set cookie i18next=LANGUAGE)
sessionStorage (set key i18nextLng=LANGUAGE)
localStorage (set key i18nextLng=LANGUAGE)
navigator (set browser language)
querystring (append ?lng=LANGUAGE to URL)|
|[i18next-http-backend](https://github.com/i18next/i18next-http-backend)|i18next-http-backend is a backend layer for i18next|

Dev dependencies packages:

| Name | Description |
| ---- | ----------- |

|[eslint](https://www.npmjs.com/package/eslint)|ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.|
|[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)|Turns off all rules that are unnecessary or might conflict with [Prettier].|
|[eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)|Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.|
|[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)|React specific linting rules for eslint.|
|[husky](https://typicode.github.io/husky/#/)|Husky improves your commits. You can use it to lint your commit messages, run tests, lint code, etc. when you commit or push. Husky supports [all Git hooks](https://git-scm.com/docs/githooks).|
|[lint-staged](https://github.com/okonet/lint-staged)|Run linters against staged git files. Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style.|
|[prettier](https://github.com/prettier/prettier)|Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.|
|[jsdom](https://www.npmjs.com/package/jsdom)|jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js. In general, the goal of the project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications.|
|[node-sass](https://www.npmjs.com/package/node-sass)|Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.|
|[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)|React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.|
|[@types/react](https://www.npmjs.com/package/@types/react)|This package contains type definitions for React (http://facebook.github.io/react/).|
|[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)|This package contains type definitions for React (react-dom) (https://reactjs.org).|
|[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)|The all-in-one Vite plugin for React projects.|
|[vite](https://vitejs.dev/)|A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).|
|[vitest](https://vitest.dev/guide/)|Vitest is a blazing fast unit test framework powered by Vite.|

## **Project Structure**

```
ck--react-js--fe-master
├── i18n
│   ├── index.js
│   ├── en
│   │   ├── common-en
│   │   │   ├── fieldEnTxt.js
│   │   │   ├── headerFooterEnTxt.js
│   │   │   ├── index.js
│   │   │   ├── lockedContentTxt.js
│   │   │   ├── signinEnTxt.js
│   │   │   └── signupEnTxt.js
│   │   └── index.js
│   └── no
│       ├── common-no
│       │   ├── fieldNoTxt.js
│       │   ├── headerFooterNoTxt.js
│       │   ├── index.js
│       │   ├── lockedContentTxt.js
│       │   ├── signinNoTxt.js
│       │   └── signupNoTxt.js
│       └── index.js
├── husky
│   ├── _
│   │   ├── gitignore
│   │   └── husky.sh
│   └── pre-commit
├── public
├── src
│   ├── __tests__
│   │   ├── components
│   │   │   └── App.test.jsx
│   │   └── test-utils
│   │       └── testSetup.jsx
│   ├── assets
│   │   └── comlogo.png
│   ├── components
│   │   └── navbar
│   │       └── ButtonAppBar.jsx
│   ├── routing
│   │   └── RouteConfig.jsx
│   ├── services
│   │   ├── utils
│   │   │   ├── constantUtils.jsx
│   │   │   └── constantValues.jsx
│   │   ├── validations
│   │   │   ├── signinvalidations
│   │   │   │   └── validationSchema.jsx
│   │   │   └── signupvalidations
│   │   │       └── validationSchema.jsx
│   │   └── web
│   │       ├── requestWebService.jsx
│   │       └── apis
│   │           ├── logoutApi.jsx
│   │           ├── signinApi.jsx
│   │           └── signupApi.jsx
│   ├── styles
│   │   ├── scss
│   │   │   └── App.scss
│   │   └── theme-st
│   │       ├── theme.js
│   │       └── base
│   │           └── colors.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── dashboard
│   │   │   └── index.jsx
│   │   ├── signin
│   │   │   └── index.jsx
│   │   └── signup
│   │       └── index.jsx
│   └── redux
│       ├── slices
│       │   ├── auth
│       │   │   └── authSlice.jsx
│       │   └── users
│       │       └── userSlice.jsx
│       └── index.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── .prettierrc
├── .eslintrc.json
└── vite.config.js

```

## **UI Design**

For design the UI we used the [Material Ui](https://mui.com/material-ui/getting-started/installation/) library.

Material UI is an open-source React component library that implements Google's Material Design.

It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

The easiest way to use the Material Ui component is as follows :

**1**. Import the Material Ui component-

```javascript
import {
  Box,
  Stack,
  FormControl,
  Button,
  Typography,
  TextField,
} from "@mui/material";
```

**2**. Use the component to build your UI-

```html
<Box>
  <Stack>
    <Typography> This is heading </Typography>
    <Stack>
      <Typography> This is subtitle. </Typography>
      <FormControl>
        <TextField />
      </FormControl>
      <button>Sign in</button>
    </Stack>
  </Stack>
</Box>
```

## **Theming**

The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc.

Themes let you apply a consistent tone to your app. It allows you to customize all design aspects of your project in order to meet the specific needs of your business or brand.

Steps to define your theme and use it in UI:

1. Under styles-> theme-st -> theme.js you can specify the settings for your theme. You can also override certain colors , look and feel of any mui component from this custom theme palette.
2. Use theme in UI
   Now we need to provide the custom theme in our app. Inside the main.jsx wrap everything inside ThemeProvider and mention the theme.

   ```
   import { ThemeProvider } from "@mui/material/styles";
   import CssBaseline from "@mui/material/CssBaseline";
     <ThemeProvider theme={darkTheme}>
     <CssBaseline />

     .....
     </ThemeProvider>
   ```

## **Form Validation**

To validate the Form we have used the `react-hook-form` package. React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.

In our project we have created some custom Form elements for validation. For example `FormRadioField`, `FormInputField`. Inside that we have used the `Controller` of the `react-hook-form` and passes the rules inside the `rules` prop to validate the filed data.

You will get those componnets inside the `src/componets/common-co/form-com` folder.

You can use those components inside your form in the following way -

Import the componets and useForm hook of react-hook-form -

```javascript
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import schema from "../services/validations/signinvalidations/validationSchema";

const SignIn = () => {
  ...
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: joiResolver(schema),
  });
  ...
  return (
    <Box m={2}>
      <Typography m={2} variant="h5" align={MATERIAL_STYLE_CONSTANTS.center}>
        {t(SIGNIN_CONSTANTS.title)}
      </Typography>
      <Box component={COMPONENT_TYPES.form} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label={t(SIGNUP_CONSTANTS.username)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.name)}
            error={errors.name ? true : false}
            helperText={errors.name && `${errors?.name?.message}`}
          />
          <TextField
            type={FIELD_TYPE.password}
            label={t(SIGNUP_CONSTANTS.password)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.password)}
            error={errors.password ? true : false}
            helperText={errors.password && `${errors.password?.message}`}
          />
        </Stack>
        <Box
          mt={2}
          sx={{
            display: MATERIAL_STYLE_CONSTANTS.flex,
            alignItems: MATERIAL_STYLE_CONSTANTS.center,
            justifyContent: MATERIAL_STYLE_CONSTANTS.center,
          }}
        >
          <Button
            type={BUTTON_VALUES.buttonType}
            variant={BUTTON_VALUES.buttonVariant}
          >
            {t(SIGNIN_CONSTANTS.signinBtn)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default SignIn;
```

[More details](https://react-hook-form.com/get-started) about `react-hook-form`.

## **Centralized State**

We have centralized state management mechanism using `react-redux` and `redux-toolkit`.

`Redux` is an open-source JavaScript library for managing and centralizing application state. `React Redux` is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

React Redux includes a `<Provider />` component, which makes the Redux store available to the rest of your app:

```jsx
import React from "react";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <UiLayout />
    </Provider>
  );
};
export default App;
```

React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store.

`useSelector` reads a value from the store state and subscribes to updates, while `useDispatch` returns the store's dispatch method to let you dispatch actions.

We have used another package call Redux Toolkit. The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

1. "Configuring a Redux store is too complicated"
2. "I have to add a lot of packages to get Redux to do anything useful"
3. "Redux requires too much boilerplate code"

In this project we have used this features to create our redux store. We have written our redux related configuration inside the `redux` folder.

## **Navigation**

In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

Setting up routing ->

1. In the root file wrap everything with BrowserRouter

   ```
       import { BrowserRouter } from "react-router-dom";

       ReactDOM.createRoot(document.getElementById("root")).render(
           <BrowserRouter>
               <React.StrictMode>
               <App />
               </React.StrictMode>
           </BrowserRouter>
       );

   ```

2. Define Routes
   In RouteConfig component define the routing configuration. The protected route and public route both are shown here.

   ```
        import { Box } from "@mui/system";
        import React from "react";
        import { useSelector } from "react-redux";
        import { Route, Routes } from "react-router-dom";
        import Dashboard from "../pages/Dashboard";
        import SignIn from "../pages/Signin";
        import SignUpFrom from "../pages/Signup";

        function RouteConfig() {
        const { isLoggedIn } = useSelector((state) => state.auth);
        return (
            <Box>
            {isLoggedIn ? (
                <Routes>
                <Route path={"/dashboard"} element={<Dashboard />} />
                </Routes>
            ) : (
                <Routes>
                <Route path={"/"} element={<SignUpFrom />} />
                <Route path={"/signin"} element={<SignIn />} />
                </Routes>
            )}
            </Box>
        );
        }

        export default RouteConfig;
   ```

3. Usages for navigation
   Inside the Signin.jsx under pages you can find the example for navigation.
   ```
       navigate(`/${ROUTE_CONFIG_NAMES.dashboard}`);
   ```

## **Authentication**

We have used the JWT token to handle the use session. We get the auth-token in the response header of login api. We store it insode the redux store. You will get the details about this session configuration in the `src/store/sessionSlice.js`

Now we used this auth-token during our auth related API callout and to render the Auth header and auth screenes.

## **API Callout**

We have used the [axois]() package to support the API callout. Axios is a promise based HTTP client for the browser and `Node` js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints.

We have configured the axois call `/src/services/web/api/requestWebService.js` file to enable the request web service in our application. `sendApiRequest` is the medthod that we will use to send the API request.

```javascript
// SEND API REQUEST
const sendApiRequest = async (
  apiDetails,
  params = {},
  authToken = null,
  headers = {}
) => {
  try {
    const reqConfig = {
      method: apiDetails.METHOD,
      url: constantsUtil.API_BASE_URL + apiDetails.URL,
      headers: {
        "Content-Type": apiDetails.CONTENT_TYPE,
        "auth-token": authToken,
        ...headers,
      },
      data: params,
    };
    return await axios(reqConfig);
  } catch (exp) {
    // eslint-disable-next-line no-console
    console.error("EXCEPTION: INSIDE sendApiRequest() METHOD. : ", exp);
    return null;
  }
};
```

Here we have configured the reqConfig object for axios. Where we define the request path, request method, request header, and request params. Aftr that passes this config object to the `axios`.

[More details](https://axios-http.com/docs/intro) about axios.

## **Internationalization**

Internationalization (i18n for short) is the process of adapting an application to work with different languages and regions.

We have achive this using the `i18next` package. I18next is an internationalization-framework written in and for JavaScript. `i18next` goes beyond just providing the standard `i18n` features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.

In our project we define our configuration related to the `i18next` inside the `src/i18n` folder.

Keep in mind that don't harcode any text inside the componnet. Use this i18n folder do define your text in a key value pare in a language wise folder. For example we have written englisg text inside the en folder, also written the norwegian text inside the no folder.

For example consider the `/src/i18n/en/common-en/signinEnTxt.js` -

```javascript
const signinEnTxt = {
  signin: {
    title: "Sign in",
    subTitle:
      "Test login page. Put your own login page content here. To test dashboard-ui, enter 03068300891 as an SSN and click on the sign in button.",
    signinBtn: "Sign in",
  },
};

export default signinEnTxt;
```

Main configuration of the i18n instance is present inside the root `index.js` file of the `i18n` folder. For example -

```
    import exText from "./en";
    import noText from "./no";
    import i18n from "i18next";
    import Backend from "i18next-http-backend";
    import LanguageDetector from "i18next-browser-languagedetector";
    import { initReactI18next } from "react-i18next";

    const resources = {
    en: { ...exText },
    no: { ...noText },
    };

    const options = {
    // order and from where user language should be detected
    order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
    ],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    };

    i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: options,
        fallbackLng: "no",
        debug: true,
        interpolation: {
        escapeValue: false,
        },
        resources: {
        ...resources,
        },
    });
    export default i18n;

```

After that you can access those text in the componnet using useTranslation hook of `i18next` package. For example -

```jsx
import { joiResolver } from "@hookform/resolvers/joi";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  BUTTON_VALUES,
  COMPONENT_TYPES,
  MATERIAL_STYLE_CONSTANTS,
  ROUTE_CONFIG_NAMES,
  SIGNUP_CONSTANTS,
  FIELD_TYPE,
  REGISTER_FIELDS_FOR_REACT_FORM_HOOK,
  SIGNIN_CONSTANTS,
} from "../services/utils/constantValues";
import schema from "../services/validations/signinvalidations/validationSchema";
import signinApi from "../services/web/apis/signinApi";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/auth/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: joiResolver(schema),
  });
  const onSubmit = async (data) => {
    const res = await signinApi({
      password: data.password,
      username: data.name,
    });
    dispatch(authActions.login({ token: res.data?.auth_token }));
    navigate(`/${ROUTE_CONFIG_NAMES.dashboard}`);
  };

  return (
    <Box m={2}>
      <Typography m={2} variant="h5" align={MATERIAL_STYLE_CONSTANTS.center}>
        {t(SIGNIN_CONSTANTS.title)}
      </Typography>
      <Box component={COMPONENT_TYPES.form} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label={t(SIGNUP_CONSTANTS.username)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.name)}
            error={errors.name ? true : false}
            helperText={errors.name && `${errors?.name?.message}`}
          />
          <TextField
            type={FIELD_TYPE.password}
            label={t(SIGNUP_CONSTANTS.password)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.password)}
            error={errors.password ? true : false}
            helperText={errors.password && `${errors.password?.message}`}
          />
        </Stack>
        <Box
          mt={2}
          sx={{
            display: MATERIAL_STYLE_CONSTANTS.flex,
            alignItems: MATERIAL_STYLE_CONSTANTS.center,
            justifyContent: MATERIAL_STYLE_CONSTANTS.center,
          }}
        >
          <Button
            type={BUTTON_VALUES.buttonType}
            variant={BUTTON_VALUES.buttonVariant}
          >
            {t(SIGNIN_CONSTANTS.signinBtn)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default SignIn;
```

For more details please visit https://www.i18next.com/

To have formatted inputs , cleave.js is used. Here is one example

```
// import statement
import Cleave from "cleave.js/react";
...

const [date, setDate] = useState("");
const onDateChange = (e) => {
  setDate(e.target.value);
};
// jsx
<Cleave
  placeholder="MM/DD/YYYY"
  options={{ date: true, datePattern: ["m", "d", "Y"] }}
  onChange={onDateChange}
/>

```

If you want to use scss in your project then please install sass package as dev dependencies.
npm i sass -D

## **Unit Test**

We have enabled the unit testing feature using the [vitest] (https://vitest.dev)
Write your test classes inside the **texts** folder.
Also inside the vite.config.js add the absolute path to the test file. Ex. "setupFiles: ["./src/__tests__/components/App.test.jsx"]"

```bash
npm run test
```

Also check the test coverage using the following command -

```bash
npm run coverage
```

Keep in mind that during commit if your test coverage is not atleast 80% then it will not allow you to push into Git.
vite.config.js

```
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [react()],
    test: {
        watch: false,
        globals: true,
        environment: "jsdom",
        coverage: {
        include: ["src/**/*"],
        exclude: [
            "src/styles/theme-st/theme.js",
            "src/styles/theme-st/base/colors.js",
            " src/services/web/requestWebService.jsx ",
            "src/redux/index.jsx",
            "src/i18n/index.js",
            "src/main.jsx",
        ],
        reporter: ["text", "json", "html"],
        all: true,
        statements: 80,
        },
    },
    });
```

## **Security**

**_Cross Site Scripting (XSS)_**: By default, React DOM escapes any values embedded in JSX before rendering them. Thus, it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks. [More details](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks).

**_SQL Injection Prevention_**: We have used the react-hook-form to validate the user input data. It will prevent this type of injection.

**_Prevent DDoS Attacks_**: Add limitation on the number of requests to a given Ip from a specific source. In our middleware we have used the request rate limiter.

**_Access Control_**: We have defice JWT token based authentication mechanism in pour project. Only the authenticated user will be able to access the Private pages.

**_No Broken Authentication_**: Use multi-factor and 2-factor authentication as well as cloud-based authentication. For example Google, Facebook authentication.

**_Secure HTTP Auth_**: We have used the JWT token based auth. We store an token inside the redux store and have used it for user auth session management.

## **Linting**

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

You will also get the react best practices guide from [here](https://github.com/airbnb/javascript/tree/master/react).

To modify the ESLint configuration, update the `.eslintrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore`.

## **License**

MIT
