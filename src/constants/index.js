import {
    asamblo,
    backend,
    carrent,
    creator,
    css,
    docker,
    figma,
    gatsby,
    genium,
    git,
    html,
    hype,
    javascript,
    jobit,
    mobile,
    mongodb,
    nextjs,
    meteor,
    nodejs,
    quillok,
    reactjs,
    redux,
    tailwind,
    typescript,
    web,
} from "../assets";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web 3 Developer",
      icon: mobile,
    },
    {
      title: "Open-Source Collaborator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Gatsby",
      icon: gatsby,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "nextjs",
      icon: nextjs,
    },
    {
      name: "meteor",
      icon: meteor,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Hype Interactivo & Freelance",
      icon: hype,
      iconBg: "#383E56",
      date: "Oct 2018 - Nov 2020",
      points: [
        "Developed web apps multi-platform, with 5.000+ visits in the first week.",
        "Implemented highly scalable code to handle high volumes of concurrent users, projected over 10,000 individuals simultaneously.",
        "Led a team of 2 members junior backend, ensuring timely project delivery and fostering their professional growth.",
        "Review and optimization of functions, achieving a performance improvement of 13%, refactoring code.",
      ],
    },
    {
      title: "Full Stack Engineer",
      company_name: "Asamblo",
      icon: asamblo,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - May 2022",
      points: [
        "Implemented RESTful API integration for both the backend and frontend, leveraging third-party APIs for authentication systems using GraphQl and Axios.",
        "Leveraged Scrum methodology to optimize task scheduling, reporting, and foster effective communication with colleagues and clients.",
        "Restructured architecture in a collaborative effort, resulting in a 60% enhancement of scalability, performance, and security for an app.",
        "Employed Test-Driven Development (TDD) for refactoring and implementing new functionalities, boosting the automated system by 8% using Jest.",
      ],
    },
    {
      title: "Sr. Frontend Engineer",
      company_name: "Genium",
      icon: genium,
      iconBg: "#383E56",
      date: "May 2022 - Aug 2023",
      points: [
        "Developed multiple reactive web applications, leading to the launch of two highly successful applications with 70,000+ visits in the first month.",
        "Optimize and manage architecture via development and code reviews with 26% improved performance and 4x lighter pages, enhancing user accessibility.",
        "Led and guided the development of client apps, overseeing multi-level teams of up to 7 members, including senior and semi-senior developers.",
        "Collaborated cross-functionally with the design team, product manager, and client, ensuring timely and budget-conscious project delivery, achieving mutually successful outcomes.",
        "Optimized use of versioning in the repository, improving revisions and clarity in commits by 50%."
      ],
    },
    {
      title: "Sr. Frontend Engineer",
      company_name: "Quillok",
      icon: quillok,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Carlos is an outstanding Full Stack Engineer, that as Sr Frontend at Genium, not only fulfilled this role exceeding our expectations across several clients, always adapting quickly to different environments and work dynamics, but also helping out on the backend, showing great skills in this area as well. Carlos has very solid communication skills and is very proactive, always showcasing his ideas for improvements. One remarkable, attribute is that he's continuously striving to learn new skills and frameworks and is very aware of industry trends and brings them forward in the projects he's involved in.",
      name: "Silvia Gong",
      designation: "Head of people & talent",
      company: "Genium",
      image: "https://media.licdn.com/dms/image/C5603AQHdCxwF_JjbEA/profile-displayphoto-shrink_800_800/0/1631060850687?e=1698278400&v=beta&t=wRDcC1MzCYLuUW1PjkcbTMjd0kKIVk4oqEKtwFwxw6M",
    },
    {
      testimonial: "Carlos is a well-skilled Developer that helped the team overcome the different types of blockers in several situations. He also has an excellent personality to get along with the rest of the group. I would recommend him to work at any position requiring an experienced Full Stack Developer.",
      name: "Paolo Zambelli",
      designation: "Project Manager",
      company: "Genium",
      image: "https://media.licdn.com/dms/image/C4E03AQEDeQSrrEpNAA/profile-displayphoto-shrink_800_800/0/1546951088248?e=1698278400&v=beta&t=jXAF0AgcDOOVSRklkT8koHxq3UCbFAeDs1Aq0EMO3TA",
    },
    {
      testimonial:
        "After Carlos optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };