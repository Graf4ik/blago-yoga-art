import "@/app/styles/globals.css";
import Slider from 'react-slick'

 function Photogallery() {
  return (
    <>
       <Slider
      slidesToScroll={1}
      slidesToShow={1}
      infinite={true}
      speed={500}
    //   nextArrow={<ArrowSlider arrow='right' />}
    //   prevArrow={<ArrowSlider arrow='left' />}
    >
      {/* <ClientCommentItem />
      <ClientCommentItem /> */}
    </Slider>
    </>
  );
}
export default Photogallery