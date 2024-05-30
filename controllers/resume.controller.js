const resume = async (req, res) => {
  return res.status(200).json({
    name: "Renjie Zhou",
    location: "Lawrenceville, NJ",
    email: "rzhou10@gmail.com",
    education: {
      university: "Stevens Institute of Technology",
      degree: "Bachelor of Engineering",
      major: "Computer Engineering",
      graduationYear: "2019"
    },
    links: ["https://www.linkedin.com/in/rzhou10", "https://github.com/rzhou10", "https://rzhou10.github.io"],
    skills: {
      languages: ["C#", "CSS", "HTML", "JavaScript", "Python", "SQL"],
      frameworks: ["ASP.NET", "Bootstrap", "Express.js", "Node.js", "React.js", "Vue.js"],
      otherTools: ["Cypress", "Git", "GitHub", "Google Cloud Function (GCP)", "Jest", "JSON", "Jira", "MongoDB", "MySQL", "VSCode"]
    },
    workExperience: [
      {
        name: "Shoppable",
        title: "Software Engineer",
        responsibilities: [
          "Revamped dashboards using React.js/CSS/Node.js/MySQL, streamlining data widgets by approximately 10% to enhance clarity and reduce visual clutter.",
          "Integrated unit testing such as Cypress and Mocha to reduce dependency on manual testing, resulting in amore well tested code base.",
          "Redesigned the Ad Experience to use Handlebars/CSS to reduce load times by 90% and to integrate the DTC checkout experience",
          "Developed a Rest API utilizing Node.js filling an unmet need for programmable access to checkout and enhancing flexibility in integration with Shoppable.",
          "Enhanced all React.js projects to dynamically manage various localizations, facilitating expansion into non-English markets"
        ],
        years: "2022-2023"
      },
      {
        name: "Shoppable",
        title: "Junior Software Engineer",
        responsibilities: [
          "Created builders for DTC and InstantShop with React.js/CSS/Node.js/MongoDB, resulting in users being able to save their layout customizations for both products.",
          "Created an interface in React.js/CSS/Node.js/MongoDB for end users to customize details about specific products.",
          "Enhanced the code base for DTC to adhere to best React.js practices, reducing the code base by approximately 15% and enhancing performance by 20%",
          "Created an admin interface in React.js/CSS/Node.js/MongoDB for internal users to easily manage information about merchants and customer.",
          "Integrated third party APIs in a Google Cloud function to prevent fraud issues that caused bottlenecks in order processing."
        ],
        years: "2021-2022"
      },
      {
        name: "Sphere Technology Solutions",
        title: "Software Developer",
        responsibilities: [
          "Fixed UI bugs on the Sphereboard web app in Vue.js to fix broken functionality, and changed SQL stored procedure logic to return accurate information..",
          "Added new features in Vue.js/ASP.NET/SQL Server to improve usability and expand information about customer’s servers.",
          "Modified the Connectors and Ingestor executables in C# to collect/process additional information about server files and folders, and to improve stability."
        ],
        years: "2019-2021"
      },
      {
        name: "MedAZ.net",
        title: "Intern",
        responsibilities: [
          "Built Rest APIs in C# to dynamically retrieve and update website data.",
          "Utilized OATH authentication to allow password-less login via external services such as Facebook or Google.",
          "Sped up SQL Server access by replacing the previous Entity Framework with the faster Dapper ORM library."
        ],
        years: "2018-2018"
      },
      {
        name: "MedAZ.net",
        title: "Software Engineer",
        responsibilities: [
          "Made changes to the MaiEDEN web app to improve user accessibility, modernize the UI, and added pages such as a contact form and services page"
        ],
        years: "2017-2017"
      },
    ],
    personalProjects: [
      {
        name: "GEDCOM (genealogical data) parser",
        link: "https://github.com/chloequinto/SSW_555_Project",
        description: "A Python GEDCOM file parser to display information in the terminal about a family tree and catch errors in the file, built as a way to practice iterative development."
      },
      {
        name: "Music Search and Recommendation System",
        link: "https://github.com/rzhou10/Music-Search-and-Recommendation",
        description: "A Node.js web app to query songs based on user terms, and to recommend songs based on genre, ratings, etc as practice to building web applications"
      },
      {
        name: "Boss Fight",
        link: "https://github.com/rzhou10/Boss-Fight",
        description: "A Java command line turn based game to practice building more complex software"
      }
    ]
  })
}

module.exports = {
  resume
}