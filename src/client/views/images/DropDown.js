import React, { Component } from 'react';

export class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <div className="LoginCard" onClick={this.showMenu}>
          <h3> {this.props.title} </h3>
        </div>
        
        {
          this.state.showMenu
            ? (
              <div className="menu" ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                    <button> 2 Wide </button>
                    <button> 3 Wide </button>
                    <button> 4 Wide </button>
              </div>
            ) : ( null )
        }
      </div>
    );
  }
}