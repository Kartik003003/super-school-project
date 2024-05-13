import React, { useState, useEffect } from 'react';
import './SchoolAchievements.css';

const SchoolAchievements = () => {
  const achievements = [
    {
      id: 1,
      image: 'https://clipground.com/images/best-school-year-ever-clipart-4.jpg',
      description: 'Awarded the Best School of the Year 2022',
    },
    {
      id: 2,
      image: 'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/October2012/top10bschools\_100812051449.jpg',
      description: 'Ranked among the top 10 schools in the country',
    },
    {
      id: 3,
      image: 'https://blogs.ufv.ca/science/files/2018/05/excellence.png',
      description: 'Received the Excellence in Education Award',
    },
    {
      id: 4,
      image: 'https://www.impacttrophies.co.uk/content/images/thumbs/0036236\_outstanding-achievement-school-button-badge.jpeg',
      description: 'Recognized for Outstanding Academic Performance',
    },
    {
      id: 5,
      image: 'https://tse1.mm.bing.net/th?id=OIP.hje1q8vuz6xgmALdztaPqAHaE8&pid=Api&P=0&h=180',
      description: 'Awarded the Green School of the Year Award',
    },
    {
      id: 6,
      image: 'https://ubertutors.co.uk/wp-content/uploads/2021/02/How-to-get-top-grades-at-university.jpg',
      description: 'Achieved the Highest Grade in the State',
    },
  ];

  const [openCardId, setOpenCardId] = useState(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    setIsAnimationComplete(false);
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div className="school-achievements">
      <h2>School Achievements</h2>
      <div className="achievements-container ">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`achievement-card ${openCardId === achievement.id ? 'open' : ''} ${isAnimationComplete ? 'animate' : ''
              }`}
            onClick={() => toggleCard(achievement.id)}
            onMouseEnter={() => setOpenCardId(achievement.id)}
            onMouseLeave={() => setOpenCardId(null)}
          >
            <div className="card-header">
              <h3>{achievement.description}</h3>
            </div><br />
            <div className="card-content">
              <div className="card-image">
                <img src={achievement.image} alt={achievement.description} />
              </div>
                <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolAchievements;