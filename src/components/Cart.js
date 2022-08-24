import React from 'react';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { deleteCart} from '../redux/action/index';
import Checkout from './Checkout';






function Cart() {

    const state = useSelector((state)=> state.addcartItem)
    const dispatch = useDispatch();

    

    const handleClose = (cartItem)=>{
        dispatch(deleteCart(cartItem))
    }
    const cartItem= (cartItem)=>{
        return(
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
                             {/* onClick={()=> handleClose(cartItem)} */}
                             <button className='btn btn-outline-primary'>
                                 <i className='fa fa-plus'></i>
                            </button>
                        <div>{<checkout/>}</div>
                        </div>
                    </div>
                </div>
            </div>
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
                    <NavLink to="/checkout" className="btn btn-outline-success mb-5">Checkout</NavLink>
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