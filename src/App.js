import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data.js";
import katieIMG from "./components/images/katie-zaferes.png";

function App() {
  const cardElements = data.map((info) => {
    return (
      <Card
        img={katieIMG}
        rating={info.rating}
        reviewCount={`(${info.reviewCount})`}
        country={info.location}
        title={info.title}
        price={`$${info.price}`}
      />
    );
  });

  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        {/*
        <Card
          img={katieIMG}
          rating={5.0}
          reviewCount={`(${6})`}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={`$${136}`}
        /> */}
        {cardElements}
      </div>
    </div>
  );
}

export default App;
