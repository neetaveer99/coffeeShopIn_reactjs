import React from 'react'
import c1 from "../components/images/coffee1.jpeg";
import c2 from "../components/images/coffee2.jpeg"
import c3 from "../components/images/coffee3.jpeg"
import c4 from "../components/images/coffee4.jpeg"
// import c5 from "../components/images/coffee1.jpeg"
// import c6 from "../components/images/coffee1.jpeg"



const Menu = () => {
  return (
    <>
      {/* menu section starts  */}
    <section class="menu" id="menu">
        <h1 class="heading">our <span>menu</span></h1>

        <div class="box-container">

            <div class="box">
                <img src={c1} alt="" />
                <h3>tasty and healthy</h3>
                <div class="price">$15.99 <span>20.99</span></div>
                <a href="#" class="btn">add to cart</a>
            </div>

            <div class="box">
                <img src={c2} alt="" />
                <h3>tasty and healthy</h3>
                <div class="price">$15.99 <span>20.99</span></div>
                <a href="#" class="btn">add to cart</a>
            </div>

            <div class="box">
                <img src={c3} alt="" />
                <h3>tasty and healthy</h3>
                <div class="price">$15.99 <span>20.99</span></div>
                <a href="#" class="btn">add to cart</a>
            </div>

            <div class="box">
                <img src={c4} alt="" />
                <h3>tasty and healthy</h3>
                <div class="price">$15.99 <span>20.99</span></div>
                <a href="#" class="btn">add to cart</a>
            </div>

            <div class="box">
                <img src={c2} alt="" />
                <h3>tasty and healthy</h3>
                <div class="price">$15.99 <span>20.99</span></div>
                <a href="#" class="btn">add to cart</a>
            </div>

            <div class="box">
                <img src={c1} alt="" />
                <h3>tasty and healthy</h3>
                <div class="price">$15.99 <span>20.99</span></div>
                <a href="#" class="btn">add to cart</a>
            </div>

        </div>
    </section>
     {/* menu section ends  */}
    </>
  )
}

export default Menu