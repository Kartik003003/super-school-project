const menu = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        childrens: [
            {
                title: "Principal Desk",
                path: "/PrincipalDesk",
            },
            {
                title: "whySuperSchool",
                path: "/WhySuperSchool",
            },
            {
                title: "Our Vision & Mission",
                path: "/OurVisionMission",
            },
            {
                title: "Achievements",
                // childrens: [
                //     {
                //         title: "StudentAchievements",
                //         path: "/StudentAchievements",
                //     },
                //     {
                //         title: "SchoolAchievements",
                //         path: "/SchoolAchievements",
                //     },
                // ],
                path: "/Achievements",
            },
            {
                title: "Co-curriculum Activity",
                path: "/CoCurriculumActivity",
            },
        ],
    },
    {
        title: "Academics",
        childrens: [
            {
                title: "Our Courses",
                path: "/Our_courses",
            },
            {
                title: "Faculty & Staff",
                path: "/Staff",                
            },
            {
                title: "School Amenties",
                path: "/Amenities",
            },
            {
                title: "Calendar & Events",
                path: "/Calendar",
            },
        ],
    },
    {
        title: "Admission",
        childrens: [
            {
                title: "Admission Process",
                path: "/Admissions",
            },
            // {
            //     title: "Fee Structure",
            //     path: "/fee-structure",
            // },
            // {
            //     title: "Parent Referral Program",
            //     path: "/parent-referral-program",
            // },
            // {
            //     title: "FAQs",
            //     path: "/faqs",
            // },
        ],
    },
    {
        title: "Contact Us",
        path: "/contact-us",
    },
    {
        title: "News & Media",
        childrens: [
            {
                title: "Blogs",
                path: "/blogs",
            },
            // {
            //     title: "Awards",
            //     path: "/awards",
            // },
            {
                title: "In the News",
                path: "/News",
            },
        ],
    },
]

export default menu;