import { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import './Blog.css';

const BlogPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: 'eLearning Industry',
            content: 'Support group for online teaching professionals who give remote access to education for students of all skill levels. Daily articles include everything related to online learning, from the most recent ideas.',
            imageSrc: 'https://honorswp.com/wp-content/uploads/2021/07/boy-studying-at-home-via-e-learning-website-G9RTPNU-2048x1365.jpg',
            modalContent: {
                text: [
                    "Technological Advancements: The eLearning industry has benefited significantly from advancements in technology, particularly the internet, mobile devices, and digital content creation tools. These technologies have enabled the development of diverse eLearning solutions, including online courses, virtual classrooms, educational apps, and learning management systems (LMS).",
                    "Global Reach: One of the main advantages of eLearning is its ability to reach a global audience. Learners from different geographic locations can access educational content and participate in courses without the need for physical presence. This has led to the democratization of education, making learning accessible to people worldwide.",
                    "Corporate Training and Professional Development: In addition to academic education, eLearning plays a crucial role in corporate training and professional development. Many businesses and organizations use eLearning platforms and resources to upskill their employees, deliver compliance training, and improve job performance."
                ],
                images: [
                    'https://static.voices.com/wp-content/uploads/2019/03/MR-3017-industry-elearning-1.jpg',
                    'https://cdn.elearningindustry.com/wp-content/uploads/2022/01/shutterstock_352173119-768x431.jpg',
                    'https://tse3.mm.bing.net/th?id=OIP.JLIKRR6OGvliv2p5uDLlEwHaDt&pid=Api&P=0&h=180'
                ]
            }
        },

        {
            id: 2,
            title: 'Discovery Education',
            content: 'Successful digital materials for elementary through secondary educators who want to enhance their classrooms while engaging their students. Professionally.',
            imageSrc: 'http://seattlemedium.com/wp-content/uploads/2019/11/iStock-639407632.jpg',
            modalContent: {
                text: [
                    "Company Overview: Discovery Education is a division of Discovery, Inc., which is known for its portfolio of television networks, including the Discovery Channel, Animal Planet, and TLC. Discovery Education provides digital textbooks, multimedia content, and professional development resources to educators around the world.",
                    "Curriculum Alignment: Discovery Education's resources are aligned with educational standards such as the Common Core State Standards (in the United States) and other national and international standards. This ensures that educators can easily integrate the content into their existing curriculum.",
                    "Impact on Education: Discovery Education is committed to transforming teaching and learning through the use of technology and media. By providing dynamic and engaging educational content, Discovery Education aims to inspire students and empower educators to achieve academic success.",
                ],
                images: [
                    'https://allpostnews.co.uk/wp-content/uploads/2021/05/Discovery-Education-Experience-2-002.jpg',
                    'https://tse2.mm.bing.net/th?id=OIP.aurql0Pls4YGWpsLmxFUZQHaE8&pid=Api&P=0&h=180',
                    'https://blog.discoveryeducation.com/wp-content/uploads/2022/09/Header-1200x675-1.png'
                ]
            }
        },
        {
            id: 3,
            title: 'Parenting for College',
            content: 'Services with information for parents of college-bound and current students at universities. Articles discuss the most recent advancements in colleges and universities around the worlds.',
            imageSrc: 'https://www.visualsstock.com/images/Low/5/AK58553.jpg',
            modalContent: {
                text: [
                    "Supporting Independence: As your child prepares for college, it's essential to encourage their independence. This includes fostering decision-making skills, time management, and problem-solving abilities. Gradually shifting responsibilities to your child helps them develop self-reliance, which is crucial for success in college and beyond.",
                    "Navigating the College Application Process: The college application process can be overwhelming for both parents and students. Offer guidance and support as your child researches colleges, prepares application materials, and navigates deadlines. Encourage them to explore a range of options and find the best fit for their interests, academic goals, and personal preferences.",
                    "Fostering Social Connections: Building social connections is an integral part of the college experience. Encourage your child to participate in campus activities, join clubs or organizations, and make connections with peers who share similar interests. Support their efforts to develop friendships, build a supportive network, and engage in positive social interactions.",
                ],
                images: [
                    'https://tse1.mm.bing.net/th?id=OIP.PafTb0btb_N6Pb7AaBfUygHaE8&pid=Api&P=0&h=180',
                    'http://images.huffingtonpost.com/2015-09-22-1442932242-3836131-CollegeFamily.jpg',
                    'https://1.bp.blogspot.com/-SrZCmirTvfU/Ub8szPGLOaI/AAAAAAAAArE/gygT24-_KHY/s1600/parenting.jpg'
                ]
            }
        },
        {
            id: 4,
            title: 'The Confident Teacher',
            content: 'An English instructor writes articles and offers advise to other English teachers. Alex Quigley, a veteran educator, gives his opinions on teaching reading and literature at home and in the classroom, as well as having access to online materials.',
            imageSrc: 'https://www.thoughtco.com/thmb/j038IzwnpE_NiMpqKxN-eWxAtNk=/1026x684/filters:fill(auto,1)/confidencestevedebenportvetta-56a939a25f9b58b7d0f96633.jpg',
            modalContent: {
                text: [
                    "Self-efficacy: The book explores the concept of self-efficacy in teaching, which refers to a teacher's belief in their ability to positively impact student learning outcomes. Quigley discusses strategies for enhancing teacher self-efficacy and overcoming self-doubt.",
                    "Classroom management: Effective classroom management is essential for creating a positive and productive learning environment. Quigley offers advice on establishing clear expectations, managing behavior effectively, and fostering a positive classroom culture.",
                    "Professional development: Continuous professional development is key to improving teaching practice and building confidence. Quigley offers guidance on seeking out professional learning opportunities, reflecting on teaching practice, and collaborating with colleagues to enhance teaching effectiveness.",
                ],
                images: [
                    'https://www.teflcourse.net/uploads/teacher-portrait1.jpg',
                    'https://tse2.mm.bing.net/th?id=OIP.zGW9VEHlfP-xkv8WtHDwDwHaE8&pid=Api&P=0&h=180',
                    'https://image.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg'
                ]
            }
        },
        {
            id: 5,
            title: "Education Week",
            content: 'Parents, educators, and legislators should be aware of this breaking news. Covers K-12 educational issues, including factual news stories and data, as well as opinion pieces from education professionals.',
            imageSrc: 'https://laurenskids.org/wp-content/uploads/2021/11/AdobeStock_391344115.jpg',
            modalContent: {
                text: [
                    "Purpose: Education Week aims to promote the value of education and encourage individuals, families, and communities to engage in learning activities. It serves as a platform to discuss educational policies, challenges, and solutions.",
                    "Themes: Each Education Week may have a specific theme or focus, such as literacy, STEM (Science, Technology, Engineering, and Mathematics) education, inclusive education, digital learning, environmental education, or global citizenship.",
                    "Promotion: Education Week events are usually promoted through various channels, including social media, websites, newsletters, press releases, posters, and community outreach. Engaging stakeholders and media coverage help to amplify the impact of the event.",
                ],
                images: [
                    'http://2.bp.blogspot.com/-KZ1AbKNqUyU/VbrVuU-p_dI/AAAAAAAAH04/zGJwoUTAxqA/s1600/ArtClass.jpg',
                    'https://i.pinimg.com/originals/0e/64/4e/0e644e85e17e41620a3f8e02074e19ef.jpg',
                    'https://www.cmcc.edu/wp-content/uploads/2018/07/ECE-Program-Header-1024x683.jpg'
                ]
            }
        },
        {
            id: 6,
            title: 'Educational Technology (EdTech) and Mobile Learning',
            content: 'Articles and tips aimed at assisting instructors and students in seamlessly integrating technology into the classroom by utilizing the most recent digital tools.',
            imageSrc: 'https://www.brookings.edu/wp-content/uploads/2015/12/students_tablet_001.jpg',
            modalContent: {
                text: [
                    "Accessibility and Flexibility: Educational technology, including mobile learning, enhances accessibility and flexibility by providing learners with the opportunity to access educational resources anytime, anywhere. Whether through online courses, educational apps, or digital textbooks, learners can engage in learning activities at their own pace and convenience, accommodating diverse learning styles and preferences.",
                    "Personalization and Adaptability: With the use of educational technology and mobile learning applications, instructors can personalize learning experiences to meet the individual needs and preferences of each learner. Adaptive learning algorithms can analyze learner data and provide customized learning pathways, resources, and assessments tailored to each student's strengths, weaknesses, and learning goals.",
                    "Engagement and Interactivity: Both Educational Technology and Mobile Learning leverage interactive and engaging learning experiences to enhance student engagement and participation. .",

                ],
                images: [
                    'https://tse4.mm.bing.net/th?id=OIP.c5Lhl2NvFG8iIKYank0A1AHaE7&pid=Api&P=0&h=180',
                    'https://www.robotlab.com/hubfs/AI-Classroom.jpg#keepProtocol',
                    'https://acerforeducation.acer.com/wp-content/uploads/2018/08/iStock-902483320.jpg'
                ]
            }
        },
    ];

    const handleReadMore = (post) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    return (
        <div>
            <img src="https://contentadore.com/wp-content/uploads/2017/09/how-to-create-blog-1170x560.jpg" alt="Header Image" className="blog-header" />
            <div className="container-fluid py-4">
                <div className='blog-container'>
                    {blogPosts.map((post, index) => (
                        <div key={post.id} className="row mb-5 align-items-center">
                            <div className="col-md-10 mx-auto">
                                <div className="card shadow">
                                    <div className="row">
                                        {index % 2 === 0 ? (
                                            <>
                                                <div className="col-md-6 fade-left-enter">
                                                    <div className="blog-image-container">
                                                        <Image
                                                            src={post.imageSrc}
                                                            alt={`Related Image ${post.id}`}
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 p-4 fade-right-enter">
                                                    <h5 className="card-title" style={{ fontSize: '30px' }}>{post.title}</h5>
                                                    <p className="card-text" style={{ fontSize: '20px' }}>{post.content}</p>
                                                    <Button variant="primary" onClick={() => handleReadMore(post)}>Read More</Button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="col-md-6 p-5 fade-left-enter">
                                                    <h5 className="card-title" style={{ fontSize: '30px' }}>{post.title}</h5>
                                                    <p className="card-text" style={{ fontSize: '20px' }}>{post.content}</p>
                                                    <Button variant="primary" onClick={() => handleReadMore(post)}>Read More</Button>
                                                </div>
                                                <div className="col-md-6 fade-right-enter">
                                                    <div className="blog-image-container">
                                                        <Image
                                                            src={post.imageSrc}
                                                            alt={`Related Image ${post.id}`}
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedPost && (
                <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl" backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPost.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedPost.modalContent.text.map((point, index) => {
                            const [title, content] = point.split(':');
                            return (
                                <p key={index}>
                                    <strong>{title}:</strong> {content}
                                </p>
                            );
                        })}
                        <div className="d-flex flex-row justify-content-start flex-wrap">
                            {selectedPost.modalContent.images.map((image, index) => (
                                <div key={index} className={`modal-image-container fade-in-${index === 0 ? 'left' : index === 1 ? 'top' : 'right'}-enter`}>
                                    <Image src={image} alt={`Image ${index}`} className="img-thumbnail-modal" />
                                </div>
                            ))}
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};
export default BlogPage;