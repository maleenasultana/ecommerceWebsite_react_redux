import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";






function Navbar() {

  const state =useSelector((state)=> state.handleCart)
  return (
<div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/ecomm">🙋‍♀️ Maleena's</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/products">Categories</NavLink>
        </li>
        
        
        <li className="nav-item">
          <NavLink className="nav-link-active"   to="/Contact">Ask Us</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control flex-1" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary me-1" type="submit" style={{}}> Search</button>
      </form>
      <div className='buttons'>
      <NavLink to={`/cart`} className='btn btn-outline-warning ms-2'>
            <i className='fNavLinkfa-shopping-cart me-2 mx-2 '></i> Cart({state.length})</NavLink>
        <NavLink to="/login" className='btn btn-outline-danger ms-2'>
            <i className='fNavLinkfa-sign-in me-1 mx-2 ms-2 '></i>Login</NavLink>
            
            
       

      </div>
    </div>
  </div>
</nav>
        

</div>
   
    
  );
}

export default Navbar;