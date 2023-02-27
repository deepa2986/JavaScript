import React, { Component } from 'react'
import Products from './Products';

 class ProductList extends Component {
    products = [
        {
            "title":"Brown Eggs",
            "type":"Eggs",
            "description":"Raw organic brown eggs in a basket",
            "url":"https://tse2.mm.bing.net/th/id/OIP.xc8KFVlFSUe3nqj5q18wQAHaE8?pid=ImgDet&rs=1ttps:",
            "price":"28.1",
            "rating":4
        },
        {
            "title":"Sweet fresh stawberry",
            "type":"Dairy",
            "description":"Sweet fresh stawberry on the wooden table",
            "url":"https://th.bing.com/th/id/R.112bedb019d8c563b8d00d3ad4cb49a0?rik=%2fahRquIPkseC%2fw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f34900000%2fStrawberry-fruit-34914839-1920-1200.jpg&ehk=ARGJa8ucdVWm9KqfniVZfr6amUWNdvDxBJnvMqoFEeE%3d&risl=&pid=ImgRaw&r=0",
            "price":"29.45",
            "rating":5
        },
    
        ]
        constructor(){
            super();
            this.state={
               products: this.products
            }
        }
  render() {
    return (
        <div>
        
        {this.state.products.map((element)=>{
             return <div className='features' key={element.price}>
             <Products  title={element.title} price={element.price} description={element.description} imageUrl={element.url}/> 
         </div>
        })}
            
        </div>
     

    )
  }
}

export default ProductList