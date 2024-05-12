import  { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Modal } from "react-bootstrap";
import "animate.css/animate.min.css";
import './Carousel.css'; // Import custom CSS for carousel arrows

const NewsCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleImageClick = (imageUrl) => {
    setShowModal(true);
    setClickedImage(imageUrl);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <>
    <div>
      <div className='fixedname'>
      <h1 style={{background:'Blue', color: 'white', fontSize: '60px', textAlign: 'center' }} className='tagh1 animate__animated animate__fadeInDown no-hover-shadow'>OUR SCHOOL NEWS</h1>
      </div>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} className='d-block news-carousel'>
        {items.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="news-img d-bolck"
              src={item.imgUrl}
              alt={`Slide ${item.id}`}
              onClick={() => handleImageClick(item.imgUrl)}
            />
            <Carousel.Caption className='news-content animate__animated animate__fadeInUp'>
              <h5 className="news-date">{item.date}</h5>
              <h3 className='news-caption'><a href="">{item.caption}</a></h3>
              <p className='news-description'>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      
      <Modal show={showModal} className='news-modal' onHide={() => setShowModal(false)} centered>
        <Modal.Body className='news-modal-body'>
          <img src={clickedImage} alt="Enlarged" className="enlarged-img" />
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
};

export default NewsCarousel;
