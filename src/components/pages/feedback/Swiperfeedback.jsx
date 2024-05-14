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
            img={'https://c4.wallpaperflare.com/wallpaper/819/140/928/anime-art-school-lesson-wallpaper-preview.jpg'}
            des={
              "As parents, we're thrilled with the holistic education our child receives here. The extracurricular activities, especially the yoga sessions, have significantly improved his concentration and overall well-being. The sports teams are inclusive and very well coached."
            }
            name={"Mr. Rajdeep Mehta"}
            post={"Contractor"}
          />
        </SwiperSlide>

        <SwiperSlide className="two">
          <Card
            img={'data:image/jpeg;base64,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'}
            des={
              "This school goes above and beyond in nurturing every student’s potential. The balance between academics, sports, and other extracurricular activities like yoga and music is exceptional. We really appreciate the focus on developing well-rounded individuals."
            }
            name={"Mr. Amit Patel"}
            post={"Businessman"}
          />
        </SwiperSlide>

        <SwiperSlide className="three">
          <Card
            img={'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/30-most-iconic-anime-teachers-ranked-sakata-gintoki-gintama.jpg'}
            des={
              "I'm very impressed by the school’s commitment to extracurricular activities. The facilities for sports are outstanding, and the yoga classes are a big hit with my son. It’s comforting to know he’s growing in a supportive, well-rounded environment."
            }
            name={"Ms. Anita Rao"}
            post={"IT Consultant"}
          />
        </SwiperSlide>

        <SwiperSlide className="four">
          <Card
            img={'https://static.wikia.nocookie.net/owarinoseraph/images/9/9d/Episode_2_-_Screenshot_42-0.png/revision/latest/thumbnail/width/360/height/450?cb=20200707193117'}
            des={
              "The diverse range of extracurricular activities offered by this school is commendable. Our children participate in both basketball and robotics, gaining valuable team skills and technical knowledge. The school’s environment is both challenging and supportive."
            }
            name={"Mr. Sunil Sharma"}
            post={"Doctor"}
          />
        </SwiperSlide>

        <SwiperSlide className="five">
          <Card
            img={'https://t4.ftcdn.net/jpg/06/29/59/05/360_F_629590578_aeKIkEP4PddWf6ix1US4QfYj0d3v2s9f.jpg'}
            des={
              "Fantastic school with a strong emphasis on both mental and physical development! The inclusion of yoga and meditation along with traditional sports has been a game-changer for our daughter. She's more focused and happier than ever"
            }
            name={"Mr. Manish Singh"}
            post={" University Professor"}
          />
        </SwiperSlide>

        <SwiperSlide className="six">
          <Card
            img={'https://toppng.com/uploads/preview/teacher-anime-11563208341ry6kdg9ebc.png'}
            des={
              "We appreciate how this school values not just academic excellence but also physical health and wellness. The sports programs are competitive yet welcoming, and the yoga sessions help students manage stress."
            }
            name={"Ms. Deepika Iyer"}
            post={"Bank Manager"}
          />
        </SwiperSlide>

        <SwiperSlide className="seven">
          <Card
            img={'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ea/86/41/ea864191-2cb9-3c50-6a1d-64451c76fd08/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg'}
            des={
              "Truly a place for holistic child development. The coaches and instructors for sports and yoga are incredibly passionate and skilled. Our son has improved not just physically but also in his social skills and self-discipline."
            }
            name={"Ms. Neha Malik"}
            post={"Fashion Designer"}
          />
        </SwiperSlide>

        <SwiperSlide className="eight">
          <Card
            img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8wrX3umuB_QwyZikHH4iQTvBUL2OrBUog&usqp=CAU'}
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
