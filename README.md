# REACT Front-end Project Structure

## Additional Libraries included :
 - `react-router`
 - `react-hook-forms`
 - `redux-toolkit`
 - `axios`
 
 You can run `npm install` command in beginning of using this project-structure to update all libraries.
 
## Folder Structure :
- 📁 public
- 📁 src 
    - 📁 assets
    - 📁 components 
    - 📁 config
    - 📁 hooks
    - 📁 pages
    - 📁 services
    - 📁 store
    - 📁 utils
    - 🖹 App.jsx
    - 🖹 App.css
    - 🖹 main.jsx
    -  🖹 index.css
- 🖹 .gitignore 
- 🖹 .env
- 🖹 .env.sample
- 🖹 eslint.cofig.js
- 🖹 index.html
- 🖹 packjage.json
- 🖹 README.md
- 🖹 vite.config
## Purposes :
### 📁 **public :**

This folder stores static assets like favicon.ico, and other files not processed by Vite or referenced directly in the source code, making these files directly accessible via the web server without any bundling. Usually these are files that are directly included in index.js and never used in any react code 
*** 
### 📁 **src  :**

This directory contains all of the source code that make up the React application, serving as the main container for all development related files.
#### 📁 assets : 
This folder holds static assets such as images, fonts etc that will be used across the application.
#### 📁 components :
This directory contains the reusable UI components of the application like Input or buttons or form components etc.

component folder will include subfolders for each component that will include the `.jsx` and `.css` file for that component like :
> component folder : 
	Abc folder :
		Abc.jsx
		Abc.css
#### 📁 config :
This folder include configuration files for the app, including settings, API base URLs, and global constants, providing a central point for all settings required by the application.
#### 📁 hooks :
This folder will be used to store custom hooks for react app.
#### 📁 pages :
This folder stores React components that represent different pages or routes in the application like Home page or About page etc.
#### 📁 services :
This folder includes backend connectivity code logic like API calls functions etc.
#### 📁 store :
This folder include files for global and centralized state management  manipulated through Context_API or Libraries like Redux
#### 📁 utils :
This folder include utility functions that can serve as helpers in code base.
Like , a className to handle errors , a className to handle responses , a function to handle async functions etc.
#### 🖹 App.jsx :
This file represents the root component of the React application, acting as the main wrapper for all other components and often setting up routes and layouts.
#### 🖹 App.css :
Stylesheet for App component. Ideally the styles in this file should be specific to App component and not be used for any global styles.
#### 🖹 main.jsx :
This file is the primary entry point for the React application, where ReactDOM.createRoot() initiates the rendering process by mounting the App component into the DOM
#### 🖹 index.css :
This file holds global CSS styles, base layout configurations, setting up the basic styles for the entire application.
***
### 🖹 .gitignore :
File 
### 🖹 .env : 
This file stores environment variables, enabling storage of sensitive information like API keys and other configuration options separately from the codebase.
### 🖹 .env.sample :
This file provides a template for .env files, providing examples and instructions for defining environment variables required by the application.
### 🖹 eslint.cofig.js :
This file configures ESLint for the React project, setting up rules for code linting and style checking. It is needed to enforce consistent and quality code formatting.

**ESLint is a tool that finds and fixes problems in your JavaScript code.** 
It helps you write better code by:
- **Catching errors:** Finds syntax problems and potential bugs.
- **Enforcing style:** Ensures consistent coding style.
- **Improving quality:** Suggests ways to write cleaner, more efficient code.

It's like an automated code reviewer that works while you write, helping you avoid common issues and maintain a high standard for your JavaScript codebase.
### 🖹 index.html :
This file is the main HTML document where the React application is mounted, acting as the base template for the app. It's necessary as the main entry point in the browser and where React will hook on to start the app.
### 🖹 packjage.json :
This file contains project metadata and dependency information, listing all npm packages required by the project, acting as the central management file for dependencies and scripts.
### 🖹 README.md :
This file serves as the primary documentation file.
###  🖹 vite.config :
This file stores configuration settings for Vite, including server options, plugins, and other build customizations, providing custom build instructions for the app. It is needed to setup how Vite builds and serves the app.
## Additional folders :

### 📁 src/themes:
If you need more than one theme in your application, creating a theme folder in src/ folder can be useful.

### 📁 src/styles:
For seprate stylesheets for components and pages like :

Component folder :
	Abc.jsx

Styles folder :
	Abc.css
# SIH-Demo-Site
