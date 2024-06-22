import React from "react";
import Navigator from "../components/Navigator/Navigator";
import MeCard from "../components/Card/MeCard";
import { CardDetails } from "../interfaces/CardDetails";
import { navDetails } from "../defaultNavBarDetails";
function Home() {
  const personalCard: CardDetails = {
    title: "Connor Gilmore",
    desc: "Senior CS Student At UMSL!",
    img: "/profile.png",
  };
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
          <MeCard
            title={personalCard.title}
            img={personalCard.img}
            desc={personalCard.desc}
          />
        </div>
      </div>
      ;
    </>
  );
}

export default Home;
