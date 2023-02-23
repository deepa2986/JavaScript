import React, { Component } from 'react'
import Products from './Products';

 class ProductList extends Component {
    products = [
        {
            "title":"Brown Eggs",
            "type":"Eggs",
            "description":"Raw organic brown eggs in a basket",
            "url":"https://backyardpoultry.iamcountryside.com/eggs-meat/top-15-best-brown-egg-layers/",
            "price":"28.1",
            "rating":4
        },
        {
            "title":"Sweet fresh stawberry",
            "type":"Dairy",
            "description":"Sweet fresh stawberry on the wooden table",
            "url":"https://www.bing.com/images/search?view=detailV2&ccid=ijhzQC4V&id=C8AA43291A2ACEF2533009C9C7C033FCE483ED79&thid=OIP.ijhzQC4Vuon5frscpws6lAHaHK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8a3873402e15ba89f97ebb1ca70b3a94%3frik%3dee2D5PwzwMfJCQ%26riu%3dhttp%253a%252f%252fwww.figtreeolivebranch.com%252fwp-content%252fuploads%252f2013%252f12%252fstrawberry-03.jpg%26ehk%3dRQgjX4a%252fOIrp5eiOff53rx%252b2isi2PxVu058bNrPvPB4%253d%26risl%3d1%26pid%3dImgRaw%26r%3d0&exph=3358&expw=3469&q=strawberry&simid=607990640274258004&FORM=IRPRST&ck=44444C9A9DE950A7B81A5A1E06824B59&selectedIndex=1",
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