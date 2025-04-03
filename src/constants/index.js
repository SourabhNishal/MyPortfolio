import {
  visualisation,
  ML,
  AI,
  matplotlib,
  seaborn,
  python,
  pandas,
  plotly,
  powerbi,
  tableau,
  Lum,
  technohub,
  Myblocks,
  rasa,
  sales,
  music,
  analysis,
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
    title: "visualisation",
    icon: visualisation,
  },

  {
    title: "Data Analysis",
    icon: analysis,
  },

  {
    title: "Machine Learning",
    icon: ML,
  },

  {
    title: "Artificial Intelligence",
    icon: AI,
  },
  
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "Plotly",
    icon: plotly,
  },
  {
    name: "PowerBi",
    icon: powerbi,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  

  
];

const experiences = [
  {
    title: "Analytics Engineer",
    company_name: "Luminar TechnoHub Research & Development Center",
    icon: technohub,
    iconBg: "#383E56",
    date: "may 2024 - November 2024",
    points: [
      "Analyzed complex datasets using statistical methods to derive actionable insights and support decision-making.",
      "Developed predictive models and machine learning algorithms to improve business outcomes",
      "Conducted data cleaning and preprocessing to ensure high data quality and accuracy for analysis.",
      "Created visualizations and dashboards to effectively communicate findings to stakeholders.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Machine Learning Intern",
    company_name: "MyBlocks",
    icon: Myblocks,
    iconBg: "#383E56",
    date: "Jan 2024 - March 2024",
    points: [
      "Conducted exploratory data analysis (EDA) to identify trends, patterns, and anomalies in datasets",
      "Participated in data cleaning and transformation processes to ensure high-quality datasets for training and testing.",
      "Documented experiments and results to contribute to knowledge sharing and model reproducibility within the team",
      "Researched and implemented state-of-the-art machine learning techniques to improve existing models.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Luminar TechnoLab",
    icon: Lum,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - August 2023",
    points: [
      "Developed and implemented machine learning models to solve real-world problems, enhancing theoretical knowledge with practical applications.",
      "Gained hands-on experience in data science through practical projects and case studies during training ",
      "Conducted end-to-end data analysis, from data collection and preprocessing to modeling and visualization, on various datasets.",
      "Utilized tools like Tableau and Power BI to create interactive dashboard",
    ],
  },
];



const projects = [
  {
    name: "Rasa-Conversational-Chatbot",
    description:
      "A Rasa Open Source chatbot providing information on courses, admissions, and services offered by a software training company. It uses NLP to answer user queries in a conversational manner.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: rasa,
    source_code_link: "https://github.com/SourabhNishal/Rasa-chatbot",
  },
  {
    name: "Sales Analytics",
    description:
      "Sales data analysis involves examining transaction records to identify trends, patterns, and insights related to sales performance, customer behavior, product popularity, and revenue generation, ultimately guiding business decisions and strategies",
    tags: [
      {
        name: "seaborn",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Plotly",
        color: "pink-text-gradient",
      },
    ],
    image: sales,
    source_code_link: "hhhhh",
  },
  {
    name: "Music-Recommendation-Sysetem",
    description:
      "This project is a Music Recommendation System that suggests songs based on a single song search query provided by the user. The system analyzes the input song and recommends similar songs to enhance the user's music discovery experience,also enhancing the listening experience.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Natural Language Processing",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/SourabhNishal/Music-Reccomendation-System",
  },
];

export { services, technologies, experiences, projects };
