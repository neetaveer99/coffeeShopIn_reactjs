import React from 'react'
import b1 from "../components/images/wallpaperflare.com_wallpaper (10).jpg"
import b2 from "../components/images/c3.jpg"
import b3 from "../components/images/c1.jpg"


const Blogs = () => {
  return (
    <>
    <section class="blogs" id="blogs">

<h1 class="heading">our <span>blogs</span></h1>

<div class="box-container">

<div class="box">
    <div class="image">
        <img src={b1} alt="" />
    </div>
    <div class="content">
        <a href="#" class="title">tasty and refreshing coffee</a>
        <span>by admin / 21st may, 2023</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nostrum.</p>
        <a href="#" class="btn">read more</a>
    </div>
</div>

<div class="box">
    <div class="image">
        <img src={b2} alt="" />
    </div>
    <div class="content">
        <a href="#" class="title">tasty and refreshing coffee</a>
        <span>by admin / 21st may, 2023</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nostrum.</p>
        <a href="#" class="btn">read more</a>
    </div>
</div>

<div class="box">
    <div class="image">
        <img src={b3} alt="" />
    </div>
    <div class="content">
        <a href="#" class="title">tasty and refreshing coffee</a>
        <span>by admin / 21st may, 2023</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nostrum.</p>
        <a href="#" class="btn">read more</a>
    </div>
</div>

</div>


</section>
    </>
  )
}

export default Blogs