# Gatsby Hello Starter

**Note:** This starter uses the [Gatsby v2](https://www.gatsbyjs.org/).

## ⚡️ Features

- **css-in-js** with Emotion: [website](https://emotion.sh/) - [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/?=emoti)
- API Prismic: [website](https://prismic.io/) - [plugin doc](https://www.gatsbyjs.org/packages/gatsby-source-prismic/?=prismic)
- React-Helmet: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet)
- Offline: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/?=gatsby-plugin-offline)
- Sharp image processing library: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/?=gatsby-plugin-sharp)
- Sitemap: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/?=sitemap)
- Polyfill.io: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-polyfill-io/)

## 🚀 Prerequisites

1.  **Install the Gatsby CLI**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

1.  **Node version manager**

    Install [NVM](https://github.com/creationix/nvm) to manage its version of Node:

    ```sh
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
    ```

    **In the project**, install and use the current version of Node:

    ```sh
    # Installs the node version specified in the .nvmrc
    nvm install
    # Switches to the node version specified in the .nvmrc
    nvm use
    ```

    (Optional but **highly recommended**) Install [AVN](https://github.com/wbyoung/avn) to avoid having to run nvm use every time you open the project.

1.  **Install Yarn**

    Go to
    [https://yarnpkg.com/docs/install](https://yarnpkg.com/docs/install/#mac-tab)

    ```sh
    brew install yarn --ignore-dependencies
    ```

1.  **Prismic API KEY**

    Create a `.env.development` at the root of the project.

    ```sh
    # Prismic API_KEY
    API_KEY=XXXXX_YOUR_TOKEN_XXXXX
    ```

## 🔨 Commands

1.  **Download dependencies**

    ```sh
    yarn install
    ```

1.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```sh
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

1.  **Build**

    ```sh
    gatsby build
    ```

1.  **Serve Build**

    ```sh
    gatsby serve
    ```

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sutter/hello-gatsby)
