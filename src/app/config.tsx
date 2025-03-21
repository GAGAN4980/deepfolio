import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiAngular, SiGodotengine } from "react-icons/si";
import {
    RiNextjsFill,
    RiTailwindCssFill,
    RiWordpressFill,
} from "react-icons/ri";
import {
    SiCsharp,
    SiDotnet,
    SiMicrosoft,
    SiBlazor,
    SiMicrosoftsqlserver,
    SiPostgresql,
    SiMicrosoftazure,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiGraphql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiOracle,
    SiDocker,
    SiJira,
    SiSwagger,
    SiGit,
    SiBootstrap,
    SiRabbitmq,
    SiJenkins,
    SiJetbrains,
    SiXaml,
    SiTestinglibrary,
} from "react-icons/si";
import { SiReact, SiTypescript, SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiRedis } from "react-icons/di";


export const siteConfig = {
    name: "Gagandeep Singh",
    title: "Gagandeep Singh | Senior Software Engineer",
    email: "gagandeep4980@gmail.com",
    alias: "Gagandeep",
    description:
        "Senior Software Engineer with over 6 years of experience in full-stack development, specializing in scalable .NET applications, cloud solutions, and clean, maintainable code across domains like Banking, Healthcare, and Aviation.",
    keywords:
        "Gagandeep, full-stack developer, software engineer, .NET, React, Azure, Microservices, cloud development, SQL Server, PostgreSQL",
    url: "https://gagan.dev",
    taglines: [
        "🚀 Building Scalable Tech, One Line at a Time: From APIs to Frontends with Precision.",
        "💻 Engineering Modern Software Solutions Across Cloud, Web, and Enterprise Stacks.",
        "🌐 Bridging Performance and Functionality with Clean Code and Cloud-First Mindset.",
    ],
    titles: ["Senior Software Engineer", ".NET Full-Stack Developer", "Cloud Application Developer", "Wordpress Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/gagan4980",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/gagandeep4980/",
        },
        {
            icon: <IoIosMail />,
            url: "mailto:gagandeep4980@gmail.com",
        },
    ],
    sections: {
        tableOfContents: [
            {
                id: "about-me",
                label: "ABOUT ME",
            },
            {
                id: "experiences",
                label: "EXPERIENCES",
            },
            {
                id: "projects",
                label: "PROJECTS",
            },
            {
                id: "technologies",
                label: "TECHNOLOGIES",
            },
            {
                id: "contact",
                label: "CONTACT",
            },
        ],
        aboutMe: `
            <p>
                Hi! I'm Gagandeep, a <strong>Senior Software Engineer</strong> with 6+ years of experience in developing scalable web and enterprise applications using <strong>.NET, React, and Azure</strong>. I’ve worked across Banking, Healthcare, and Aviation sectors to build cloud-native microservices and modern front-ends.
            </p>
            <p>
                I enjoy turning complex requirements into efficient code, mentoring teams, and delivering high-quality solutions. Let’s connect if you're working on an exciting problem in <strong>cloud, web, or enterprise development</strong>!
            </p>
        `,
        experiences: [
            {
                company: "BuiltForImpact",
                position: "Technical Team Lead",
                duration: "Present",
                description:
                    "Leading development of scalable web applications using .NET, React, and Azure. Overseeing CI/CD, code quality, and mentoring junior developers. Collaborating across teams to optimize performance and architecture.",
            },
            {
                company: "Mobile Aspects",
                position: "Web Application Consultant (Remote)",
                duration: "Jan 2023 – Present",
                description:
                    "Consulting on healthcare web applications. Improving performance, UI/UX, and application security using .NET and Azure best practices.",
            },
            {
                company: "CBA Services Pvt. Ltd.",
                position: "Senior Software Engineer",
                duration: "Jul 2021 – Sep 2023",
                description:
                    "Built content delivery platforms using .NET 6, SQL Server, React. Focused on automated testing, CI/CD, and performance optimization in Agile setup.",
            },
            {
                company: "Société Générale GSC Pvt. Ltd.",
                position: "Specialist Software Engineer – Full Stack",
                duration: "Sep 2020 – Jul 2021",
                description:
                    "Modernized legacy APIs into .NET Core microservices. Built BDD test scenarios with SpecFlow and ensured high-quality releases via TeamCity.",
            },
            {
                company: "Boeing India Pvt. Ltd.",
                position: "Programmer Analyst",
                duration: "Apr 2019 – Sep 2020",
                description:
                    "Built reusable Angular 6 UI components. Migrated applications to .NET Core 3.1. Worked with PCF, Docker, and Azure DevOps for cloud-native delivery.",
            },
            {
                company: "Mobile Aspects India Pvt. Ltd.",
                position: "Associate Software Engineer",
                duration: "Feb 2017 – Apr 2019",
                description:
                    "Developed responsive UIs and optimized existing .NET applications. Part of Agile teams improving healthcare solutions.",
            },
        ],
        projects: [
            {
                title: "Gagandeep Singh | Portfolio Website",
                description:
                    "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with Next.js, Tailwind CSS and React.js. I used the following technologies to build it:",
                logo: "/logox.png",
                repoLink: "https://github.com/auroradream04/aurora-portfolio",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js",
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS",
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript",
                    },
                ],
                link: "https://alvinchang.dev",
            },
            {
                title: "DigiDocs",
                description:
                    "Banking document automation system. Built with .NET 6, React 18, Redux, XUnit, and Oracle DB. Integrated CI/CD using Jenkins.",
                logo: "",
                repoLink: "",
                technologies: [
                    { icon: <SiReact />, name: "React" },
                    { icon: <SiTypescript />, name: "TypeScript" },
                    { icon: <SiCsharp />, name: ".NET 6 / C#" },
                    { icon: <SiDocker />, name: "Docker" },
                    { icon: <SiOracle />, name: "Oracle" },
                ],
                link: "",
            },
            {
                title: "Instant Payments",
                description:
                    "Real-time banking transaction platform. Used .NET Core, PostgreSQL, Microservices, and BDD testing via SpecFlow.",
                logo: "",
                repoLink: "",
                technologies: [
                    { icon: <SiDotnet />, name: ".NET Core" },
                    { icon: <SiPostgresql />, name: "PostgreSQL" },
                    { icon: <SiDocker />, name: "Docker" },
                ],
                link: "",
            },
            {
                title: "Remarketing Tool",
                description:
                    "Aircraft remarketing web app for Boeing. Developed with .NET Core, Angular 6, PCF, Azure DevOps, Oracle DB.",
                logo: "",
                repoLink: "",
                technologies: [
                    { icon: <SiAngular />, name: "Angular 6" },
                    { icon: <SiOracle />, name: "Oracle 12c" },
                ],
                link: "",
            },
            {
                title: "iRISynergyWeb",
                description:
                    "Healthcare inventory tracking app using .NET Web API and Dapper. Focused on UI improvements and backend performance.",
                logo: "",
                repoLink: "",
                technologies: [
                    { icon: <SiDotnet />, name: ".NET" },
                    { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
                ],
                link: "",
            },
            {
                title: "Inteli-Monitor",
                description:
                    "Legacy .NET MVC app with Bootstrap and JQuery. Focused on UI responsiveness and data visibility for healthcare staff.",
                logo: "",
                repoLink: "",
                technologies: [
                    { icon: <SiDotnet />, name: "ASP.NET MVC" },
                    { icon: <SiMicrosoftsqlserver />, name: "SQL Server" },
                ],
                link: "",
            },
        ],
        technologies: {
            main: [
                {
                    name: "C#",
                    icon: <SiCsharp className="text-[#239120]" />,
                    description: "Object-oriented programming language used for building scalable applications in .NET",
                },
                {
                    name: ".NET 6 / Core",
                    icon: <SiDotnet className="text-[#512BD4]" />,
                    description: "Framework for scalable backend services",
                },
                {
                    name: ".NET MAUI",
                    icon: <SiMicrosoft className="text-[#512BD4]" />,
                    description: "Cross-platform framework for building native apps with C# and .NET",
                },
                {
                    name: "Blazor",
                    icon: <SiBlazor className="text-[#512BD4]" />,
                    description: "Single-page web app framework using C# and Razor running on WebAssembly or server",
                },
                {
                    name: "SQL Server",
                    icon: <SiMicrosoftsqlserver className="text-[#CC2927]" />,
                    description: "Microsoft relational database system",
                },
                {
                    name: "PostgreSQL",
                    icon: <SiPostgresql className="text-[#336791]" />,
                    description: "Advanced open-source relational database",
                },
                {
                    name: "Azure",
                    icon: <SiMicrosoftazure className="text-[#007FFF]" />,
                    description: "Cloud services platform from Microsoft",
                },
                {
                    name: "React",
                    icon: <SiReact className="text-[#61DAFB]" />,
                    description: "A JavaScript UI library",
                },
                {
                    name: "Next.js",
                    icon: <RiNextjsFill className="text-[#FFF]" />,
                    description: "A React framework",
                },
                {
                    name: "Tailwind CSS",
                    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                    description: "A CSS framework",
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript className="text-[#3178C6]" />,
                    description: "Typed Javascript",
                },
                {
                    name: "WordPress",
                    icon: <RiWordpressFill className="text-[#21759B]" />,
                    description: "A CMS for websites",
                },
                {
                    name: "Express.js",
                    icon: <SiExpress className="text-[#FFF]" />,
                    description: "A Node.js framework",
                },
            ],
            other: [
                {
                    name: "PHP",
                    icon: <SiPhp className="text-[#777BB4]" />,
                },
                {
                    name: "MySQL",
                    icon: <SiMysql className="text-[#4479A1]" />,
                },
                {
                    name: "MongoDB",
                    icon: <SiMongodb className="text-[#47A248]" />,
                },
                {
                    name: "Redis",
                    icon: <DiRedis className="text-[#DC382D]" />,
                },
                {
                    name: "GraphQL",
                    icon: <SiGraphql className="text-[#E10098]" />,
                },
                {
                    name: "RESTful API",
                    icon: <TbApi className="text-[#FF5733]" />,
                },
                {
                    name: "HTML5",
                    icon: <SiHtml5 className="text-[#E34F26]" />,
                },
                {
                    name: "CSS",
                    icon: <SiCss3 className="text-[#1572B6]" />,
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript className="text-[#F7DF1E]" />,
                },
                {
                    name: "Oracle",
                    icon: <SiOracle className="text-[#F80000]" />,
                },
                {
                    name: "Docker",
                    icon: <SiDocker className="text-[#2496ED]" />,
                },
                {
                    name: "JIRA",
                    icon: <SiJira className="text-[#0052CC]" />,
                },
                {
                    name: "Swagger",
                    icon: <SiSwagger className="text-[#85EA2D]" />,
                },
                {
                    name: "Git",
                    icon: <SiGit className="text-[#F05032]" />,
                },
                {
                    name: "Entity Framework",
                    icon: <SiDotnet className="text-[#68217A]" />, // closest match
                },
                {
                    name: "LINQ",
                    icon: <SiDotnet className="text-[#007ACC]" />, // placeholder, no LINQ icon
                },
                {
                    name: "XUnit",
                    icon: <SiXaml className="text-[#99424F]" />, // closest match
                },
                {
                    name: "Dapper",
                    icon: <SiDotnet className="text-[#FFA500]" />, // placeholder
                },
                {
                    name: "Bootstrap",
                    icon: <SiBootstrap className="text-[#7952B3]" />,
                },
                {
                    name: "AJAX",
                    icon: <SiJavascript className="text-[#007FFF]" />, // reused JS icon
                },
                {
                    name: "RabbitMQ",
                    icon: <SiRabbitmq className="text-[#FF6600]" />,
                },
                {
                    name: "Jenkins",
                    icon: <SiJenkins className="text-[#D33833]" />,
                },
                {
                    name: "TeamCity",
                    icon: <SiJetbrains className="text-[#000000]" />,
                },
                {
                    name: "SpecFlow",
                    icon: <SiTestinglibrary className="text-[#2E8555]" />, // closest available
                },
            ]            
        }        
    },
};
