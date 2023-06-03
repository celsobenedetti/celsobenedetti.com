import {
  FaAws,
  FaDocker,
  FaGitlab,
  FaJava,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa";
import { type IconType } from "react-icons/lib";
import {
  SiAngular,
  SiAnsible,
  SiC,
  SiCss3,
  SiElastic,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiSpring,
  SiTypescript,
  SiVault,
  SiVuedotjs,
} from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { TbBinaryTree, TbLambda, TbMathIntegralX } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { LuNetwork } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";

export interface Experience {
  icon?: IconType;
  img: string;
  title: string;
  subtitle: string;
  technologiesIcons?: IconType[];
  period: [string, string];
  bullets: string[];
}

export const workExperiences: Experience[] = [
  {
    img: "https://companieslogo.com/img/orig/DELL-f7f7f0be.png?t=1634108492",
    title: "Dell Technologies",
    subtitle: "Software Engineer 2",
    technologiesIcons: [
      SiAngular,
      SiSpring,
      SiNodedotjs,
      FaJava,
      SiJavascript,
      SiTypescript,
      SiPython,
      FaDocker,
      SiVault,
      SiAnsible,
      FaGitlab,
      SiMicrosoftsqlserver,
    ],
    period: ["2022/11", "present"],
    bullets: [
      "I work at a global team, mainly developing and maintaining microservices in Spring, with overlapping responsibilities in web development, cloud and DevOps.",
      "I'm actively driving forth automation initiatives across multiple products, leveraging tools like Ansible, Docker and GitLab CI.",
      "Constantly seeking opportunities to learn and grow my skills as a team-member and engineer.",
    ],
  },
  {
    img: "https://jera.com.br/images/logo-facebook.png",
    title: "Jera Apps",
    subtitle: "Web Developer",
    technologiesIcons: [
      SiVuedotjs,
      SiRubyonrails,
      SiNodedotjs,
      SiRuby,
      SiJavascript,
      SiTypescript,
      FaDocker,
      SiJest,
      SiMysql,
      FaGitlab,
    ],
    period: ["2022/6", "2022/10"],
    bullets: [
      "Worked developing APIs for mobile apps using Rails and Node.js, as well as web application using Vue.js",
      "Contributed to improving test coverage and reliability of backend applications",
      "Agile team-work applying Scrum, pair programming and code reviews",
    ],
  },

  {
    img: "/images/search_on_math.png",
    title: "SearchOnMath",
    subtitle: "Intern Software Developer",
    technologiesIcons: [FaJava, SiElastic, SiMysql, SiGit, FaLinux],
    period: ["2019/2", "2021/6"],
    bullets: [
      "Worked on a search engine application using Java EE with Hibernate",
      "Implemented a web crawler to index scientific papers and mathematical content into MySQL",
      "Studyied the effects of stemming algorithms in Elasticsearch, and the basics of Git and Linux",
    ],
  },
];

export const educationExperiences: Experience[] = [
  {
    icon: FaUniversity,
    img: "https://www.unifal-mg.edu.br/portal/wp-content/uploads/sites/52/2020/10/unifal-mg_logo_borda_02.png",
    title: "Universidade Federal de Alfenas",
    subtitle: "Bachelor's in Computer Science",
    technologiesIcons: [
      SiC,
      GiProcessor,
      TbBinaryTree,
      TbMathIntegralX,
      TbLambda,
      SlGraph,
      LuNetwork,
      ImDatabase,
      SiElastic,
      FaLinux,
    ],
    period: ["2016", "2023"],
    bullets: [
      "Learned all about low level programming, computer architecture, operating systems, compilers, data structures and algorithms, programming paradigms, algorithm design and analysis, databases, networking.",
      "Researched the effects of stemming algorithms on search engines like Elasticsearch as my term paper",
    ],
  },

  {
    img: "https://uploads-ssl.webflow.com/62235d098ddf9185c2d74422/622c0e0746587f694e5361b5_Driven_pink-p-500.png",
    title: "Driven Education",
    subtitle: "Full-Stack Web Development Bootcamp",
    technologiesIcons: [
      SiHtml5,
      SiCss3,
      SiJavascript,
      SiTypescript,
      SiReact,
      FaNodeJs,
      FaDocker,
      SiPrisma,
      SiMongodb,
      SiPostgresql,
      SiJest,
      FaAws,
    ],
    period: ["2022/1", "2022/10"],
    bullets: [
      "+1200 hours of project-focused full-stack web development, with over 25 practical projects",
      "Learned web development from the ground up, from HTML, CSS and JS to Docker and AWS",
      "Development of behavioral skills and professional skills, such as teamwork, communication, and problem solving",
    ],
  },
];
