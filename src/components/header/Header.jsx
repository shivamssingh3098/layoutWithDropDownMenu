import React from 'react'
import "./header.css"

const Header = () => {
  return (
   <>

<nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#D9D9D9'}}>
  <div className="container-fluid" style={{backgroundColor:'#D9D9D9'}}>
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <a className="nav-link active " aria-current="page" href="#">My Templates</a>
        </li>
        <li className="nav-item ms-ms-5">
          <a className="nav-link active" href="#">User: Vikas</a>
        </li>
       
       
      </ul>
      <form className="d-flex me-5 d-flex align-items-center">
        
        <p className='me-5 text-decoration-underline'>Logout</p>
      </form>
    </div>
  </div>
</nav>

   </>
  )
}

export default Header
