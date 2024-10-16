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
  Emr,
  Myblocks,
  fifa,
  sales,
  fitness,
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
    title: "Assosiate Data Scientist",
    company_name: "Emergio Games",
    icon: Emr,
    iconBg: "#383E56",
    date: "August 2024 - Present",
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
    date: "Jan 2024 - Aug 2024",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fifa Players DataAnalysis",
    description:
      "A data analysis of FIFA players typically involves exploring attributes such as skills, positions, physical metrics, and market value to gain insights into player performance, potential, and trends in the football industry",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "pink-text-gradient",
      },
    ],
    image: fifa,
    source_code_link: "https://github.com/Srivin002/Exploratory-Data-Analysis/blob/main/football_EDA%20(2).ipynb",
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
    source_code_link: "https://github.com/Srivin002/Exploratory-Data-Analysis/blob/main/EDA_Sales.ipynb",
  },
  {
    name: "Fitness Data Evaluation",
    description:
      "The Fitness Data Insight Extraction project aims to analyze and interpret various fitness metrics collected from users to uncover trends, patterns, and correlations that can inform better health and fitness strategies. By leveraging data from wearable devices, fitness apps, and user logs, the project will focus on key metrics such as workout duration,frequency,intensity and user engagement",
    tags: [
      {
        name: "kaggle",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "EDA",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/Srivin002/Exploratory-Data-Analysis/blob/main/FitnessTracker_EDA.ipynb",
  },
];

export { services, technologies, experiences, testimonials, projects };
