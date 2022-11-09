import React from "react";
import "./ShoesView.css";
import { BsCartPlusFill, BsCartCheckFill } from "react-icons/bs";

const colors = ["crimson", "white", "black", "brown", "dodgerblue"];
const sizes = [6, 7, 8, 9];

const ShoesView = () => {
  return (
    <div className="ShoesView">
      <div className="HeroIntro">
        <div className="Wrap">
          <div className="HeroName">
            <p className="HeroBrand">PUMA</p>
            <p className="HeroModel">Super Air X123456789</p>
            <p className="AddToCart">
              Add To Cart{" "}
              <span className="CartIcon">
                <BsCartPlusFill />
              </span>
            </p>
          </div>
        </div>
        <div className="HeroImgWrap">
          <div className="HeroImg"></div>
        </div>
      </div>
      <div className="HeroInfo">
        <div className="HeroDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          ullam mollitia explicabo ducimus blanditiis ex, ipsam, sapiente
          provident cumque id iste repudiandae aliquid?
        </div>
        <div className="ColorsWrap">
          <p style={{fontSize: '20px', color: '#fff', fontFamily: 'Quicksand'}}>Colors</p>
          <div className="Colors">
            {colors.map((data, index) => {
              return (
                <p
                  className="ColorTile"
                  style={{ backgroundColor: data }}
                  key={index}
                ></p>
              );
            })}
          </div>
        </div>
        <div className="SizesWrap">
            <p style={{fontSize: '20px', color: '#fff', fontFamily: 'Quicksand'}}>Sizes(UK)</p>
            <div className="Sizes">
            {sizes.map((data, index) => {
                return (
                <p className="SizeTile" key={index}>
                    {data}
                </p>
                );
            })}
            </div>
        </div>
        <div className="Price">
            <p style={{fontSize: '20px', color: '#fff', fontFamily: 'Quicksand'}}>Price</p>
          <p style={{fontSize: '44px', color: '#fff', fontFamily: 'Quicksand', fontWeight: 'bolder'}}>₹ <span style={{ color: "orange" }}>3299</span></p>
        </div>
      </div>
    </div>
  );
};

export default ShoesView;
