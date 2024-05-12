import React from 'react';
import './Amenities.css';

const AmenitiesCard = ({ image, heading, description }) => {
    return (
        <div className="amenities_card">
            <div className="amenities_card-inner">
                <div className="amenities_card-front">
                    <img src={image} alt="Amenity" />
                    <div className="amenities_card-heading">{heading}</div>
                </div>
                <div className="amenities_card-back">
                    <div className="amenities_card-content">
                        <h3>{heading}</h3>

                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Amenities = ({ image, heading, description }) => {
    const amenities = [
        {
            image: 'https://i.pinimg.com/originals/12/62/1a/12621a9b886b93dea5197407fb9cdfad.jpg',
            heading: 'LIBRARY',
            description: 'The school library fosters curiosity as it serves as a hub for a variety of reading activities, cultural events, information access, knowledge acquisition, in-depth thought, and stimulating conversation. With more than 15,000 books on a wide range of subjects, our school library is a knowledge center.',
        },
        {
            image: 'https://www.espplay.co.uk/wp-content/uploads/2020/08/After_Manchester-Gorton-Primary_30.jpg',
            heading: 'PLAY GROUND',
            description: 'Our children can practice a variety of sports activities on our expansive playground, which helps them grow in their abilities and improves their capacity for teamwork. We provide a wide range of sports, including football, cricket, volleyball, basketball, and athletes.',
        },
        {
            image: 'https://newsroom.gy/wp-content/uploads/2021/04/PC-5-scaled.jpg',
            heading: 'SMART CLASSROOMS',
            description: 'The large, well-ventilated classrooms have smart boards installed. Students are encouraged to engage in interactive activities where their learning extends beyond the classroom. We make certain that the technology serves the pupils needs. The teachers notions are easier for the students to see when they are presented on smart boards.',
        },
        {
            image: 'https://www.tajglobalacademy.com/Uploads/fileupload/33ICT-Lab.jpg',
            heading: 'COMPUTER LABS',
            description: 'To fulfill the demands of modern learning and to address the academic needs connected to computing and IT, we have three well-equipped computer labs with software and hardware that have over 100 PCs.All three Computer Labs have dual core PCs that are connected to the local area network.',
        },
        {
            image: 'https://familyprivateschool.com/wp-content/uploads/2019/08/14-chemistry-lab-room.jpg',
            heading: 'CHEMISTRY LAB',
            description: 'It is equipped with all the tools required to prepare samples, as well as various apparatus for carrying out different tests and standards. It offers a space for kids to develop their inner scientists.',
        },
        {
            image: 'https://i.pinimg.com/736x/04/1b/e5/041be592bc36e0b8de5cb16d83aefe6d.jpg',
            heading: 'PHYSICS LAB',
            description: 'It is thoughtfully planned and furnished with the newest amenities to meet the demands of the pupils. Through practical experience, the students learn the distinction between theory and implementation. They get to conduct experiments, pose questions, gather and analyze data, and come up with fresh inquiries to investigate.',
        },
        {
            image: 'https://tse3.mm.bing.net/th?id=OIP.hO5v0_b9nQf30mftQkiH6AHaE7&pid=Api&P=0&h=180',
            heading: 'SCHOOL BUILDING',
            description: 'Super School, Wakad boasts an exceptional infrastructure and state-of-the-art facilities furnished with all the necessary tools for a positive learning atmosphere.It occupies five acres in total.',
        },
        {
            image: 'https://www.artisticcontrols.com/wp-content/uploads/images/Taylor-International-School-Puchong.jpg',
            heading: 'MULTIPURPOSE HALL',
            description: 'A multipurpose hall fulfills a variety of useful functions.The two multipurpose halls we have are Takshak Hall and Ektaa Hall. It is well furnished to handle a broad range of occasions or pursuits.The schools center and a well-known place for memories to be created and experiences to be exchanged is the hall.',
        },
        {
            image: 'https://tse3.mm.bing.net/th?id=OIP.aGGM2bORy4Sqwcs8XO_KPQHaEK&pid=Api&P=0&h=180',
            heading: 'MEDICAL ROOM',
            description: 'A medical room in a school provides first aid and basic medical care for students during school hours. Its typically staffed by a school nurse or trained personnel equipped to handle common medical situations that may arise among students. ',
        },
        {
            image: 'http://3.bp.blogspot.com/-16Oa9Lugiu0/TmqsSVGDLdI/AAAAAAAAAC0/8OWhLhPdI5s/s1600/IMG_0542.JPG',
            heading: 'MUSIC',
            description: ' Music education likely includes classes where students learn about music theory, history, and performance techniques. They might participate in ensembles like bands, choirs, or orchestras, and have opportunities to showcase their talents through performances or competitions.',
        },
        {
            image: 'https://reviewonline.co.za/wp-content/uploads/sites/68/2017/12/CY5A6153.jpg',
            heading: 'TRANSPORTATION',
            description: 'We provide careful consideration to our kids safety while they travel. Our fleet of buses, which each have forty seats, guarantees that every student will have a pleasant place to sit while traveling.Our skilled drivers handle pick-ups and drops along the designated routes. Additionally, there are bus attendants who handle seating arrangements and student care.',
        },
        {
            image: 'https://vidyaavikascbse.ac.in/wp-content/uploads/2019/02/hostel-facility.jpg',
            heading: 'HOSTEL',
            description: 'All the facilities required to provide students with a relaxing and orderly living and learning environment are provided in our hostels. We place a high priority on everything that helps the children on their path toward holistic development, from first-rate lodging to knowledgeable medical professionals.',
        },

    ];
    return (
        <div className="amenities_title">
            <div
                className="hero d-flex align-items-center justify-content-center"
                style={{
                    height: "90vh",
                    backgroundColor: "salmon",
                    backgroundImage: 'url("https://gesc.wa.edu.au/wp-content/uploads/sites/25/2021/05/School-Facilities.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* <div style={{ fontSize: "4rem", color: "white" }}>
                    <Typewriter
                        options={{
                            strings: ["Academics & Events Calendar"],
                            autoStart: true,
                            loop: true,
                            cursor: '<span style="font-size: 4rem;">|</span>',
                        }}
                    />
                </div> */}
            </div>
            <p style={{ fontSize: '30px' }}>Since every child is unique, we at Super School recognize this and provide the young scholars the best possible learning environment.
                and we provide kids first-rate facilities as well.</p>
            <div className="amenities-grid">
                {amenities.map((amenity, index) => (
                    <AmenitiesCard key={index} image={amenity.image} heading={amenity.heading} description={amenity.description} />
                ))}
            </div>
        </div>
    )
}

export default Amenities
