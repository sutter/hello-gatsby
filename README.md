# Gatsby Hello Starter

**Note:** This starter uses the [Gatsby v2](https://www.gatsbyjs.org/).

## ⚡️ Features

- **css-in-js** with Emotion: [website](https://emotion.sh/) - [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/?=emoti)
- TypeScript: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/?=type)
- Storybook : [website](https://storybook.js.org/)
- React-Helmet: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet)
- Sharp image processing library: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/?=gatsby-plugin-sharp)
- Sitemap: [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/?=sitemap)
- Robots.txt : [plugin doc](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/?=gatsby-plugin-robots-txt)
- Plop files generator : [website](https://github.com/amwmedia/plop)

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

    Go to [https://yvm.js.org/docs/overview](https://yvm.js.org/docs/overview)

    ```sh
    curl -fsSL https://raw.githubusercontent.com/tophat/yvm/master/scripts/install.sh | bash
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

1.  **Start Storybook**

    ```sh
    yarn storybook
    ```

1.  **Build**

    ```sh
    gatsby build
    ```

1.  **Build storybook**

    ```sh
    yarn build-storybook
    ```

1.  **Serve Build**

    ```sh
    gatsby serve
    ```

1.  **Create new file**

    ```sh
    yarn new
    ```

1.  **Format files with Prettier**

    ```sh
    gatsby format
    ```
