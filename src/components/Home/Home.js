import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import data from '../data.json';
import carouselimg1 from '../images/carouselimg1.webp'
import carouselimg2 from '../images/carouselimg2.webp'
import carouselimg3 from '../images/carouselimg3.webp'
import Signup from "../Signup/Signup";

function Home(props) {
  
  const [cart, setCart] = useState(0);
const handleSubmit=() =>{
  setCart(cart+1)
}
  return (
    <div >
     

      {props.name ? 
      <div>
      <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">firstcry</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search for a Category" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
       
      </ul>
      <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
    
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Stores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link">Track Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">FirstCry</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"> <Link className={styles.login_btn} to="/login">Login</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"> <Link    className={styles.login_btn} to="/signup">Signup</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Shortlist</a>
        </li>
        <li class="nav-item">
          <b class="nav-link">  <b>{cart}</b> <span class="material-symbols-outlined">
shopping_cart
</span></b>
        </li>
      </ul>
      </form>
      {/*  */}
    </div>
  </div>
</nav>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carouselimg1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouselimg2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouselimg3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 <div  className={styles.cart_container}>
  { data && data.map(record=>{
    return(
<div  >


<div className={styles.card}>
  <img src={record.icon} alt="Denim Jeans" />
 
  <p className={styles.price}>{record.price}</p>
  <p>{record.caption}</p>
  <p><button    onClick={() => handleSubmit()} > Add to Cart</button></p>
</div>
</div>
    )
  })
  
  }
  
  </div>   </div> : <>pls Login/SignUp
  </>}
    </div>
  );
}

export default Home;
