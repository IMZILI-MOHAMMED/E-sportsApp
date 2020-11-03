import React, { Component }  from 'react';

class Leagues extends Component {
  state = {
    leagues: []
  }

  componentDidMount() {
    
    fetch("https://api.pandascore.co/ow/leagues?&token=ib5ahXVcsVhUwxLKEggXfrDx9-78AZEYD37rfNGsxeEhQDpM8Ic")
    .then(res => res.json())
    .then((data) => {
      this.setState({ leagues: data })
    })
    .catch(console.log)
  }

  selectTeam = (event) => {
    console.log("clicked")
   
  }
  
 render(){
  return (
    <div class="list">
      <center><h1>Leagues List</h1></center>
      {this.state.leagues.map((league) => (
        <div class="card" key={league.id} onClick={this.selectTeam}>
          <div className="avatar">
                        <img src={league.image_url} alt={league.name}/>
                      </div>
          <div class="card-body">
            <h5 class="card-title">{league.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{league.slug}</h6>
            <p class="card-text">{league.modified_at}</p>
          </div>
        </div>
      ))}
    </div>
  );
 }
  
}

export default Leagues;



