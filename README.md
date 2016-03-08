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

I haven't previously used module loaders, so after doing research on Browserify and Webpack, I decided to use Webpack. Though not as important for an app this small, it saves having to load all stylesheets and scripts in the `index.html` file by bundling them and sending them in chunks.

#### Support any NxN board

I added a `Board rows & columns` input so the user can change the size of the board. I set the minimum number to 3 and the maximum number to 10 (100 squares!) to ensure the entire board could fit nicely with my responsive design.

#### Write error handling and/or tests

I used Karma and Jasmine to write unit tests for the board. There are 10 tests and all are passing. I handle basic errors like clicking on a square after it has already been assigned and clicking on the board after a winner has been declared. (Note the easter egg that happens in this case.)
