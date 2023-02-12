import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data.js";

function App() {
  const card = data.map((info) => {
    return (
      <Card
        key={info.id}
        info={info}
        //Commented code below is to give a perspective of how it looks without simplifying for understanding purposes
        /*
        link={info.link}
        openSpots={info.openSpots}
        location={info.location}
        img={info.coverImg}
        rating={info.stats.rating.toFixed(1)}
        reviewCount={`(${info.stats.reviewCount})`}
        country={info.location}
        title={info.title}
        price={`$${info.price}`}*/
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
      <div className="card-container">{card}</div>
      <footer>© 2023 Airbnb, Inc.</footer>
    </div>
  );
}

export default App;
