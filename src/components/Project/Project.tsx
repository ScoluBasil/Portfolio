import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.intelliflo.com/our-solutions/intelliflo-office/planning-capabilities/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Intelliflo planning</h3>
              <p>
              Intelliflo planning is a cash modeling web application that visually engages with clients ,gives them confidence in their financial life choices, and experiences the benefits for their business.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ASP.NET Core Microservices</li>
                <li>MongoDB</li>
                <li>GraphQl</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.intelliflo.com/our-solutions/intelliflo-office/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Intelligent Office</h3>
              <p>
              Intelligent Office is a business management solution that helps advisers service existing clients, prospect for new ones, ensure actions and recommendations are in line with various financial regulations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ASP.NET Core Microservices</li>
                <li>ASP.NET MVC</li>
                <li>SQL Server</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.hbkworld.com/web/fusion-advantage/global/en" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>HBK Advantage</h3>
              <p>
              HBK Advantage is a desktop application used for data acquisition and processing for mechanical, electrical, thermal, and acoustics domains. Helps to record live data from channels and signals later to have them reproducible and available for auditing purposes.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ASP.NET Core</li>
                <li>React</li>
                <li>Jest</li>
                <li>GraphQl</li>
                <li>Azure</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://lucentsurgical.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Surgical Device Management System</h3>
              <p>
              The goal of this Web, iOS, and Android tablet app is to allow the surgical service providers track, and manage their surgical pumps. iOS and Android tablets app allow the physicians and nurses to assign and track the pumps assigned to their patients.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ASP.NET MVC</li>
                <li>Microsoft SQL Server</li>
                <li>jQuery</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://vayangroup.com/technology/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Inspection App</h3>
              <p>
              The scope of this Android application is for Inspectors to inspect parts of a machine and mark acceptance or rejection based on a set of steps they need to follow.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ASP.NET API</li>
                <li>Microsoft SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       
       

      </div>
    </Container>
  );
}