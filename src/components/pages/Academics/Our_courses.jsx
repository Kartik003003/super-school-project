import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Image, Modal } from 'react-bootstrap';
import './Courses.css'; // Import custom CSS file
import 'animate.css';

const heroImage = 'https://img.freepik.com/premium-photo/back-school-cute-education-scene-pixar-style_950002-230772.jpg?w=1060';
const coursesData = [
  {
    id: 1,
    title: "Kinda Garden",
    rating: 4.5,
    description: "Kindergarten: where the magic of learning begins. Exploring the world one kindergarten day at a time. Chalk, laughter, and endless curiosity - welcome to kindergarten! In a world of crayons and recess, kindergarten is pure happiness.",
    imageUrl: 'https://img.freepik.com/free-vector/children-holding-their-food-park-scene_1308-51942.jpg?w=900&t=st=1715090952~exp=1715091552~hmac=242904f55d8613ac28c6f9983046a1bd3dec294a05bb4b4b763d017a10ed5522',
    relatedCourses: [
      {
        title: "Plants & Animals for Kids",

        imageUrl: "https://i.pinimg.com/564x/33/5c/20/335c20b55340cabe95bfd167a6eab1af.jpg" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Adaptations for Kids",

        imageUrl: "https://img.freepik.com/free-vector/sticker-template-with-couple-kids-students-cartoon-character-isolated_1308-65669.jpg?w=826&t=st=1715086526~exp=1715087126~hmac=ea77d971c8cd93d34840cbfb091552568204a618ac51e7d1a20907d6e53ba885" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Accuplacer Math",

        imageUrl: "https://img.freepik.com/free-vector/girl-reading-book-about-arts-math_1308-106851.jpg?w=826&t=st=1715086607~exp=1715087207~hmac=3f8aa231308240db9128b8e8ac7faf4a8384595dcee3a7ce55a41246cb0fe900" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "European History for Kids",

        imageUrl: "https://img.freepik.com/premium-vector/europe-travel-concept-vector-illustration-graphic-design_18591-20267.jpg?w=740" // Placeholder image URL, replace it with the actual image URL
      },

    ]
  },
  {
    id: 2,
    title: "Primary courses",
    rating: 4.2,
    description: "Unleash your creativity and explore the art of storytelling in this interactive writing workshop. From poetry to short stories, learn techniques to craft compelling narratives and express yourself through words.",
    imageUrl: 'https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980026.jpg?t=st=1715091463~exp=1715095063~hmac=992958fcc6782223f88bb9db137122c9faac50c0bdbb341ae0abe0f697ac6247&w=996',
    relatedCourses: [
      {
        title: "English Grammar Rules",

        imageUrl: "https://img.freepik.com/premium-photo/colorful-english-word-wooden-blue-wooden-background_73274-129.jpg?w=996" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Social Studies",

        imageUrl: "https://img.freepik.com/free-photo/portrait-young-student-with-globe-education-day_23-2150980063.jpg?t=st=1715088362~exp=1715091962~hmac=d35189e8ae7467fc2e02ec9f3efb1aa0edb0d8cf7e155bd7202bc8de5660b775&w=900" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "5th Grade Math",

        imageUrl: "https://img.freepik.com/free-vector/font-design-math-genius-with-boy-numbers_1308-42277.jpg?t=st=1715088426~exp=1715092026~hmac=a43b99027eb10df1ab474ebf92f4cf9ccb23d9dc57ca2260451992476e9e7127&w=740" // Placeholder image URL, replace it with the actual image URL
      },


    ]
  },
  {
    id: 3,
    title: "Secondary Courses",
    rating: 4.8,
    description: "Master the core concepts of algebra and calculus in this comprehensive mathematics course. Build a strong foundation in mathematical principles and problem-solving strategies.",
    imageUrl: 'https://img.freepik.com/premium-vector/professor-students-university-class-cartoon_82574-10180.jpg?w=740',
    relatedCourses: [
      {
        title: "Hindi",

        imageUrl: "https://m.economictimes.com/thumb/msid-58244167,width-1200,height-900,resizemode-4,imgsize-31541/hindi-may-be-made-compulsory-till-class-x-in-cbse-schools-kvs.jpg" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Home Science ",

        imageUrl: "https://img.freepik.com/premium-vector/laboratory-scene-with-scientist-cartoon-character_1308-94095.jpg?w=826" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Algorithms, Part I",

        imageUrl: "https://img.freepik.com/free-vector/hand-drawn-rpa-illustration_23-2149243331.jpg?t=st=1715089129~exp=1715092729~hmac=4b332575a9c1e70c3a660b71850959726aabe31bf77ad533c8f966173d220cc7&w=740" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Economics",

        imageUrl: "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?t=st=1715089198~exp=1715092798~hmac=7d4c1ba91501e98b1bc9860016287b6ef54c21b081fe2a6402d7e245044dd869&w=996" // Placeholder image URL, replace it with the actual image URL
      },

    ]
  },
  {
    id: 4,
    title: "Higher Secondary ",
    rating: 4.6,
    description: " Explore the intricate connections between humans and the environment in this interdisciplinary course. Investigate pressing environmental issues such as climate change, biodiversity loss, and resource depletion.",
    imageUrl: 'https://img.freepik.com/premium-photo/3d-character-boy-student-with-books-laptop_677161-314.jpg?w=740',
    relatedCourses: [
      {
        title: "Physics",

        imageUrl: "https://img.freepik.com/free-photo/hand-balancing-ball-newton-s-cradle_176474-9104.jpg?t=st=1715089669~exp=1715093269~hmac=7296174672ec159cac6a6bba66bd0723b0c8991068c3ce74f55750458ecb4c86&w=996" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Chemistry ",

        imageUrl: "https://img.freepik.com/free-vector/science-lab-drawing-theme_23-2148484579.jpg?t=st=1715089761~exp=1715093361~hmac=c0b6b060b74d35a752759987a85e5beb6b3e7819aaf15c39513ab41bd69d3fa0&w=996" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Biology",

        imageUrl: "https://img.freepik.com/free-photo/3d-virus-cells-attacking-dna-strand_1048-6816.jpg?t=st=1715089793~exp=1715093393~hmac=19c196a4e045a3ebf7cc54836e87fb9bb873810f7a7df848c98caa40f8a56524&w=996" // Placeholder image URL, replace it with the actual image URL
      },
      {
        title: "Mathematics",

        imageUrl: "https://img.freepik.com/premium-vector/isolated-mathematics-font-banner-withboy-cartoon-character_1639-27427.jpg?w=740" // Placeholder image URL, replace it with the actual image URL
      },

    ]
  },
];

