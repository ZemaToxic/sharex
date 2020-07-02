import React, { Component } from 'react';

export class DropDown extends Component {
  constructor() {
    super();
    this.state = { showMenu: false, };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.double = this.double.bind(this);
    this.triple = this.triple.bind(this);
    this.quad = this.quad.bind(this);
    this.dropdownMenu = null;
  }
  
  double() {
    const classes = document.querySelectorAll(".image, .IIimage, .IIIimage, .IVimage")
    console.log(classes)
    for (let i = 0; i < classes.length; i++) {
      classes[i].classList.replace('image', 'IIimage')
      classes[i].classList.replace('IIIimage', 'IIimage')
      classes[i].classList.replace('IVimage', 'IIimage')
    }
  }
  triple() {
    const classes = document.querySelectorAll(".image, .IIimage, .IIIimage, .IVimage")
    console.log(classes)
    for (let i = 0; i < classes.length; i++) {
      classes[i].classList.replace('image', 'IIIimage')
      classes[i].classList.replace('IIimage', 'IIIimage')
      classes[i].classList.replace('IVimage', 'IIIimage')
    }
  }
  quad() {
    const classes = document.querySelectorAll(".image, .IIimage, .IIIimage, .IVimage")
    console.log(classes)
    for (let i = 0; i < classes.length; i++) {
      classes[i].classList.replace('image', 'IVimage')
      classes[i].classList.replace('IIIimage', 'IVimage')
      classes[i].classList.replace('IIimage', 'IVimage')
    }
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => { document.addEventListener('click', this.closeMenu); });
  }
  
  closeMenu(event) { 
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => { document.removeEventListener('click', this.closeMenu); });  
    }
  }

  render() {
    return (
      <div>
        <div className="DropDown" onClick={this.showMenu}>
          <h3> {this.props.title} </h3>
        </div>
        
        {
          this.state.showMenu ? (
              <div className="menu" ref={(element) => { this.dropdownMenu = element; }}>
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