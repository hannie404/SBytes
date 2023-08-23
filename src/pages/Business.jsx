import React from "react";
import Navigation from "../components/Navigation";
import BusinessCarousel from "../components/BusinessCarousel";
import Footer from "../components/Footer";
import Card from "../components/Card";
import HorizontalCard from "../components/HorizontalCard";

function Business() {
  return (
    <div>
      <Navigation />
      <BusinessCarousel />
      <Card />
      <HorizontalCard />
      <Footer />
    </div>
  );
}

export default Business;
