import React, { Component } from 'react';
import Banner from './components/Banner';
import HeaderBar from './components/HeaderBar';

let Score

let TopScore

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore = 0;
      isWon: false;
      highScore = 0;
      images: [
        {
          src: './public/assets/images/GTR.jpg',
          isClicked: false,
          name: 'GTR'
        },
        {
          src: './public/assets/images/ZR1.jpg',
          isClicked: false,
          name: 'ZR1'
        },
        {
          src: './public/assets/images/GT.jpg',
          isClicked: false,
          name: 'GT'
        },
        {
          src: './public/assets/images/Chiron.jpg',
          isClicked: false,
          name: 'Chiron'
        },
        {
          src: './public/assets/images/F50.jpg',
          isClicked: false,
          name: 'F50'
        },
        {
          src: './public/assets/images/S7.jpg',
          isClicked: false,
          name: 'S7'
        },
        {
          src: './public/assets/images/GT350.jpg',
          isClicked: false,
          name: 'GT350'
        },
        {
          src: './public/assets/images/One-77.jpg',
          isClicked: false,
          name: 'One-77'
        },
        {
          src: './public/assets/images/Cobra.jpg',
          isClicked: false,
          name: 'Cobra'
        },
        {
          src: './public/assets/images/Huracan.jpg',
          isClicked: false,
          name: 'Huracan'
        },
        {
          src: './public/assets/images/720S.jpg',
          isClicked: false,
          name: '720S'
        },
        {
          src: './public/assets/images/Huayra.jpg',
          isClicked: false,
          name: 'Huayra'
        }
      ]
    };
  }

  imageClick = (event) => {
    let newImages = this.state.images;
    newImages.forEach(image => {
      if (image.name === event.target.alt) {
        if (image.isClicked === true) {
          this.gameOver();
          this.reset();
        }
        else {
          image.isClicked = true;
          let addPoint = this.state.currentScore + 1;
          if (addPoint === 12) {
            this.setState({
              isWon: true,
              currentScore: 0,
              highScore: 12
            })
          }
          else {
            this.setState({ currentScore: addPoint });
          }
        }
      }
    })
    newImages = this.shuffleImages(newImage);
    this.setState({ images: newImages });
  }

  reset = () => {
    let newImages = this.resetisClicked(this.state.images);
    this.setState({ images: newImages });

    if (this.state.currentScore > this.state.TopScore) {
      let TopScore = this.state.currentScore;
      this.setState({
        images: newImages,
        TopScore: TopScore,
        currentScore: 0;
      })
    }
    else {
      this.setState({
        images: newImages,
        currentScore: 0
      })
    }
  }

  gameOver = () => {
    alert('Please Try again')
  }

  resetisClicked = (images) => {
    let newImages = images;
    newImages.forEach(image => image.isClicked = false);
    return newImages;
  }

  shuffleImages (images) => {
    let newImage = [];
    for(let i = images.length; i > 0; i--) {
      let random = Math.floor(Math.random()*i);
      newImages
    }
  }

  export default App;
