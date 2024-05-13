import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Autoplay, EffectCards } from "swiper/modules"; // Update import statement
import "swiper/css";
import "swiper/css/effect-cards";
import Card from "./Card";
import "./Slide.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {container } from "bootstrap"
import Container from "react-bootstrap/Container";
// Initialize Swiper modules
SwiperCore.use([EffectCards, Autoplay]);
// Initialize Swiper modules
SwiperCore.use([EffectCards, Autoplay]);

const Sliderfeedback = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid>
      <h1 className="text-center text-primary mt-3 mb-3">SATISFIED PARENT</h1><br />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        autoplay={{ delay: 4000 }}
        speed={1200}
        loop={true}
        ref={swiperRef}
      >
        <SwiperSlide className="one">
          <Card
            img={'./contractor.jpg'}
            des={
              "As parents, we're thrilled with the holistic education our child receives here. The extracurricular activities, especially the yoga sessions, have significantly improved his concentration and overall well-being. The sports teams are inclusive and very well coached."
            }
            name={"Mr. Rajdeep Mehta"}
            post={"Contractor"}
          />
        </SwiperSlide>

        <SwiperSlide className="two">
          <Card
            img={'./buissnessman.jpg'}
            des={
              "This school goes above and beyond in nurturing every student’s potential. The balance between academics, sports, and other extracurricular activities like yoga and music is exceptional. We really appreciate the focus on developing well-rounded individuals."
            }
            name={"Mr. Amit Patel"}
            post={"Businessman"}
          />
        </SwiperSlide>

        <SwiperSlide className="three">
          <Card
            img={'./IT.jpeg'}
            des={
              "I'm very impressed by the school’s commitment to extracurricular activities. The facilities for sports are outstanding, and the yoga classes are a big hit with my son. It’s comforting to know he’s growing in a supportive, well-rounded environment."
            }
            name={"Ms. Anita Rao"}
            post={"IT Consultant"}
          />
        </SwiperSlide>

        <SwiperSlide className="four">
          <Card
            img={'./doctor.jpg'}
            des={
              "The diverse range of extracurricular activities offered by this school is commendable. Our children participate in both basketball and robotics, gaining valuable team skills and technical knowledge. The school’s environment is both challenging and supportive."
            }
            name={"Mr. Sunil Sharma"}
            post={"Doctor"}
          />
        </SwiperSlide>

        <SwiperSlide className="five">
          <Card
            img={'./professor.jpg'}
            des={
              "Fantastic school with a strong emphasis on both mental and physical development! The inclusion of yoga and meditation along with traditional sports has been a game-changer for our daughter. She's more focused and happier than ever"
            }
            name={"Mr. Manish Singh"}
            post={" University Professor"}
          />
        </SwiperSlide>

        <SwiperSlide className="six">
          <Card
            img={'./bank.jpg'}
            des={
              "We appreciate how this school values not just academic excellence but also physical health and wellness. The sports programs are competitive yet welcoming, and the yoga sessions help students manage stress."
            }
            name={"Ms. Deepika Iyer"}
            post={"Bank Manager"}
          />
        </SwiperSlide>

        <SwiperSlide className="seven">
          <Card
            img={'./fashion.jpg'}
            des={
              "Truly a place for holistic child development. The coaches and instructors for sports and yoga are incredibly passionate and skilled. Our son has improved not just physically but also in his social skills and self-discipline."
            }
            name={"Ms. Neha Malik"}
            post={"Fashion Designer"}
          />
        </SwiperSlide>

        <SwiperSlide className="eight">
          <Card
            img={'./lawyer.jpg'}
            des={
              "Our experience with the school has been absolutely positive. The commitment to providing a wide range of activities like soccer, tennis, and yoga helps every child find their niche and excel. The staff’s dedication is clearly visible."
            }
            name={"Mr. Pradeep Chatterjee"}
            post={"Lawyer"}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
export default Sliderfeedback;
