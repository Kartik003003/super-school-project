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
            img={'https://img.freepik.com/free-vector/construction-worker-uniform_1308-99642.jpg?t=st=1717491454~exp=1717495054~hmac=01b0b6a54c8d971932b9fd272c1a5ebc704330d26c566a3e66cc1240f906821a&w=360'}
            des={
              "As parents, we're thrilled with the holistic education our child receives here. The extracurricular activities, especially the yoga sessions, have significantly improved his concentration and overall well-being. The sports teams are inclusive and very well coached."
            }
            name={"Mr. Rajdeep Mehta"}
            post={"Contractor"}
          />
        </SwiperSlide>

        <SwiperSlide className="two">
          <Card
            img={'https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-black-suit_1142-50987.jpg?t=st=1717491329~exp=1717494929~hmac=16d3f8fcc48d24fd66389d13f7399e99483c70888575911cf194410048c93b76&w=740'}
            des={
              "This school goes above and beyond in nurturing every student’s potential. The balance between academics, sports, and other extracurricular activities like yoga and music is exceptional. We really appreciate the focus on developing well-rounded individuals."
            }
            name={"Mr. Amit Patel"}
            post={"Businessman"}
          />
        </SwiperSlide>

        <SwiperSlide className="three">
          <Card
            img={'https://img.freepik.com/free-photo/beautiful-businesswoman-sitting-desk-office-3d-rendering_1142-40288.jpg?t=st=1717491755~exp=1717495355~hmac=6248d182ce3a7f2b5b6a0c6746d718b321135230e5ec0c7b8350ea4e598652cd&w=740'}
            des={
              "I'm very impressed by the school’s commitment to extracurricular activities. The facilities for sports are outstanding, and the yoga classes are a big hit with my son. It’s comforting to know he’s growing in a supportive, well-rounded environment."
            }
            name={"Ms. Anita Rao"}
            post={"IT Consultant"}
          />
        </SwiperSlide>

        <SwiperSlide className="four">
          <Card
            img={'https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107421.jpg?t=st=1717491183~exp=1717494783~hmac=0f3569aca9ae6194de4d8fe637267588891f68a9bb8655b0cc627ccbd12a9504&w=740'}
            des={
              "The diverse range of extracurricular activities offered by this school is commendable. Our children participate in both basketball and robotics, gaining valuable team skills and technical knowledge. The school’s environment is both challenging and supportive."
            }
            name={"Mr. Sunil Sharma"}
            post={"Doctor"}
          />
        </SwiperSlide>

        <SwiperSlide className="five">
          <Card
            img={'https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980013.jpg?t=st=1717491498~exp=1717495098~hmac=6f0550c486bda8fa0e419a56b5c53f33e2f1d4fc39d7c5774066c8023e95fa5c&w=740'}
            des={
              "Fantastic school with a strong emphasis on both mental and physical development! The inclusion of yoga and meditation along with traditional sports has been a game-changer for our daughter. She's more focused and happier than ever"
            }
            name={"Mr. Manish Singh"}
            post={" University Professor"}
          />
        </SwiperSlide>

        <SwiperSlide className="six">
          <Card
            img={'https://img.freepik.com/free-photo/view-3d-male-lawyer-suit_23-2151228169.jpg?t=st=1717491534~exp=1717495134~hmac=aa6c7464d7bf23303130c39070ed5e9b2707ddb71ece8843fbae0db5e48051fb&w=740'}
            des={
              "We appreciate how this school values not just academic excellence but also physical health and wellness. The sports programs are competitive yet welcoming, and the yoga sessions help students manage stress."
            }
            name={"Ms. Deepika Iyer"}
            post={"Bank Manager"}
          />
        </SwiperSlide>

        <SwiperSlide className="seven">
          <Card
            img={'https://img.freepik.com/free-photo/celebration-labour-day-with-3d-cartoon-portrait-working-woman_23-2151306545.jpg?t=st=1717491641~exp=1717495241~hmac=4b3255f3a4165c44eae80b464a64d62b2cf9f3c2329a62c17e26c38a00f8df75&w=740'}
            des={
              "Truly a place for holistic child development. The coaches and instructors for sports and yoga are incredibly passionate and skilled. Our son has improved not just physically but also in his social skills and self-discipline."
            }
            name={"Ms. Neha Malik"}
            post={"Fashion Designer"}
          />
        </SwiperSlide>

        <SwiperSlide className="eight">
          <Card
            img={'https://img.freepik.com/free-photo/view-3d-male-lawyer-suit_23-2151228111.jpg?t=st=1717491673~exp=1717495273~hmac=0c5f4c85334afc78f835beb6a8baef69f381afbd7ff1fd1a80315eaabc8c3251&w=740'}
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
