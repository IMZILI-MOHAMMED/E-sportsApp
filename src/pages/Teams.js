import React, { Component } from 'react';

class Teams extends Component {
  state = {
    teams: []
  }

  componentDidMount() {
    
    fetch("https://api.pandascore.co/ow/teams?&token=ib5ahXVcsVhUwxLKEggXfrDx9-78AZEYD37rfNGsxeEhQDpM8Ic")
    .then(res => res.json())
    .then((data) => {
      this.setState({ teams: data })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div class="list">
        <center><h1>Teams List</h1></center>
        {this.state.teams.map((team) => (
          <div class="card">
            <div className="avatar">
                          <img src={team.image_url} alt={team.name}/>
                        </div>
            <div class="card-body">
              <h5 class="card-title">{team.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{team.slug}</h6>
              <p class="card-text">{team.acronym}</p>
            </div>
          </div>
        ))}
      </div>
    );
   }
    
  }
  
  export default Teams;