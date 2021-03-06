import React from 'react';
import rockpaperscissors from './rockpaperscissors.png';
const Project = () => {
    return(
        <div className="col">
          <div className="card shadow-sm  project-card">
            <img className="bd-placeholder-img card-img-top" src={rockpaperscissors} alt="Rock Paper Scissors"/>
            <div className="card-body">
            <h5 className="card-title">Rock Paper Scissors Game</h5>
            <hr />
              <p className="card-text"> - It's built with simple HTML and CSS.<br /> - You make your choice, the computer makes it's choice and then they are compared and put on the scoreboard if it's not a draw.</p>
              <div className="d-flex justify-content-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://bogvoicescu.github.io/RockPaperScissors/" role="button">Play Game</a>
                  <a className="btn btn-sm btn-outline-secondary" href="https://github.com/bogvoicescu/RockPaperScissors" role="button">GitHub Repository</a>
                </div>
                <small className="text-muted">on Jun 11</small>
              </div>
            </div>
          </div>
        </div>
    
)
}

export default Project;
