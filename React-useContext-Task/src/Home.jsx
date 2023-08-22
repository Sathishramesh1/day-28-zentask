import React, { useContext } from 'react'
import {data}  from './data';
import {CartContext} from './Contextprovider'

function Home() {
   const {setCardproduct,Cartproduct}=useContext(CartContext);

const handleaddtocart=(productid)=>{
 let avoidduplicate=Cartproduct?.every((e)=>e.id!==productid)
 if(avoidduplicate==true){
  const filterdata=data.products.filter((e)=>e.id===productid);
  // console.log(filterdata)
      setCardproduct([...Cartproduct,...filterdata]);
      console.log(Cartproduct)
 }else{
  alert("already added in the cart!!")
 }

}

  return (
    <div className='home-product'>
        {data.products.map((e)=>
        <div className="card" key={e.id} >
            <div className='product-image'>
        <img src={e.thumbnail} className="card-img-top img-thumbnail" alt="..."/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <p className="card-text">{e.description.slice(0,50)}...</p>
         <p className="card-text">${e.price}</p> 
                
          <a href="#" className="btn btn-primary" onClick={()=>{handleaddtocart(e.id)}}>Add to Cart</a>
           </div>
      </div>
        
        )}
       

    </div>
  )
}

export default Home