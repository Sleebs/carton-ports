import { useRef, useState } from "react";
import "../components/Brands.css";

const BRANDS_NUMBER = 50;

function BrandBox(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 0.5, y: 0.5 });

  const boxRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (event) => {
    if (!isHovered) return;
    const boxRect = boxRef.current.getBoundingClientRect();
    const x = (event.clientX - boxRect.left) / boxRect.width;
    const y = (event.clientY - boxRect.top) / boxRect.height;
    setGradientPosition({ x, y });
  };

  const gradientStyle = {
    background: `radial-gradient( 880px circle at ${
      gradientPosition.x * 100
    }% ${gradientPosition.y * 100}%, rgba(255, 255, 255,${
      isHovered ? 0.06 : 0
    }), transparent 40%`,
    transition: "opacity 500ms",
  };

  return (
    <div
      className={`${props.className} ${isHovered ? "hovered" : ""}`}
      url={props.url}
      ref={boxRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={gradientStyle}
    >
      {"asdf "}
    </div>
  );
}

function Items() {
  let urls = [];
  for (var i = 0; i < BRANDS_NUMBER; i++) urls.push(`/${i}.jpg`);
  console.log(urls);

  return (
    <>
      {urls.map((url, i) => (
        <BrandBox key={i} className={"brand-card"} url={url} />
      ))}
    </>
  );
}

export default function Brands() {
  return (
    <div className='brands-section'>
      <div className='brands-container'>
        <Items />
      </div>
    </div>
  );
}
