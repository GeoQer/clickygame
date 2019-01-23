import React, { Component } from 'react';
import Banner from './components/Banner';
import HeaderBar from './components/HeaderBar';
import BackDrop from './components/BackDrop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      isWon: false,
      highScore: 0,
      images: [
        {
          src: './assets/images/GTR.jpg',
          isClicked: false,
          name: 'GTR'
        },
        {
          src: './assets/images/ZR1.jpg',
          isClicked: false,
          name: 'ZR1'
        },
        {
          src: './assets/images/GT.jpg',
          isClicked: false,
          name: 'GT'
        },
        {
          src: './assets/images/Chiron.jpg',
          isClicked: false,
          name: 'Chiron'
        },
        {
          src: './assets/images/F50.jpg',
          isClicked: false,
          name: 'F50'
        },
        {
          src: './assets/images/S7.jpg',
          isClicked: false,
          name: 'S7'
        },
        {
          src: './assets/images/GT350.jpg',
          isClicked: false,
          name: 'GT350'
        },
        {
          src: './assets/images/One-77.jpg',
          isClicked: false,
          name: 'One-77'
        },
        {
          src: './assets/images/Cobra.jpg',
          isClicked: false,
          name: 'Cobra'
        },
        {
          src: './assets/images/Huracan.jpg',
          isClicked: false,
          name: 'Huracan'
        },
        {
          src: './assets/images/720s.jpg',
          isClicked: false,
          name: '720S'
        },
        {
          src: './assets/images/Huayra.jpg',
          isClicked: false,
          name: 'Huayra'
        }
      ]
    };
  }

  imageClickHandler = (event) => {
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
    newImages = this.shuffleImages(newImages);
    this.setState({ images: newImages });
  }

  reset = () => {
    let newImages = this.resetisClicked(this.state.images);
    this.setState({ images: newImages });

    if (this.state.currentScore > this.state.highScore) {
      let highScore = this.state.currentScore;
      this.setState({
        images: newImages,
        highScore: highScore,
        currentScore: 0
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

  shuffleImages = (images) => {
    let newImages = [];
    for (let i = images.length; i > 0; i--) {
      let random = Math.floor(Math.random() * i);
      newImages.push(images.splice(random, 1)[0]);
    }
    return newImages;
  }

  winClickHandler = () => {
    this.reset();
    this.setState({ isWon: false })
  }

  displayImages = () => {
    if (!this.state.isWon) {
      return (
        <BackDrop images={this.state.images} onClick={this.imageClickHandler} />
      )
    }
    else {
      return (
        <div className="row">
          <h1>Congratulations! You Won!</h1>
          <button className="btn btn-medium" onClick={this.winClickHandler}>Play Again?</button>
        </div>
      )
    }
  }

  render() {
    return (

      <div className="App">
        <HeaderBar />
        <Banner />
        <div className="container">
          <div className="row">
            <p>Current Score: {this.state.currentScore}</p>
            <p>High Score: {this.state.highScore}</p>
          </div>
          <div className="row" value={this.state.isWon}>
            {this.displayImages()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
