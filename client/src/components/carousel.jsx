import one from "../assets/images/one.jpeg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.jpeg";
import five from "../assets/images/five.jpg";
import six from "../assets/images/six.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousels = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <main>
      <div className="carousel">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          autoPlay={true}
        >
          <img id="img" className="w-screen h-[40rem]" src={one} alt="ceramic coating" />
          <img id="img" className="w-screen h-[40rem]" src={two} alt="oil and filters checking" />
          <img id="img" className="w-screen h-[40rem]" src={three} alt="engine service" />
          <img id="img" className="w-screen h-[40rem]" src={four} alt="exterior wash" />
          <img id="img" className="w-screen h-[40rem]" src={five} alt="interior wash" />
          <img id="img" className="w-screen h-[40rem]" src={six} alt="wheel alignment" />
        </Carousel>
      </div>
    </main>
  );
};

export default Carousels;
