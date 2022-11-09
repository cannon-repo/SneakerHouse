import React from "react";
import "./HomeScroll.css";
import { ShoesList } from "../../Assets/ShoesList";
import {BsChevronDoubleLeft, BsChevronDoubleRight} from "react-icons/bs";

const HomeScroll = () => {
  return (
    <div className="HomeScrollWrap">
      <div className="ScrollArrow"><BsChevronDoubleLeft/></div>
      <div className="HomeScroll">
        {ShoesList.map((data, index) => {
          return (
            <div className="ShoeTile" key={index}>
              <img src={`${data.img}`} alt="Shoe" />
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
      <div className="ScrollArrow"><BsChevronDoubleRight/></div>
    </div>
  );
};

export default HomeScroll;
