import React, { useState, useEffect } from 'react';
import './StudentAchievements.css';

const StudentAchievements = () => {
    const achievements = [
        {
            id: 1,
            image: 'https://tse1.mm.bing.net/th?id=OIP.yI-zQQlx2tUeAhlTOGW6RAHaHa&pid=Api&P=0&h=250',
            name: 'John Doe',
            award: 'National Science Fair',
            class: '10th Grade',
        },
        {
            id: 2,
            image: 'https://patch.com/img/cdn20/users/22791208/20230504/125823/styles/patch_image/public/ciac-scholar-athlete-award___04005743104.jpg',
            name: 'Jane Smith',
            award: ' Best Athlete Award',
            class: '12th Grade',
        },
        {
            id: 3,
            image: 'https://www.terrasanctaguild.com/mm5/graphics/00000001/TE9951G_lg.jpg',
            name: 'Michael Johnson',
            award: 'Outstanding Academic Achievement Award',
            class: '11th Grade',
        },
        {
            id: 4,
            image: 'https://storage.googleapis.com/ltkcms.appspot.com/fs/wfa/images/cover/2019-national-spelling-bee-trophy.base',
            name: 'Emily Davis',
            award: ' Spelling Bee Competition',
            class: '8th Grade',
        },
        {
            id: 5,
            image: 'https://www.apsnet.org/members/leadership/apsleadership/PublishingImages/outstandingvolunteer-01.jpg',
            name: 'David Wilson',
            award: 'Best Volunteer Award',
            class: '9th Grade',
        },
        {
            id: 6,
            image: 'https://dic.academic.ru/pictures/wiki/files/121/young-artist-award-statue.gif',
            name: 'Sophia Thompson',
            award: ' Best Young Artist Award',
            class: '7th Grade',
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
        <div className="student-achievements">
            <h2>Student Achievements</h2>
            <div className="achievements-container">
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
                            <h3>{achievement.award}</h3>
                        </div>
                        <div className="card-content">
                            <div className="card-image">
                                <img src={achievement.image} alt={achievement.name} />
                            </div>
                            <p>{achievement.name}</p>
                            <span className="student-class">{achievement.class}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentAchievements;