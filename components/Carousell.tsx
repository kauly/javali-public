import * as React from "react";
import { Flex, Image } from "rebass";
import Carousel, { Dots } from "@brainhubeu/react-carousel";

const CarouselContainer = props => {
  const [value, setValue] = React.useState(0);
  const imgsArr = {
    slides: props.imgs.map((img, i) => (
      <Image
        key={`slide_${i}`}
        src={`http://localhost:1337/${img.replace("/public/imgs", "")}`}
        width="90%"
      />
    )),
    thumbnails: props.imgs.map((img, i) => (
      <Image
        key={`thumb_${i}`}
        src={`http://localhost:1337/${img.replace("/public/imgs", "")}`}
        width="80px"
      />
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
        /*         arrowLeft={<FontAwesomeIcon icon={faArrowLeft} />}
        arrowRight={<FontAwesomeIcon icon={faArrowRight} />} */
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

export default CarouselContainer;
