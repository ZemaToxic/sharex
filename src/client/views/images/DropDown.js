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
    x.forEach(function() {
      x.className = '.IIimage'; 
    })
    var y = document.querySelectorAll('.IIIimage');
    y.forEach(function() {
      y.className = '.IIimage'; 
    })
    var z = document.querySelectorAll('.IVimage');
    z.forEach(function() {
      z.className = '.IIimage'; 
    })
  }
  triple(event) {
    var x = document.querySelectorAll('.image');
    x.forEach(function() {
      x.className = '.IIIimage'; 
    })
    var y = document.querySelectorAll('.IIimage');
    y.forEach(function() {
      y.className = '.IIIimage'; 
    })
    var z = document.querySelectorAll('.IVimage');
    z.forEach(function() {
      z.className = '.IIIimage'; 
    })
  }
  quad(event) {
    var x = document.querySelectorAll('.image');
    x.forEach(function() {
      x.className = '.IVimage'; 
    })
    var y = document.querySelectorAll('.IIimage');
    y.forEach(function() {
      y.className = '.IVimage'; 
    })
    var z = document.querySelectorAll('.IIIimage');
    z.forEach(function() {
      z.className = '.IVimage'; 
    })
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