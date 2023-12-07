import React from 'react'
import p1 from "../components/images/p1.jpeg";
import p2 from "../components/images/p2.jpeg";
import p3 from "../components/images/p3.jpeg";
import p4 from "../components/images/p4.jpeg";
import p5 from "../components/images/p5.jpeg";
import p6 from "../components/images/p6.jpg";


const Products = () => {
  return (
     <>
      <section className="products" id="products">

<h1 className="heading">our <span>products</span></h1>

<div className="box-container">

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>


        </div>
        <div className="image">
            <img src={p1} alt="" />
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>

            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>


    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>


        </div>
        <div className="image">
            <img src={p2} alt="" />
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>

            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>


        </div>
        <div className="image">
            <img src={p3} alt="" />
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>

            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>


        </div>
        <div className="image">
            <img src={p4} alt="" />
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>

            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>


        </div>
        <div className="image">
            <img src={p5} alt="" />
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>

            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>


        </div>
        <div className="image">
            <img src={p6} alt="" />
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>

            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>


</div>
</section>


     </>
  )
}

export default Products