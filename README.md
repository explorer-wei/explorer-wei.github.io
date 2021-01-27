## Getting Started

### Prerequisites

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer. You can also use [Yarn](https://yarnpkg.com/) instead of NPM.

Besides, you need to have installed [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/)

---

## How To Use

### Development

First clone this repository. Then you'll need to install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run develop
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn develop
```

### Deployment

### Option 1: Github Pages

If you want to publish this website in Github Pages, here is an [instruction](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/).

```bash
# The easiest way to push a Gatsby app to GitHub Pages is by using a package called gh-pages.
$ npm install gh-pages --save-dev
```

Run `npm run deploy` you should see your website at `username.github.io`

### Option 2: Netlify

[Netlify](https://netlify.com) is free and powerful. For most templates you could find & download here and there, it provides the easiest way to put your website online without any extra work.

### Other CMDs

You can check the `package.json` file for all the built-in scripts:

```bash
$ npm run format # Use Prettier to format the codes

$ npm run develop # You’ll be able to visit the site locally at http://localhost:8000

$ npm run build # Generate the production build of your site; output built static HTML and JavaScript files into the "public" directory.
$ npm run serve # Serve the production build of your site at http://localhost:9000
$ npm run clean # Wipe out the cache (.cache folder) and public directories

$ npm run deploy # Deploy the website to Github Pages
```

---

## Instructions:

### Step 1 - Content

Go to `/src/context/config.js` and fill your information.

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

### Step 2 - STYLES

Go to `src/styles/_variables.scss` and change the values on this classes to your prefered HEX color

```scss
// Default values
$light-theme-primary: #f4f4f2;
$light-theme-secondary: #e8e8e8;
$light-theme-accent: #495464;

$dark-theme-primary: #222831;
$dark-theme-secondary: #393e46;
$dark-theme-accent: #eeeeee;
```

---

## Technologies used

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language

## References

Some great examples where I got the ideas from.

- [gatsby-simplefolio.netlify.app](https://github.com/cobidev/gatsby-simplefolio)
- [brittanychiang.com](https://github.com/bchiang7/v4)
- [developerfolio.js.org](https://github.com/saadpasta/developerFolio)
- [hashirshoaeb.github.io](https://github.com/hashirshoaeb/home)
- [www.alex-portfolio.org](https://github.com/rammazzoti2000/personal_portfolio)
