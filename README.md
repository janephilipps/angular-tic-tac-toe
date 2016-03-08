# Angular Tic Tac Toe

By [Jane Philipps](mailto:jane.philipps@gmail.com)

[janephilipps.github.io](http://janephilipps.github.io)

## Instructions

1. Navigate to [repo](https://github.com/janephilipps/angular_tic_tac_toe)
2. Clone locally using `git clone git@github.com:janephilipps/angular_tic_tac_toe.git`
3. Install dependencies using `npm install`
4. Run tests using `npm run test`
5. Start your server using `npm run dev`
6. Navigate to app in [browser](http://localhost:8080)
7. Enjoy!


## Discussion

The technologies I used to build this app are: Angular 1, Webpack, Karma, Jasmine, HTML, and CSS.  The app has been tested in the latest versions of Chrome, Firefox, and Safari.

## Bonuses!

#### Use CSS to add more detail, animations or responsive design

I used CSS to add some color and animations to the board for winning conditions. I used Angular's built in directive `ng-class` to make this happen. I also made the board responsive, so it looks good as you resize your browser and on mobile devices.

#### Allow for more than one independent board to be on the same page

I created a custom directive for the board and used Angular's built in directive `ng-repeat` to allow the user to click a button to add more boards to the page. Because `ng-repeat` is built to loop over an array, I converted my `$scope.boards` number variable to an array. Each board operates independently during gameplay.

#### Add the ability to restart a game after it has ended

I added a `New Game` button which allows the user to reset the board at any time during gameplay or once a game has ended. This button also takes in account if the `Board rows & columns` number has been changed.

#### Use module loaders for dependency management

I haven't previously used module loaders, so after doing research on Browserify and Webpack, I decided to use Webpack. Though not as important for an app this small, it saves having to load all stylesheets and scripts in the `index.html` file by bundling them and sending them in chunks. Here is the output from running Webpack:

```
http://localhost:8080/webpack-dev-server/
webpack result is served from /
content is served from ./builds
Hash: ed058ac319626ce79317
Version: webpack 1.12.14
Time: 1240ms
     Asset       Size  Chunks             Chunk Names
 bundle.js    1.18 MB       0  [emitted]  main
index.html  740 bytes          [emitted]
chunk    {0} bundle.js (main) 1.15 MB [rendered]
    [0] ./public/index.js 381 bytes {0} [built]
    [1] ./~/angular/index.js 48 bytes {0} [built]
    [2] ./~/angular/angular.js 1.13 MB {0} [built]
    [3] ./public/css/responsive.css 934 bytes {0} [built]
    [4] ./~/css-loader!./public/css/responsive.css 423 bytes {0} [built]
    [5] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
    [6] ./~/style-loader/addStyles.js 7.21 kB {0} [built]
    [7] ./public/css/style.css 919 bytes {0} [built]
    [8] ./~/css-loader!./public/css/style.css 1.7 kB {0} [built]
    [9] ./public/js/controllers/HomeCtrl.js 277 bytes {0} [built]
   [10] ./public/js/controllers/BoardCtrl.js 3.78 kB {0} [built]
   [11] ./public/views/board.html 556 bytes {0} [built]
Child html-webpack-plugin for "index.html":
    chunk    {0} index.html 773 bytes [rendered]
        [0] ./~/html-webpack-plugin/lib/loader.js!./public/index.html 773 bytes {0} [built]
webpack: bundle is now VALID.
```

#### Support any NxN board

I added a `Board rows & columns` input so the user can change the size of the board. I set the minimum number to 3 and the maximum number to 10 (100 squares!) to ensure the entire board could fit nicely with my responsive design.

#### Write error handling and/or tests

I used Karma and Jasmine to write unit tests for the board. There are 10 tests and all are passing. I handle basic errors like clicking on a square after it has already been assigned and clicking on the board after a winner has been declared. (Note the easter egg that happens in this case.)





