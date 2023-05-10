import React, { useState } from "react"
import "./App.css"
import cabbage from "./assets/image1.jpeg"
import mango from "./assets/image2.jpeg"
import fig from "./assets/image3.jpeg"
import gaze from "./assets/image4.jpeg"
import peach from "./assets/image5.jpeg"
import avocado from "./assets/image6.jpeg"

const images = [cabbage, mango, fig, gaze, peach, avocado]

const Loading = ({ calculateWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your fave images....</label>
      <progress id="images-loaded" max="100" value={calculateWidth}></progress>
    </div>
  </aside>
)
const App = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [numLoaded, setNumLoaded] = useState(0)
  const nextImage = () => {
    const length = images.length - 1
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0
    })
  }
  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1)
  }
  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Fielding
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculateWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            src={imageURL}
            key={imageURL}
            alt=""
            onClick={nextImage}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hidden"}
          />
        ))}
      </figure>
    </section>
  )
}

export default App
