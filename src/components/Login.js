import React from 'react'

function Login() {
  return (
    <div className='container'>
        <body className="text-center" data-new-gr-c-s-check-loaded="14.1020.0" data-gr-ext-installed="">
    
    <main className="form-signin">
      <form>
        <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrx4gVTNu7dl0hv6eGrrr4d2C6JgaUuv3Bg&usqp=CAU" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© <small>registered and all rights reserved</small></p>
      </form>
    </main>
    
    
        
      
    
    </body>
    </div>
  )
}

export default Login;