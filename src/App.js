import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data.js";

function App() {
  const card = data.map((info) => {
    return (
      <Card
        img={info.coverImg}
        rating={info.stats.rating.toFixed(1)}
        reviewCount={`(${info.stats.reviewCount})`}
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
      </div>
      <div className="card-elements">{card}</div>
    </div>
  );
}

export default App;
