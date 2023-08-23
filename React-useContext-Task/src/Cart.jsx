import React, { useContext, useEffect, useState } from 'react'


import {CartContext} from './Contextprovider'

function Cart() {
  const [priced,setpriced]=useState(0)
  const {setCardproduct,Cartproduct}=useContext(CartContext);


  useEffect(()=>{
    subtotal();
    
  },[priced])

  const subtotal=()=>{
    
    let ele=document.getElementById('cart').getElementsByClassName('product');
   console.log(...ele)
    // console.log(ele[0]?.querySelectorAll('h3')[1].textContent.slice(1))
   let ex= [...ele].map((e)=> Number(e.querySelectorAll('h3')[1].textContent.slice(1))*Number(e.querySelector('select').value)) ;
   let ans=ex.reduce((a,c)=>a+c,0)
   
      setpriced(()=>ans);
    

  }

  const handleremove=(id)=>{
    const remove=Cartproduct.filter((e)=>e.id!==id);
    setCardproduct([...remove]);
    
    setpriced(0)
    

  }
  
  
 
  
 
  return (
    <div >
      
      <div className='cart' id='cart'>
        {Cartproduct.map((e)=>
        <div className='product ' key={e.id} >
          
          <div className='p-image'>
            <img src={e.thumbnail}/>
          </div>
          <div className='p-details'>
            <div className='p-flex d-flex'>
            <div className='p-stock mx-1 flex-fill' >
            <h3>{e.title}</h3>
            </div>
            

            <select onChange={()=>{subtotal()}} id={e.id} className='flex mx-5' >
            {[...Array(e.stock).keys()].map((x)=>(
                    <option key={x+1} value={x+1}>{x+1}</option>
                  ))}
            </select>
            
            
            <div className='flex-fill mx--5'>
              <h3 value={e.price} className='p-price' ><span>$</span>{e.price.toFixed(2)}</h3>
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
        <div className='d-flex flex-column'>
          <div className='subtotal'>
            
          <h6 className='subtotal-type'>SUBTOTAL:</h6>
          <h6 className='subtotal-cost'>${priced.toFixed(2)}</h6>
          
          </div>
          <div className='shipping'>
          <h6 className='shipping-type'>SHIPPING:</h6>
          <h6 className='shipping-cost'>FREE</h6>
          
          </div>
          <hr/>
          <div className='total'>
            <h6 className='total-type'>TOTAL:</h6>
            <h6 className='total-cost'>${priced.toFixed(2)}
            </h6>
          </div>
          <p className='promo'>get Dailycashwith Nespola Card</p>
        </div>
      </div>
      
      

    </div>
  )
}

export default Cart