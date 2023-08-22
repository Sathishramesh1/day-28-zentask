import React, { useContext, useEffect, useState } from 'react'


import {CartContext} from './Contextprovider'

function Cart() {
  const [priced,setpriced]=useState(0)
  const {setCardproduct,Cartproduct}=useContext(CartContext);
  const handleremove=(id)=>{
    const remove=Cartproduct.filter((e)=>e.id!==id);
    setCardproduct([...remove])

  }
  // const pricedata=[];
  // let total=0
  // let a=document.getElementsByTagName('select');
  //   let quantity=[...a];
  const subtotal=(id)=>{
    let ele=document.getElementsByClassName('product');
   let ex= [...ele].map((e)=> Number(e.querySelector('h6').textContent.slice(1))*Number(e.querySelector('select').value)) ;
   let ans=ex.reduce((a,c)=>a+c,0)
   setpriced(ans);
    // const price=Cartproduct.filter((e)=>e.id==id);
    // let q=price[0].price
    // let t=document.getElementById(id).value;
    // pricedata.push(q*t);
    // let b=pricedata.reduce((acc,curr)=>acc+curr,0);
    // console.log(b)
    // setpriced(b+priced)

  }
  useEffect(()=>{
    subtotal();
    
  },[priced])
  
 
  return (
    <div >
      
      <div className='cart' id='cart'>
        {Cartproduct.map((e)=>
        <div className='product' key={e.id} >
          <div className='p-image'>
            <img src={e.thumbnail}/>
          </div>
          <div className='p-details'>
            <div className='p-stock'>
            <h1>{e.title}</h1>
            
            <select onChange={()=>{subtotal(e.id)}} id={e.id}>
            {[...Array(e.stock).keys()].map((x)=>(
                    <option key={x+1} value={x+1}>{x+1}</option>
                  ))}
            </select>
            <div>
              <h6 value={e.price} className='p-price'><span>$</span>{e.price.toFixed(2)}</h6>
            </div>
            </div>
            <p>{e.description}</p>
            <div className='button'>
            <button  onClick={()=>{handleremove(e.id)}}>Remove</button>
            </div>
          </div>
          
        </div>
        
        )}
        
        <hr/>
        <div>
          <div className='subtotal'>
            
          <h6>SUBTOTAL:</h6>
          <h6>${priced.toFixed(2)}</h6>
          
          </div>
          <div className='subtotal'>
          <h6>SHIPPING:</h6>
          <h6>FREE</h6>
          
          </div>
          <hr/>
          <div className='subtotal'>
            <h6>TOTAL:</h6>
            <h6>${priced.toFixed(2)}
            </h6>
          </div>
          <p className='promo'>get Dailycashwith Nespola Card</p>
        </div>
      </div>
      
      

    </div>
  )
}

export default Cart