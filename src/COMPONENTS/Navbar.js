import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
   
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active"  to="/Home">{props.Home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/About">{props.About}</Link>
        </li>
        
       
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2 " onClick ={()=>{props.toggleMode('primary')}} style={{height:'20px',
      width:'20px',cursor:'pointer'}}></div>
         <div className="bg-danger rounded mx-2 " onClick ={()=>{props.toggleMode('danger')}} style={{height:'20px',
      width:'20px',cursor:'pointer'}}></div>
 <div className="bg-warning rounded mx-2 " onClick ={()=>{props.toggleMode('warning')}} style={{height:'20px',
      width:'20px',cursor:'pointer'}}></div>
        
      </div>
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
     
      <div className={`form-check form-switch  text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-3" onClick={()=>{props.toggleMode('null')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
   
      )
}

Navbar.propTypes = {tittle: PropTypes.string.isRequired,
                    Home: PropTypes.string

}

