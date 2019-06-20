import React, { Component } from 'react';

export class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.double = this.double.bing(this);
    this.triple = this.triple.bing(this);
    this.quad = this.quad.bing(this);
  }
  
  double(event) {
    var x = document.getElementsByClassName(".image")
    x.style.width = "45%"
  }
  triple(event) {
    var x = document.getElementsByClassName(".image")
    x.style.width = "30%"
  }
  quad(event) {
    var x = document.getElementsByClassName(".image")
    x.style.width = "20%"
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
        <div className="DropDown" onClick={this.showMenu}>
          <h3> {this.props.title} </h3>
        </div>
        
        {
          this.state.showMenu
            ? (
              <div className="menu" ref={(element) => {
                  this.dropdownMenu = element;
                }}>
                    <button onClick={this.double}> 2 Wide </button>
                    <button onClick={this.triple}> 3 Wide </button>
                    <button onClick={this.quad}> 4 Wide </button>
              </div>
            ) : ( null )
        }
      </div>
    );
  }
}