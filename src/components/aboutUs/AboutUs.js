import React from "react";
import { AboutUsImg } from "./AboutUsImg";
import "./AboutUs.css";
import Gallery from "./gallery/Gallery";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      {/* Banner */}

      <div className="ab-banner">
        <img
          src="https://www.sgcookinglessons.com/wp-content/uploads/2017/05/Fine-Dining-Background.jpg"
          alt="this is img"
        />
        <p>About Us</p>
      </div>

      {/* Description */}

      <div className="desc">
        <div className="desc-in">
          <p className="line-one">
            Bracing the chaos of the roads, you will find yourself lost in a
            charming courtyard house in Hanoi.
          </p>
          <div className="line-two">
            <p>
              Blowing your mind with artfully-presented and extraordinary dishes
              you possibly have never seen, Sona is an award-winning restaurant
              inspired by the Indochine style and mostly serves European
              cuisine.
            </p>
            <p>
              The restaurant offers typical dishes from France, and Italy, and
              also some fusion dishes, especially the ones with local Vietnamese
              food.
            </p>
          </div>
        </div>
        <div className="about-main">
          <div className="about-main-text">
            <p className="chef">The Chefs</p>
            <p className="chef-text">
              We started Sona as a way to honor our family traditions while
              pursuing our own passions. In addition to being brother and
              sister, we are fourth generation chefs with a strong dedication to
              making the most significant traditions relevant again
            </p>
            <p className="chef-text">
              We have spent countless hours in this kitchen developing and
              perfecting the recipes you see on the menu today. We have also
              dedicated our time and energy into sourcing the right ingredients
              and making sure seasonal specialities are available to our
              patrons.
            </p>
          </div>
          <div className="card-list">
            <div className="card">
              <span className="caption">
                <h2>Chef Huong</h2>
                <p className="des-info">
                  A native Hanoian, Executive Chef Huong Nguyen grew up
                  surrounded by the cuisine and culture of the North Viet Nam.
                  After ventures across the country, including several years
                  staying in the Middle and the South of Viet Nam, Huong
                  returned to Hanoi in 2020. Upon his return, Huong immersed
                  himself in the flourishing culinary scene, gaining experience
                  at some of the city's top restaurants, including Sona.
                </p>
              </span>
              <img
                src="https://img.freepik.com/premium-photo/crop-faceless-shot-male-chef-uniform-putting-cut-pieces-celery-content-smoothie_222464-1147.jpg?w=2000"
                alt="this is img"
              />
            </div>
            <div className="card">
              <span className="caption">
                <h2>Chef Son</h2>
                <p className="des-info">
                  Though Chef Son is one of the world's most famous chefs, his
                  skills extend far beyond the kitchen. A savvy businessman and
                  restaurateur, Son is responsible for the operation and success
                  of 9 restaurants in Hanoi.
                </p>
              </span>
              <img
                src="https://img.freepik.com/premium-photo/crop-faceless-shot-male-chef-uniform-putting-cut-pieces-celery-content-smoothie_222464-1147.jpg?w=2000"
                alt="this is img"
              />
            </div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="about-title">Gallery</div>
          <div className="underline" />
          <Gallery AboutUsImg={AboutUsImg} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
