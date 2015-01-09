## Get the code
```shell
$ git clone https://github.com/sean-sq-chen/wizard-angular.git [directory]
```

## Install Gulp

http://gulpjs.com/
```shell
npm install --global gulp
```

## Compile, install and run server with NodeJS

```shell
$ cd [directory]
$ cd tools/
$ npm install
$ gulp
$ cd ../server-side/
$ npm install
$ npm start
```
## Generated files
All generated files should not be edited, instead, edit their source files.
* `.css` files, except for those in `/client-side/lib/`, are generated from `.scss`.
* `index.html` is generated from `_index.html`.
