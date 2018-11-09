# GNC COMPONENT

This is a boilerplate to create react components for npm packages. It contains:

  - Simple sample of a component
  - Instruction about how to use it in the development process
  - Instruction about how to publish and use it from NPM.
  
## Work Flow

*(Probably you must write a Medium Post about this, using a little bit of comedy)*

Only 2 things are important, the `src` and `lib` folders.

Remember, DON'T worry about the folder structure or architecture of this app, because at the end the only thing that really matters and that will be published in the NPM Packages is the **lib** folder, more specifically the content inside it.

If you are thinking about something more elaborated like showing usage samples, well I suggest you to use SandBox for simple things and it you need to explain in detail some aspects of your component well create a blog Post in Medium (it integrates well with SandBox). **Just use the things we have now and make your live a lot easier** (Do not reinvent the whell all the time).

Once said that don't get surprised when you open the `src` folder and find nothing more than a common setup, MyComponent.js file and its test and css files (if needed). Remember the `index.html`, `App.js`, `index.scss` are just there for development purposes. The only thing that matters in there is YOUR COMPONENT and its related files, in case it is a complex component you will add folders and add some sort of organization, but with one command the whole three of files will be bundle inside the `lib` folder. And this component is:

`babel ./src/<MyComponentFileName>.js --out-file ./lib/index.js`

If your package has dependencies name them, but by preference those must be installed via the package.json provided to our package.

The package.json is always going to be published automatically. And don't worry if your dev dependencies are included in there, when someone uses your packages this will ignored, anyway you can remove them while publishing (manually).

"peerDependencies" over "dependencies" is a very important topic to consider, because we dont want for example `react` to be installed twice by those who uses your package.

## Getting Started

## To Do

* Styling in external files won't work, aphrodite or another way to put the css inside the js file must be used.
* Eslint support

### Installation

As simple as:

```sh
$ npm install gnc-component --save
```
or with **"yarn"**
```sh
$ yarn add gnc-component
```
### Usage

```js
import React from 'react';
import GncComponent from 'gnc-component';
```

```html
...
    <GncComponent
        prop1
        prop2={ <CustomComponent/> }
    />
...
```
## Example

`Use a code sandBox to show the world how your creation works`, and **if you need to explain it in more detail** well `create a blog post in Medium`.
In this case my sample component is very simple that only requires a sandBox to show you how to use it, here is the link: 

## API

|Prop|Values|Default|Type|Required|
|------|------|------|------|------|
| prop1 | true/false | false | Boolean | false |
| prop2 | Any Component | null | Function / Object | false |


## Author
  _Front End Developer_

  **Mario Victor Medrano Maldonado** 

  mario.medrano.maldonado@gmail.com

## License

MIT.