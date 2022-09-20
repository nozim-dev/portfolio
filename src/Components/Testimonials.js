import React from "react";
import left from "./image/chap.svg";
import right from "./image/o'ng.svg";
import profile from "./image/profile.svg";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials_title">
        <div className="testimonials_title_t">
          testimonials
          <div className="testimonials_subTitle">what clients says</div>
        </div>
      </div>
      <div className="testimonials_carousel">
        <img src={left} alt="" />
        <p>
          “Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio
          tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et
          dolor sit amet, elit consectetur adipiscing.”
        </p>
        <img src={right} alt="" />
      </div>
      <div className="profile">
        <div className="profile_img">
          <img src={profile} alt="" />
        </div>
        <h4>Lucas wolfer</h4>
        <p>ceo - raisins</p>
      </div>
    </div>
  );
}
