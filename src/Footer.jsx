import React from "react";

const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;
  console.log(isOpen);

  //   if (hours >= openHour && hours <= closeHour) {
  //     alert("We are currently open");
  //   } else {
  //     alert("Sorry we are closed");
  //   }
  if (!isOpen)
    return (
      <p>
        we are happy to welcome you between {openHour} to {closeHour}
      </p>
    );
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We open it till {openHour}:00 ,Come and Visit or Online Order</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
