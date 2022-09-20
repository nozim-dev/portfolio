import React from "react";
import facebook from "./image/facebook.svg";
import twitter from "./image/twitter.svg";
import dribbble from "./image/dribbble.svg";
import linkedin from "./image/linkedin.svg";
import youtube from "./image/youtube.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_row">
        <div className="footer_row_col">
          <div className="logo">
            <h1>
              Nozim<span></span>
            </h1>
          </div>
          <p>
            Subscribe to newsletter to get some updates related with branding,
            designs and more.
          </p>
          <form action="">
            <input placeholder="write your email address" type="text" />
            <input type="submit" value="subscribe it" />
          </form>
        </div>
        <div className="footer_row_col">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_row_col">
          <p>
            Just feel free to contact if you wanna collaborate with me, or
            simply have a conversation.
          </p>
          <p>templatesjungle@gmail.com</p>
        </div>
      </div>
      <div className="footer_social">
        <div className="footer_social_col">
          <ul>
            <li>
              <a href="/">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={dribbble} alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_social_col">
          <p>Template designed by : Templates Jungle</p>
        </div>
      </div>
    </div>
  );
}
