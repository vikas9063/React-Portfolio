import images from "./images"

export const name='Vikas'
export const helloText ='Hello, I am'
export const devText = ['Java Developer','Springboot Developer','Web Developer']
export const listMenu=['home', 'about', 'work', 'skills', 'contact'];
export const navDotMenu=['home', 'about', 'work', 'skills','testimonials', 'contact'];


// About
export const aboutData=[
    {title:'Java Development', description:'I am a Java Developer with 3+ years of experience in developing and maintaining Java applications. I have a strong background in object-oriented programming and have extensive experience in developing and deploying web applications using Java technologies such as J2EE, Spring, Hibernate', imgUrl:images.java},
    {title:'React Development', description:'I am a React developer with experience in developing web applications using React and its related technologies. I have a strong understanding of React components, state management, and the React lifecycle. I am proficient in creating custom components and integrating them with existing applications. Additionally, I am experienced in using React Router, Redux, and other libraries to create complex user interfaces', imgUrl:images.react},
    {title:'Springboot Development', description:'I am a software engineer who specializes in developing applications using the Springboot framework. I also be able to troubleshoot and debug applications, as well as have experience with databases and web services.', imgUrl:images.springboot},
    {title:'Angular Development', description:'I am a software engineer who specializes in developing web applications using the Angular framework. I am responsible for developing the front-end of applications, working with HTML, CSS, and JavaScript to create user-friendly interfaces.', imgUrl:images.web},
    {title:'WSO2 Development', description:'I am a software engineer who specializes in developing applications and services using the WSO2 platform', imgUrl:images.wso2}
]


//Works
export const workMenu=['SpringBoot', 'Web App', 'Mobile App', 'React JS', 'WSO2','All'];

export const workData=[
    {
        title:'Modern Portfolio Website',
        description:'Modern portfolio Website',
        projectLink:'http://github.com/vikas9063/my-proj',
        imgUrl:images.react,
        tags:['React JS','All','Web App']

    },
    {
        title:'Modern Expense Tracker Website',
        description:'Modern Expense Tracker Website',
        projectLink:'http://github.com/vikas9063/my-proj',
        imgUrl:images.adidas,
        tags:['SpringBoot','React JS','All','Web App',]

    },
    {
        title:'Customer Portal Application',
        description:'Customer Portal Application Website and Mobile App',
        projectLink:'http://github.com/vikas9063/my-proj',
        imgUrl:images.wso2,
        tags:['Mobile App','All','SpringBoot']

    },
    {
        title:'WSO2 Choice Application',
        description:'Wso2 Choice Application Website and Mobile App',
        projectLink:'http://github.com/vikas9063/my-proj',
        imgUrl:images.wso2,
        tags:['Mobile App','All','WSO2']

    }
]


//Skills & Experience
export const skillsData = [
    {
        name:'React',
        //bgColor:'dodgerBlue',
        icon:images.react
    },
    {
        name:'SpringBoot',
        //bgColor:'green',
        icon:images.springboot
    },
    {
        name:'Angular',
        //bgColor:'dodgerBlue',
        icon:images.web
    },
    {
        name:'WSO2',
        //bgColor:'dodgerBlue',
        icon:images.wso2
    },
    
]
export const workExpData=[
    {
        year:'2022',
        works:[{
            name:'Full Stack Developer',
            company:'Eidiko Systems and Integrators',
            Desc:'Eidiko Systems'
        },
        {
            name:'Backend Developer',
            company:'Canara HSBC Life',
            Desc:'Created Rest APIS'
        }
    ]
    },
    {
        year:'2023',
        works:[{
            name:'Frontend Developer',
            company:'Eidiko Systems and Integrators',
            Desc:'Eidiko Systems'
        }
    ]
    }
]

export const testimonialsData=[
    {
        imgUrl:images.html,
        name:'Sarah',
        company:'Netflix',
        feedback:'He is a good Backend Developer , Definitely i would recommend him'
    },
    {
        imgUrl:images.javascript,
        name:'Victor',
        company:'BGMI',
        feedback:'He is a good Java Script Developer , Definitely i would recommend him'
    },
    {
        imgUrl:images.wso2,
        name:'Andy',
        company:'Canara HSBC Life',
        feedback:'He is a good WSO2 Developer , Definitely i would recommend him'
    }
]

export const brandsData=[
    {
        brandName:'Bolt',
        imgUrl:images.bolt
    },
    {
        name:'Spotify',
        imgUrl:images.spotify
    },
    {
        brandName:'Amazon',
        imgUrl:images.amazon
    },
    {
        name:'Asus',
        imgUrl:images.asus
    }
]

export const emailData='gvikaskumar31@gmail.com';

export const phoneData='+91 9063669981';

// Gallery

export const galleryImagesData = [
    {
      img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
