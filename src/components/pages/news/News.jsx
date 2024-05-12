import './News.css'; // Stylesheet for the component
import "animate.css/animate.min.css";
import { useState } from 'react';
import MyCarousel from './Carousel';
const News = () => {

  const [carouselItems] = useState([
    {
      id: 1,
      imgUrl: 'https://stlouis.madscience.org/uploads/images/4d9c5c87-e201-4c62-8160-c9836429f7dd.jpg',
      date: '3rd May 2023',
      caption: 'New State-of-the-Art Science Lab',
      description: "We are thrilled to announce the opening of our brand-new, state-of-the-art science laboratory equipped with the latest technology and equipment. Get ready to embark on exciting experiments and discoveries!",
    },
    {
      id: 2,
      imgUrl: 'https://teentruth.net/wp-content/uploads/2018/09/David-Flood-3-16x9-lo-res.jpg',
      date: '5th June 2023',
      caption: 'Celebrity Guest Speaker Visit',
      description: "Mark your calendars! Renowned [Field] expert [Celebrity Name] will be visiting our school to share insights and inspire our students. Don't miss this incredible opportunity!",
    },
    {
      id: 3,
      imgUrl: 'https://img1.wsimg.com/isteam/ip/6b7ef69e-0bba-4448-8baa-dd3563aa5421/WhatsApp%20Image%202024-04-19%20at%201.44.46%20PM.jpeg/:/rs=w:719,h:598',
      date: '15th Aug 2023',
      caption: 'Global Exchange Program Launch',
      description: "Embark on a journey of cultural exchange! Our school is launching a global exchange program, offering students the chance to study abroad and experience diverse cultures firsthand. Stay tuned for more details!",
    },
    {
      id: 4,
      imgUrl: 'https://www.shutterstock.com/image-photo/young-soccer-players-holding-trophy-600nw-370092275.jpg',
      date: '19th Dec 2023',
      caption: 'Sports Championship Victory',
      description: "We're champions! Congratulations to our school's [Team Name] for clinching the [Championship Name] in [Sport]. Your hard work, dedication, and teamwork have paid off. Let's celebrate this remarkable achievement!",
    },
    {
      id: 5,
      imgUrl: 'https://www.aspireleaders.org/wp-content/uploads/2023/09/WhatsApp-Image-2023-07-11-at-11.31.50-1200x675.jpeg',
      date: '18th Oct 2023',
      caption: 'Alumni Spotlight: Breaking Barriers',
      description: "Witness the remarkable journey of our alumna/alumnus [Name], who defied all odds to break barriers and pave the way for change. From humble beginnings to global recognition, their story inspires us to reach for the stars and shatter limitations. Join us in celebrating their courage, resilience, and unwavering spirit!",
    }
    
  ]);
  
  return  (
    <>
    <MyCarousel items={carouselItems} />
    <div className="news-container">

    <h1 style={{ marginLeft: '50px', color: 'blue', fontSize: '60px',textAlign: 'center',marginTop: '50px', }} className='news-heading animate__animated animate__fadeInDown no-hover-shadow'>LATEST NEWS</h1>

    <div className="news-content">
    <h1 style={{ marginLeft: '50px', color: 'blue', fontSize: '60px',textAlign: 'center',marginTop: '50px', }} className='tagh1 animate__animated animate__fadeInDown no-hover-shadow'>LATEST NEWS</h1>
      <div className="news-card-container">
        {/* Card 1 */}
        <div className="news-card animate__animated animate__fadeInLeft">
          <img src="https://bostonworldschool.com/wp-content/uploads/2023/02/zoo.jpg" className="news-card-img-top" alt="Image 1" />
          <div className="news-card-body ">
            <h5 className="news-card-title">School Trip to Zoo</h5>
            <p className="news-card-text">Students had an amazing time exploring the zoo and learning about various animals. They particularly enjoyed feeding the giraffes and watching the penguins swim.</p>
            <p className="news-card-text"><small className="news-text-muted">May 5, 2024</small></p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card animate__animated animate__fadeInUp">
          <img src="https://www.popsci.com/uploads/2019/03/18/YO6Q7ELUJFOOK53QRDIQPCJSJA.jpg?auto=webp" className="news-card-img-top" alt="Image 2" />
          <div className="news-card-body">
            <h5 className="news-card-title">Science Fair Winners</h5>
            <p className="news-card-text">Congratulations to the winners of our annual science fair! Their innovative projects impressed everyone. The first prize went to a project exploring renewable energy sources.</p>
            <p className="news-card-text"><small className="news-text-muted">May 3, 2024</small></p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card animate__animated animate__fadeInRight">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaq3EWNRmHkR906m_y_pe9yAa50S5dd7ksg&usqp=CAU" className="news-card-img-top" alt="Image 3" />
          <div className="news-card-body">
            <h5 className="news-card-title">Sports Day Highlights</h5>
            <p className="news-card-text">Our students showcased their athletic talents during the sports day event, creating unforgettable memories. The relay race was particularly thrilling, with teams competing fiercely for the top spot.</p>
            <p className="news-card-text"><small className="news-text-muted">May 1, 2024</small></p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="news-card animate__animated animate__fadeInLeft">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLZREnojeDbKROaJJL3eKSWo9scydp9lsdVbbNCsdiFfvO-bxHzacLIDP2GBxeUKQTJM&usqp=CAU" className="news-card-img-top" alt="Image 4" />
          <div className="news-card-body">
            <h5 className="news-card-title">Art Exhibition</h5>
            <p className="news-card-text">Art enthusiasts gathered to admire the stunning artworks created by our talented students. The exhibition featured a diverse range of mediums, from paintings and sculptures to digital art.</p>
            <p className="news-card-text"><small className="news-text-muted">April 28, 2024</small></p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="news-card animate__animated animate__fadeInUp">
          <img src="https://www.mobileedproductions.com/hs-fs/hubfs/MusicEducation1.jpg?width=600&name=MusicEducation1.jpg" className="news-card-img-top" alt="Image 5" />
          <div className="news-card-body">
            <h5 className="news-card-title">Music Performance</h5>
            <p className="news-card-text">The melodious tunes filled the auditorium as our students put on a captivating music performance. From classical compositions to modern hits, the audience was treated to an unforgettable evening of music.</p>
            <p className="news-card-text"><small className="news-text-muted">April 25, 2024</small></p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="news-card animate__animated animate__fadeInDown">
          <img src="https://www.bathecho.co.uk/uploads/2021/07/southgate-booknic-2.jpg" className="news-card-img-top" alt="Image 6" />
          <div className="news-card-body">
            <h5 className="news-card-title">Book Reading Event</h5>
            <p className="news-card-text">Readers immersed themselves in captivating stories and explored the magic of literature at our book reading event. The event featured readings from both classic and contemporary literature, catering to all tastes.</p>
            <p className="news-card-text"><small className="news-text-muted">April 23, 2024</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);
}

export default News;