function CourseCard({ id, title, rating, description, imageUrl, index, handleReadMore }) {
  let animationStyle = {};

  // Apply animation styles for even and odd indices
  if (index % 2 === 0) {
    animationStyle = {
      animation: 'slideInLeft 0.5s forwards',
      animationDelay: `${index * 0.8}s` // Adjust delay as needed
    };
  } else {
    animationStyle = {
      animation: 'slideInRight 0.5s forwards',
      animationDelay: `${index * 0.8}s` // Adjust delay as needed
    };
  }

  return (
    <div className="unique-card-course" style={{ width: '20rem', margin: '30px auto 380px', ...animationStyle }}>
      <div className="unique-card-inner-course">
        <div className="unique-card-front-course">
          <Card.Title className=""><h2>{title}</h2></Card.Title>
          <Card.Img variant="top" src={imageUrl} className="unique-card-img-top-course" />
        </div>
        <div className="unique-card-back-course">
          <Card.Body className="unique-card-body-course">
            <Card.Title className="unique-card-title-course">{title}</Card.Title>
            <Card.Subtitle className="unique-card-rating mb-2 text-muted">Rating: {rating}</Card.Subtitle>
            <Card.Text className='unique-card-descrption'>{description}</Card.Text>
            <Button variant="primary" onClick={() => handleReadMore(id)}>Read more</Button>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}

function RelatedCourseCard({ id, title, description, imageUrl, handleReadMore }) {
  return (
    <Card className=" mb-3 unique-card-related-course" style={{ width: '15rem', border: '2px solid #007bff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '250px' }}>
      <Card.Img variant="top" src={imageUrl} className="unique-card-img-top-course" style={{ height: '150px', objectFit: 'revert-layer', borderRadius: '8px 8px 0 0' }} />
      <Card.Body className="unique-card-body-course">
        <Card.Title className="unique-card-related-title-course" style={{ color: 'white', fontSize: '1rem', marginBottom: '5px' }}>{title}</Card.Title>
        <Button variant="primary mt-2" onClick={() => handleReadMore(id)}>View Lesson</Button>
      </Card.Body>
    </Card>
  );
}

const Our_courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleReadMore = (courseId) => {
    const course = coursesData.find(course => course.id === courseId);
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="unique-hero-section">
        <Image src={heroImage} fluid className="unique-hero-image" />
        <div className="unique-hero-text">
          <h1>Our Courses</h1>
          <p>An educated mind is better than an empty one. The only weapon to fight injustice is Education. A well-educated person knows about a lot of things</p>
        </div>
      </div>
      <Container>
        <Row>
          {coursesData.map((course, index) => (
            <Col key={course.id}>
              <CourseCard {...course} index={index} handleReadMore={handleReadMore} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for displaying course details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg"> {/* Set size to large */}
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse && selectedCourse.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedCourse && selectedCourse.description}</p>
          {selectedCourse && selectedCourse.relatedCourses && (
            <>
              <h5>Related Courses:</h5>
              <Container> {/* Use a separate container for related course cards */}
                <Row>
                  {selectedCourse.relatedCourses.map((relatedCourse, index) => (
                    <Col key={index} md={6}> {/* Use md={6} to fit two cards in one row */}
                      <RelatedCourseCard {...relatedCourse} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Our_courses
