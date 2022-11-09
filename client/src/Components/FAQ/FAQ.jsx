import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="FAQWrap">
      <p
        style={{
          color: "#fff",
          fontSize: "44px",
          fontFamily: "Poppins",
          fontWeight: "bolder",
          margin: "50px",
        }}
      >
        FAQs
      </p>
      <div className="FAQ">
        <div className="FAQTile">
          <p className="FAQName">John Doe</p>
          <p className="FAQMsg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            quidem, impedit voluptas, numquam, deleniti quaerat totam architecto
            eius magnam blanditiis fugit reprehenderit aliquam velit expedita!
            Quam provident cum quod non nulla atque a libero vel itaque, iste
            quos, voluptate iusto voluptatum magni in et porro. Quod sunt
            reiciendis excepturi incidunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
