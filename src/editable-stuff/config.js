// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Pratik",
  middleName: "",
  lastName: "Bhavsar",
  message: " Senior Software Developer | Photographer | Superdaddy",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/pratik-bhavsar",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/pratik.bhavsar/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/iampratikbhavsar/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/pratik-bhavsar-7b81a625/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/pratikbhavsar/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://avatars.githubusercontent.com/u/2240419?v=4",
  imageSize: 200,
  message:
    "My name is Pratik Bhavsar, I am a software developer since 13 years. I thrive in environments that present stimulating challenges, as these allow me to continuously enhance my skills and expand my knowledge base. I am eager to embrace new challenges that will push me to my limits and propel me to new heights of professional excellence. I am a creative thinker who is always looking for new and innovative ways to solve problems.",
  resume: "#",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "pratik-bhavsar", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    {
      img: require("../editable-stuff/pratikbhavsar.jpeg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/pratikbhavsar.jpeg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "Python", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 99 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "pratik.bhavsar@me.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [

  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
