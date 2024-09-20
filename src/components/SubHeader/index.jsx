/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 17/05/2024 - 23:55:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/05/2024
    * - Author          : Saif
    * - Modification    : 
**/
import React, { useState } from "react";
import {
  facebookIcon,
  instaIcon,
  linkedinIcon,
  scrollIcon,
  twitterIcon,
  linkedin,
  youTube,
} from "/public/images";
import { scrollToBottom } from "../../utils/bfcache";

export const SubHeader = (props) => {
  const [firstBook, secondBook] = useState(false);

  function showFirstBook() {
    secondBook(false);
  }

  function showSecondBook() {
    secondBook(true);
  }


  return (
    // <div
    //   className="PageHeader"
    //   style={props.name && { backgroundImage: `url(${props.img})` }}
    // >
    //   <h1>{props.name}</h1>
    //   <div className="pageheader_dog">
    //     {/* <img src={props.img} alt="Header Image" /> */}
    //   </div>
    // </div>

    <section
      className="inner_hero_sec"
      style={props.img && { backgroundImage: `url(${props.img})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner_hero_content">

              {props?.subHeading &&  (
              <h3
                className="inner_subHead"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                {props?.subHeading}
              </h3>
              )}
              <h2
                className="inner_heading"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
              >
                {props?.name}
              </h2>

              {props?.action && (
                <div
                  className="inner_hero_btns"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-easing="ease-in"
                  
                >
                  <a href="javascript:;" className={`inner_hero_btn ${props.firstBook === false ? 'active' : ''}`} onClick={props.storystatus}>
                    Story Books
                  </a>
                  
                  <a href="javascript:;" className={`inner_hero_btn ${props.firstBook === true ? 'active' : ''}`} onClick={props.illustrationstatus}>
                    Illustration Books 
                  </a>
                  
                </div>
              )}

              <div
                className="inner_hero_social_icons"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-easing="ease-in"
              >
                <span className="inner_hero_social_text">FOLLOW US:</span>
                <a
                  href="https://www.facebook.com/AuthorCarolynnTucciarone/"
                  className="inner_hero_social_icon"
                >
                  <img src={facebookIcon} alt='' />
                </a>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FCarolynnAuthor"
                  className="inner_hero_social_icon"
                >
                  <img src={twitterIcon} alt='' />
                </a>
                <a
                  href="https://www.instagram.com/authorcarolynntucciarone/"
                  className="inner_hero_social_icon"
                >
                  <img src={instaIcon}  alt='' />
                </a>
                <a
                  href="https://www.instagram.com/authorcarolynntucciarone/"
                  className="inner_hero_social_icon"
                >
                  <img src={linkedin} alt="" />
                </a>{" "}
                <a
                  href="https://www.youtube.com/watch?app=desktop&v=7FiE6_UFISg"
                  className="inner_hero_social_icon"
                >
                  <img src={youTube} height={20} width={20} alt="" />
                </a>
              </div>

              <div className="inner_scroll_down_wrapper" onClick={() => scrollToBottom()} >
                <button className="inner_scroll_down_btn">
                  <span className="inner_scroll_icon">
                    <img src={scrollIcon} alt="" />
                  </span>
                  <span className="inner_scroll_text">Scroll Down</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
