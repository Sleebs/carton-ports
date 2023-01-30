export default function ImgTrack(props) {
  let mouseAt = "0",
    percentageleft = "0",
    progres = "0";
  window.onmousedown = (e) => {
    mouseAt = e.clientX;
  };

  window.onmouseup = () => {
    mouseAt = "0";
    percentageleft = progres;
  };

  window.onmousemove = (e) => {
    if (mouseAt === "0") return;

    const mouseDelta = parseFloat(mouseAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentage = Math.max(
        Math.min(parseFloat(percentageleft) + percentage, 0),
        -100
      );

    Math.min(nextPercentage, 0);
    Math.max(nextPercentage, -100); //???
    const track = document.getElementById("image-track");
    // track.style.transform = `translate(${parseFloat(nextPercentage)}%, -50%)`;
    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
    for (const image of track.getElementsByClassName("image")) {
      // image.style.objectPosition = `${nextPercentage + 100} 50%`;
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
    progres = nextPercentage;
  };
  return (
    <>
      <div className='brands-container'>
        <div id='image-track'>
          <img
            className='image'
            src='https://images.unsplash.com/photo-1669325513580-dfcd4e0ad564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
            draggable='false'
          ></img>
          <img
            className='image'
            src='https://images.unsplash.com/photo-1655798922837-191add8dd35d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            draggable='false'
          ></img>
          <img
            className='image'
            src='https://images.unsplash.com/photo-1667423520863-8653106f18e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
            draggable='false'
          ></img>
          <img
            className='image'
            src='https://images.unsplash.com/photo-1670573973297-ee69c0bd8b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
            draggable='false'
          ></img>
          <img
            className='image'
            src='https://images.unsplash.com/photo-1670574166156-b654c488c5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
            draggable='false'
          ></img>
        </div>
      </div>
    </>
  );
}
