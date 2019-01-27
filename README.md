# Bare Bones React

**What you need to get started with React and EVERYTHING YOU DON'T**    

This is a really simple React project to get started quickly.  No linters, no formatting, coloring, minifiers, uglifiers, sass loaders, css loaders etc... Literally just enough to get React running so you can install those things as you like. 

What makes Bare Bones React powerful is that the environment is setup for both development and production using Node/ExpressJS.   However, should you want to just use Bare Bones React for the UI piece you can still do that as well and simply scrap the server folder. 

## Motiviation

Simply put, create-react-app is too bloated for many people's liking.  I personally don't like a bunch of opinionated built in config files for unit testing and ES linting I didn't approve of.  Bare Bones React will not get in your way when getting started with React. 

## Documentation

To get started simply download or clone the repository into a folder of your liking.  Make you you have NodeJS installed and run

> `npm install`

### Development Mode

To run the dev server environment

> `npm run buildDev`

### Production Build

To build production files for the built in NodeJS/ExpressJS web application

> `npm run build`

The server folder is the Node/ExpressJS application.  This is where you will extend your api.  To run your production Node environment (as you would on a server) CD into the server folder. 

Make sure your node_modules are installed

> `npm install`

Now fire up the server

> `node index.js`

You now have a hot reloading, client side developoment environment able to communicate with your backend ExpressJS web server which mimics the production environment.   When both apps are running Express will pick up on your JS changes as the webpack development server builds them. 

TO LEARN MORE ABOUT WEB DEVELOPMENT IN 2019

Check out my latest course which goes into much more detail with extending React for production environments. 

[Web Development in 2019](https://www.udemy.com/web-development-in-2019-from-start-to-finish/?couponCode=DISCOUNTBAREBONES)