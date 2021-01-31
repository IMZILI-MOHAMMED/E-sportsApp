import React from 'react';

const LeaguesDetails = ({match}) =>{
  const state = {
        league: []
      }
const par = match.params.id;

const fetchDetails = () => {
    fetch(`https://api.pandascore.co/ow/leagues?&token=ib5ahXVcsVhUwxLKEggXfrDx9-78AZEYD37rfNGsxeEhQDpM8Ic/${par}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ league: data })
    })
    .catch(console.log)

}
   
   return (
    <div>
      <h1>Details {par} </h1>
      
    </div>
  );
 
  
}

export default LeaguesDetails;
