import "./index.css";
import Carousel from "./Components/Carousel";
import slideData from "./Data/Data.json";

const ImageCarousel = () => {
  return (
    <div className="App">
      <Carousel data={slideData?.slides} />
    </div>
  );
};

export default ImageCarousel;
