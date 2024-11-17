import React from "react";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex  join-vertical">
        <button className="btn justify-start join-item"><FaFacebook></FaFacebook>Facebook</button>
        <button className="btn justify-start join-item"><FaTwitch></FaTwitch>Twitter</button>
        <button className="btn justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
