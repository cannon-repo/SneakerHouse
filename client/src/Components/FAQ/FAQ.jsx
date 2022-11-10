import React, { useState } from "react";
import { useEffect } from "react";
import "./FAQ.css";

const FAQ = () => {

  const [faq, setFAQ] = useState([]);

  useEffect(() => {
    fetch('/api/faq/allFAQ').then((res) => res.json()).then((data) => {
      if(data.success) {
        setFAQ(data.FAQ);
      } else {
        alert('Failed to fetch FAQs');
      }
    })
  }, [faq]);

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
        {
          faq.map((data, index) => {
            return <div className="FAQTile" key={index}>
              <p className="FAQName">{data.Name}</p>
              <p className="FAQMsg">{data.Message}</p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default React.memo(FAQ);
