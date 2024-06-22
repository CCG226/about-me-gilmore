import React from "react";
import Navigator from "../components/Navigator/Navigator";
import MeCard from "../components/Card/MeCard";
import { CardDetails } from "../interfaces/CardDetails";
import { navDetails } from "../defaultNavBarDetails";
function Hobbies() {
  const hobbyCards: CardDetails[] = [
    {
      title: "Coding",
      desc: "I like to build applications for people to use. I like to use C# and C++ the most",
      img: "/code.png",
    },
    {
      title: "Cooking",
      desc: "I like to cook dinner for my family, specifically grilling/bbq",
      img: "/cook.jpg",
    },
    {
      title: "Gaming",
      desc: "I enjoy Gaming, specifically stategy games like Civ, BTD, and paradox games",
      img: "/game.jpg",
    },
  ];
  return (
    <>
      <div
        style={{ backgroundColor: "#242323", minHeight: "100vh" }}
        className="App"
      >
        <br />
        <br />
        <br />
        <div className="container">
          <Navigator navDetails={navDetails} />
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          {hobbyCards.map((card, index) => (
            <MeCard title={card.title} img={card.img} desc={card.desc} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default Hobbies;
