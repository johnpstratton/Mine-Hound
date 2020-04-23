# 201FinalProject
## John Stratton, Ashley Biermann, Mason Fryberger

[*Click Here to Return to the HomePage*](index.html)

### Wireframe visualization for each page

[Home Page](img-assets/home-page-wireframe.PNG)

[About Us](img-assets/about-us-wireframe.PNG)

[Leaderboard](img-assets/leaderboard-wireframe.PNG)


## Synopsis

 Our goal for this project is to provide our users with an entertaining game utilizing `<canvas>` and JavaScript, that invokes a sense of nostalgia hailing back to classic games such as Dig Dug © and MineSweeper ©. Users will also have the option to read about us personally as developers and compare their game scores to a leaderboard. Other developers will have the option to look at our markdown documents and view our sources, references, and libraries. 

## Code Example

![canvas-styling](img-assets/example-of-library-use.PNG)

``` 
var legra = new legra(ctx, 10, {color: 'yellow'});
legra.ctx = ctx;
const unit = 5; // height and width of game "tile";

function playMat(){
  legra.rectangle(0, 0, (unit * 10), (unit * 10), {filled: true, color: '#00cbff'});

}

```

## Motivation

The working Title of the project is “Mine-Hound” and will most strongly resemble classic rogue-like arcade games providing entertainment for users during these trying times of social distancing, and providing a simple example for new programmers to work with canvas, opensource libraries, and data persistence. 

## Installation

Developers can view the project on GitHub: [Mine-Hound-Project](https://github.com/johnpstratton/201FinalProject) and from there fork the repository to work with it directly.
front-end testing and gameplay can be done from the home page of the site found here: [HomePage](index.html)

## API/Libraries Reference

In order to get the game to render in canvas with a lego skin we used the Legra.js open-source library published with an MIT liscence. [legra-js-website](https://legrajs.com/)


## Tests

N/A

## Contributors

This project was developed and brought to you by Code Fellows class 201-d62 graduates as thier final project and may be found on GitHub;
[Ashley Biermann](https://github.com/ashleybiermann)
[John Stratton](https://github.com/johnpstratton)
[Mason Fryberger](https://github.com/MasonChance)

## License

Project published to GitHub pages with an MIT open-source liscence. Those wishing to work with the code can contact any of the initial contributers regarding pull requests or create a fork from the repository [here](https://github.com/johnpstratton/201FinalProject)

