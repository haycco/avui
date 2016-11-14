# AVUI
Project based on Vue.js 2.x, AdminLTE, Bootstrap 3.x

<p align="center">
  <a href="https://saucelabs.com/u/vuejs"><img src="https://saucelabs.com/browser-matrix/vuejs.svg" alt="Sauce Test Status"></a>
</p>

**avui** is a fully responsive admin template that is forked from [AdminLTE](https://github.com/almasaeed2010/AdminLTE). The difference here is that this repo is tailored to use with vue.js 2.x. The UI is based on the [Bootstrap 3](https://github.com/twbs/bootstrap) framework. Highly customizable and easy to use. Fits many screen resolutions from small mobile devices to large desktops.
![AdminLTE Presentation](https://almsaeedstudio.com/AdminLTE2.png)

In an attempt to keep the project clean I have not included every plugin/feature that AdminLTE offers. You simply need to add the plugin in the /static/plugins folder to include them or use npm. I've included the popular ones.

The structure of the app is scaffolded by vue-cli. Which is a simple CLI tool that setups our environment. AVUI uses the webpack package. So we get a full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.

We leverage all the goodies that vue.js offers. Vue-Router for routing. Vue-Resource for AJAX calls. Vuex for state management. This project is using VueJS 2.0!.

I also recommend that you install vue-devtools for Chrome so that you can easily inspect that state of vue.
![vue-devtools](http://res.cloudinary.com/gatec21/image/upload/v1461611064/copilot-vuetools_t1mvpg.png)

The data that is being pulled uses faker.js to make it dynamic. This is for demo purposes. Look for demo.* for information that is generated dynamically.

Installation
------------
Installing avui is easy.

#### Download:

Download from Github

#### Using The Command Line:

```
git clone https://github.com/haycco/avui.git
```

#### Build Setup

``` bash
# install dependencies
sudo npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Documentation
-------------
Depending on the component you are working on you should have the following links handy.

- AdminLTE - [Offical Guide](https://almsaeedstudio.com/themes/AdminLTE/documentation/index.html)
- BootStrap 3 - [Offical Guide](http://getbootstrap.com/)
- Vue.js - [API](https://vuejs.org/v2/api/)
- Vuex - [Github](https://github.com/vuejs/vuex)
- Vue-Router - [Github](https://github.com/vuejs/vue-router)
- Vue-Resource - [Github](https://github.com/vuejs/vue-resource)

Information and tips about AVUI can be found in the [wiki](https://github.com/haycco/avui/wiki).

Contribution
------------
Contribution are always **welcome and recommended**! Here is how:

- Fork the repository ([here is the guide](https://help.github.com/articles/fork-a-repo/)).
- Clone to your machine ```git clone https://github.com/YOUR_USERNAME/avui.git```
- Make your changes
- Create a pull request

TODOS
-------
The purpose of this project is to provide a full example of how to leverage Vue. If you find anything that can be Vue-ified please send me a PR.

License
-------
AVUI is an open source project by licensed under [MIT](http://opensource.org/licenses/MIT).
