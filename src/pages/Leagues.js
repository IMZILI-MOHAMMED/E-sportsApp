import React, { Component }  from 'react';

class Leagues extends Component {
  state = {
    leagues: []
  }

  componentDidMount() {
    fetch('https://api.pandascore.co/ow/leagues?&token=ib5ahXVcsVhUwxLKEggXfrDx9-78AZEYD37rfNGsxeEhQDpM8Ic')
    .then(res => res.json())
    .then((data) => {
      this.setState({ leagues: data })
    })
    .catch(console.log)
  }
 render(){
  return (
    <div>
      <center><h1>Leagues List</h1></center>
      {contacts.map((leagues) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
            <p class="card-text">{contact.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  );
 }
  
}

export default Leagues;



