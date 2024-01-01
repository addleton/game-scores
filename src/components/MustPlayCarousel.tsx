import { Carousel } from "antd";
import Game from "../types/Types";
import CarouselCard from "./CarouselCard";

const MustPlayCarousel: React.FC<{ game: Game }> = ({gameSets}) => {
  return (
    <>
      <Carousel autoplay>
        {gameSets.map((gameSet) => {
          return <CarouselCard gameSet={gameSet} />;
        })}
        {/* <div>
    <h3 style={contentStyle}>1</h3>
  </div>
  <div>
    <h3 style={contentStyle}>2</h3>
  </div>
  <div>
    <h3 style={contentStyle}>3</h3>
  </div>
  <div>
    <h3 style={contentStyle}>4</h3>
  </div> */}
      </Carousel>
      );
    </>
  );
};

export default MustPlayCarousel;
