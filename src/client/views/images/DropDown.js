import React, { Component } from 'react';

export class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.double = this.double.bind(this);
    this.triple = this.triple.bind(this);
    this.quad = this.quad.bind(this);
  }
  
  double(event) {
    var x = document.querySelectorAll('.image');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "45%";
      document.querySelector('.image').className = '.IIimage'; 
      document.querySelector('.IIIimage').className = '.IIimage'; 
      document.querySelector('.IVimage').className = '.IIimage'; 
    }  
  }
  triple(event) {
    var x = document.querySelectorAll('.image');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "30%";
      document.querySelector('.image').className = '.IIIimage'; 
      document.querySelector('.IIimage').className = '.IIIimage'; 
      document.querySelector('.IVimage').className = '.IIIimage'; 
    }  
  }
  quad(event) {
    var x = document.querySelectorAll('.image');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "20%";
      document.querySelector('.image').className = '.IVimage'; 
      document.querySelector('.IIimage').className = '.IVimage'; 
      document.querySelector('.IIIimage').className = '.IVimage'; 
    }  
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