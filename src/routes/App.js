import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import videoBg from "../media/hero-video.mp4";

function CartonLogo(props) {
  return (
    <div style={{ textAlign: "center", lineHeight: "2.5rem" }}>
      <p style={{ margin: 0, fontSize: "4.8rem" }}>Carton</p>
      <p style={{ margin: 0, fontSize: "2.8rem", fontWeight: 100 }}>sports</p>
    </div>
  );
}
function Navbar(props) {
  return (
    <nav>
      <CartonLogo />
      <a href='mailto: info@tuttoperlosport.it'>info@tuttoperlosport.it</a>
    </nav>
  );
}

function BackgroundVideo(props) {
  return <video src={videoBg} autoPlay loop muted />;
}

function VideoCover(props) {
  return <div className='video-cover'></div>;
}

function LocationMarker(props) {
  return (
    <div className='location'>
      <p style={{ margin: 0 }}>Via Cesare Correnti 2 </p>
    </div>
  );
}
function ScrollDown(props) {
  return (
    <div className='expand-more'>
      <span className='arrow-down'></span>
    </div>
  );
}

function PresentationCard(props) {
  return (
    <div className='card'>
      <div className='claim'>
        <h1>
          Vivi una Avventura <br />
          Non un'Odissea
        </h1>
        <p>vieni a trovarci in sede</p>
        <Link to={`brands`} id='partners'>
          Con i nostri partner
        </Link>
      </div>
    </div>
  );
}

function Home(props) {
  return (
    <>
      <div id='section-1'>
        <BackgroundVideo />
        <VideoCover />
        <Navbar />
        <BackgroundVideo />
        <LocationMarker />
        <ScrollDown />
      </div>
      <div id='section-2'>
        <PresentationCard />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
