// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Projects from './components/Project';
import Skills from './components/Skills';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
const skills = [
  {
    name: "HTML, CSS, BootStrap",
    level: "Advance",
    image: "N/A"
  },
  {
    name: "JavaScript",
    level: "Advance",
    image: "N/A"
  },
  {
    name: "PHP, Laravel",
    level: "Advance",
    image: "N/A"
  },
  {
    name: "Python, Flask",
    level: "Advance",
    image: "N/A"
  },
  {
    name: "Kotlin, Java",
    level: "Advance",
    image: "N/A"
  },
  {
    name: "React.JS, React Native, Node.JS",
    level: "Advance",
    image: "N/A"
  },
  {
    name: "SQL, MySQl, MongoDB",
    level: "Advance",
    image: "N/A"
  },
]

const projects = [
  {
    desc: "A stock media website",
    link: "http://stock.coolwii.com/"
  }
]

function App() {
  useEffect(() => {
    AOS.init({duration: 1000});
  },[])
  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 data-aos="fade-in">Hello, My name is Irshaduddin Chowdhury.</h1>
        <h2>I am a <Typewriter
        options={{
          strings: ["Javascript", "PHP", "Python", "Java"],
          autoStart: true,
          loop:true
        }}
          onInit={(typewriter) => {
            typewriter.typeString()
            .callFunction(() => {
              // console.log("String is typed");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              // console.log("All strings are deleted")
            })
            .start();
          }}
        /> developer</h2>
      </header>
      <div data-aos="zoom-in" className='about'>
        <h2>A little about me...</h2>
        <hr style={{ borderColor: "#3026a9" }}/>
        <p>
        I am a young engineer and designer who wants to learn as many things as possible and give the best service in his power. I am an enthusiastic developer who is well versed with frontend and backend technologies. My aim is to give the best in my power and to expand my domain of skills every single day.
        Everyday I learn something new and start applying it the very next moment. My beliefs are my source of power and firm determination is what I believe to be one of my positive points.
        </p>
      </div>
      <div
       data-aos="fade-right"
       className='skills'>
        <h1>Skills</h1>
        {
          skills?.length > 0 ?
          (
            <div className='row'>
              {
                skills.map((skill) => (
                  <Skills skill={skill} />
                ))
              }
            </div>
          ) :
          (
            <div>
              <p>
                I have no skills!
              </p>
            </div>
          )
        }
      </div>
      <div data-aos="fade-right" className='projects'>
        <h1>My projects...</h1>
        <div className='row'>
          {
            projects.map((project) => (
              <Projects project={project} />
            ))
          }
        </div>
      </div>
      <div data-aos="zoom-in" className='pros'>
        <h1>What will you get if you hire me?</h1>
        <div>
          <p>
            You will get an enthusisastic developer who is well equiped with good technical skills.
            A frontend developer for your websites and mobile apps who can build fantastic static websites that yo can use for branding.
            A backend developer who can build amazing backend services for your websites, webapps, mobile apps.
            A fullstack developer who can make your entire website or mobile app.
          </p>
        </div>
      </div>
    </div>
    <footer data-aos="slide-up">
    <h1>Contact me</h1>
    <div className='footer-row'>
    <div className='col'>
      <h2>Irshaduddin Chowdhury</h2>
      <hr />
      <h5>&copy; Copywright</h5>
      <p>
      This portfolio is built and owned by Irshaduddin Chowdhury.
      All images and resources used in the built process are free to use or owned by the owner of the website.
      </p>
    </div>
    <div className='col'>
      <h2>Overview</h2>
      <hr />
      <p>
      Hire me to get a full stack developer with amazing skills in both frontend and backend.
      Passionate and youg developer here who wants to learn and grow.
      </p>
    </div>
    <div className='col'>
      <h2>Contact me</h2>
      <hr />
      <ul>
        <li>8080439867</li>
        <li>8080439867</li>
        <li>kaisarnagpur@gmail.com</li>
        <li>LinkedIn</li>
        <li>Instagram</li>
      </ul>
    </div>
    </div>
  </footer>
  </>
  );
}

export default App;
