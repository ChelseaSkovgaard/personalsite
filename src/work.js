import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <h1> PROJECTS </h1>
        <div className="project">
          <a href="https://flixfavs.firebaseapp.com/">
            <div id="project-six"></div>
          </a>
          <div className="project-info">
            <h2>FLIX FAVES</h2>
            <p>Application enables the user to create an account  to save the movies they want to watch. Users can search movies as well as browse upcoming and current movies. When viewing their list, users are alerted when movies they have saved are current or upcoming.</p>
            <p>HTML SASS REACT FIREBASE</p>
            <p>MOVIE DATABASE API</p>
            <p>Individual Project </p>
            <form action="https://flixfavs.firebaseapp.com/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/flixfaves" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>
        <div className="project">
          <a href="https://hilarylewis92.github.io/weather-forecast/">
            <div id="project-five"></div>
          </a>
            <div className="project-info">
            <h2>WEATHER DUX</h2>
            <p>Application enables to search cities for current, hourly, and weekly weather. Three cities can be pinned and deleted for reference.</p>
            <p>HTML CSS REACT REDUX</p>
            <p>GEOLOCATION WEATHER UNDERGROUND API</p>
            <p>Group Project </p>
            <form action="https://hilarylewis92.github.io/weather-forecast/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/2DoBox-Pivot" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>
        <div className="project">
          <a href="https://budgetly-e57bf.firebaseapp.com/">
            <div id="project-two"></div>
          </a>
          <div className="project-info">
            <h2> BETSKETBALL</h2>
            <p>Application allows users to track bets on basketball games, track wins/losses, and view the bets of other users</p>
            <p> HTML SASS REACT FIREBASE</p>
            <p> Group Project </p>
            <form action="https://budgetly-e57bf.firebaseapp.com/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/fire-bae" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>

        <div className="project">
          <a href="https://shootthebreeze-d14af.firebaseapp.com/">
            <div id="project-three"></div>
          </a>
          <div className="project-info">
            <h2>SHOOT THE BREEZE</h2>
            <p>Application enables users to send, filter, and search messages</p>
            <p> HTML SASS REACT FIREBASE</p>
            <p> Pair Project </p>
            <form action="https://shootthebreeze-d14af.firebaseapp.com/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/shootthebreeze" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>

        <div className="project">
          <div id="project-four"></div>
          <div className="project-info">
            <h2>2DO BOX </h2>
            <p>Application enables users to save, filter, and rate to do tasks</p>
            <p>HTML SASS JAVASCRIPT</p>
            <p>Pair Project </p>
            <form action="https://github.com/ChelseaSkovgaard/2DoBox-Pivot" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>
        <div className="project">
          <div id="project-one"></div>
          <div className="project-info">
            <h2> CSS SECRETS (In Progress)</h2>
            <p>Webpage tracking my experimentations and learning of CSS tricks and techniques</p>
            <p> HTML CSS</p>
            <p> Individual Project </p>
            <form action="https://chelseaskovgaard.github.io/css-challenges/" method="get">
            <button className="project-btn-one"> View Project </button>
            </form>
            <form action="https://github.com/ChelseaSkovgaard/css-challenges" method="get">
            <button> Source Code </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Work;
