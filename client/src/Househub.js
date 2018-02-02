import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HouseBoard from './HouseBoard.js';
import HouseForm from './HouseForm.js';

class Househub extends Component {

  addHouse = () => {
    console.log("addHouse called in Househub.js");
    this.props.refreshUser();
  }
  render(){

  if(this.props.user && this.props.house){
      return (<HouseBoard user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshUser} dashboard={"househub"}/>)
    }
    else if(this.props.user && !this.props.house){
      return (
        <div>
          {console.log("I am in the else statement!")}
          <HouseForm user={this.props.user} obtainHouse={this.props.refreshUser} />
        </div>
      );
    }
    else{
      return(
        <div><h1>You Must be Logged In to See this Page!</h1></div>
      )
    }
  }
}

export default Househub;