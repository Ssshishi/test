import React from 'react'

class Product extends React.Component {
  constructor (props) {
    super (props);
    this.state= {
      item: 'bag',
      number: 3
    }
  }
  render (){
    <div>
      <ul>
        <li>{this.state.item}</li>
        <li>{this.state.number}</li>
      </ul>
    </div>
  }
}

export default Product;
