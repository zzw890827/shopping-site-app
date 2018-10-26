import React, {Component} from 'react';

class NavLink extends Component {
  handleClick = () =>{
    this.props.onClick(this.props.index);
  };
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

export default NavLink;
