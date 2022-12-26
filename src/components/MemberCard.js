import "./MemberCardStyles.css";
import { Link } from "react-router-dom";
import React from "react";


function MemberCard() {
  return (
    <>
    <h1 className="titleService">WEB DESIGN SERVICES</h1>
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h4> - Silver Package - </h4>
          <span className="bar"></span>
          <p className="btc"> $50 </p>
          <p> - TBD -</p>
          <p> - 3 Pages -</p>
          <p> - Featured -</p>
          <p> - Responsive Design -</p>
         <Link to="/contact" className="btn">
            Purchase Now
         </Link>
        </div>

        <div className="card">
          <h4> - Gold Package - </h4>
          <span className="bar"></span>
          <p className="btc"> $100 </p>
          <p> - TBD -</p>
          <p> - 5 Pages -</p>
          <p> - Featured -</p>
          <p> - Responsive Design -</p>
         <Link to="/contact" className="btn">
            Purchase Now
         </Link>
        </div>

        <div className="card">
          <h4> - Platiumn Package - </h4>
          <span className="bar"></span>
          <p className="btc"> $200 </p>
          <p> - TBD -</p>
          <p> - 8-10 Pages -</p>
          <p> - Featured -</p>
          <p> - Responsive Design -</p>
         <Link to="/contact" className="btn">
            Purchase Now
         </Link>
        </div>
       
        
      </div>
    </div>
    </>
  );
}

export default MemberCard;