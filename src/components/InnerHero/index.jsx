import React from "react";
import {
  facebookIcon,
  twitterIcon,
  instaIcon,
  linkedinIcon,
  cartIcon,
  bookIocon,
  scrollIcon,
  linkedin,
  youTube,
} from "/public/images";
import { scrollToBottom } from "../../utils/bfcache";

const InnerHero = () => {
  return (
    <section className="hero_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="">
              <h3 className="well_come">Welcome to Carolynntucciarone</h3>
              <h1>Discover The Secrets Of Holiday Island With Ava!</h1>

              <div className="hero_btns">
                <a href="javascript:;" className="btn_with_icon perchase_btn">
                  <span>purchase now</span>
                  <span className="hero_icon">
                    <img src={cartIcon} alt="" />
                  </span>
                </a>
                <a href="javascript:;" className="btn_with_icon about_book_btn">
                  <span>About Book</span>
                  <span className="hero_icon">
                    <img src={bookIocon} alt="" />
                  </span>
                </a>
              </div>
              <div
                className="scroll_down_wrapper"
                onClick={() => scrollToBottom()}
              >
                <button className="scroll_down_btn">
                  <span className="scroll_icon">
                    <img src={scrollIcon} alt="" />
                  </span>
                  <span className="scroll_text">Scroll Down</span>
                </button>
              </div>
              <div className="hero_social_icons">
                <span className="hero_social_text">FOLLOW US:</span>
                <a
                  href="https://www.facebook.com/AuthorCarolynnTucciarone/"
                  className="hero_social_icon"
                >
                  <img src={facebookIcon} alt="" />
                </a>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FCarolynnAuthor"
                  className="hero_social_icon"
                >
                  <img src={twitterIcon} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/authorcarolynntucciarone/"
                  className="hero_social_icon"
                >
                  <img src={instaIcon} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/authorcarolynntucciarone/"
                  className="hero_social_icon"
                >
                  <img src={linkedin} alt="" />
                </a>{" "}
                <a
                  href="https://www.youtube.com/watch?app=desktop&v=7FiE6_UFISg"
                  className="hero_social_icon"
                >
                  <img src={youTube} height={20} width={20} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
