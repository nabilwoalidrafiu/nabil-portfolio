import React from "react";
import "./Banner.css";
import MenuBar from "../MenuBar/MenuBar.js"

const Banner = () => {
  return (
    <div class="div div-header">
        {/* <MenuBar></MenuBar> */}
    <section class="sec sec-header">
      <h1>Hi, I'm Nabil Woalid  ;) <span id="cursor">|</span></h1>
      <hr class="col-xs-12 d-none d-sm-block" style={{backgroundColor: "white", width: "90%", height: "2px", borderRadius: "3px"}}/>
      <div class="presentation">
        <section class="half-header avatar d-none d-md-block">
          {/* <img className="banner-image" src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/23130706_1657574914264273_5579165823140451830_n.jpg?_nc_cat=109&_nc_ht=scontent-mxp1-1.xx&oh=20be995f6a2c1cc591bbea691ff86dda&oe=5C7FE706"/> */}
        </section>
        <section class="half-header-r d-none d-sm-none d-md-block">
          <p class="banner-p line1">&#91;&nbsp;&ldquo;I'm a Front-end Developer.&rdquo;,<span class="cursor1">_</span></p>
          <p class="banner-p line2">&nbsp;&nbsp;&ldquo;Are you looking for one?&rdquo;,<span class="cursor2">_</span></p>
          <p class="banner-p line3">&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span class="cursor3">_</span></p>
          <p class="banner-p line4"><span class="cursor4">_</span></p>
        </section>
      </div>
    </section>
  </div>
  );
};

export default Banner;