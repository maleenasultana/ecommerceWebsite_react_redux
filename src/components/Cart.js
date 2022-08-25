import React from 'react';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { deleteCart} from '../redux/action/index';
import Product from './Product';









function Cart() {

    const state = useSelector((state)=> state.addcartItem)
    const dispatch = useDispatch();

    

    const handleClose = (cartItem)=>{
        dispatch(deleteCart(cartItem))
    }
    const cartItem= (cartItem)=>{
        return(
            <>
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>

                <div className='container py-4'>
                    <button  onClick={()=>handleClose(cartItem)} className='btn-close float-end' aria-label="close"></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <h2>Cart Item</h2>
                            <img  src={cartItem.image} alt={cartItem.title} height="200" width="100px"/>
                          
                             <p className='lead fw-bold'>${cartItem.price}

                            {cartItem.qty} x {cartItem.price} = ${cartItem.qty * cartItem.price}</p>

                            <button className='btn btn-outline-danger me-4' >
                                 <i className='fa fa-minus'></i>
                             </button>
                             onClick={()=> handleClose(cartItem)}
                             <button className='btn btn-outline-primary'>
                                 <i className='fa fa-plus'></i>
                            </button>
                            <div className='col-md-3 mb-4'>
                <div className="card h-100 text-center p-4" key={Product.id}>
  <img src={Product.image} className="card-img-top" alt={Product.title} height="200px"/>
  <div className="card-body">
    <h5 className="card-title mb-0">{Product.title.substring(0,12)}...</h5>
    <p className="card-text lead fw-bold">${Product.price}</p>
    <NavLink to={`/products/${Product.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
  </div>
</div>
                </div>
                        <div>{<checkout/>}</div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }

    const emptyCart =()=>{
        return(
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3> Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }


    const button = ()=>{
        return(
            <div className='conatainer'>
                <div className='row'>
                    <NavLink  className="btn btn-outline-success mb-5" to="/checkout">Checkout</NavLink>
                </div>
            </div>
        )
    }
  return (
    <>
       {state.length === 0 && emptyCart()}
       {state.length !== 0 && state.map(cartItem)}
       {state.length !== 0 && button()}
    </>
  )
}

export default Cart;