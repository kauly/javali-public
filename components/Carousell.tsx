import * as React from "react";
import { Flex, Image } from "rebass";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

interface ICarousel {
  imgs?: [string];
  size?: string;
}

const defaultProps: ICarousel = {
  size: "90%"
};

const CarouselContainer = (props: ICarousel) => {
  const [value, setValue] = React.useState(0);
  const imgsArr = {
    slides: props.imgs.map((img, i) => (
      <Image
        key={`slide_${i}`}
        src={img.replace("/public", "")}
        width={props.size}
      />
    )),
    thumbnails: props.imgs.map((img, i) => (
      <Image key={`thumb_${i}`} src={img.replace("/public", "")} width="80px" />
    ))
  };

  return (
    <Flex
      width="90%"
      flexDirection="column"
      sx={{
        ":hover": {
          svg: {
            cursor: "pointer"
          }
        }
      }}
    >
      <Carousel
        slides={imgsArr.slides}
        value={value}
        onChange={setValue}
        arrowLeft={<ArrowBackIosIcon />}
        arrowRight={<ArrowForwardIosIcon />}
        infinite
        keepDirectionWhenDragging
        addArrowClickHandler
        centered
      />

      <Dots
        thumbnails={imgsArr.thumbnails}
        value={value}
        onChange={setValue}
        number={imgsArr.thumbnails.length}
      />
    </Flex>
  );
};

CarouselContainer.defaultProps = defaultProps;

export default CarouselContainer;
