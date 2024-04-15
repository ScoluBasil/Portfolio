import { Container } from "./styles";
import AboutMe from "../../assets/AboutMe.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Basil, With over five years of software development expertise, I excel as a full stack web developer specializing in .NET technologies. My proficiency extends to analysis, design, development, and deployment of web applications, complemented by a deep understanding of version control and relational databases.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            What truly fuels my passion is the opportunity to innovate.My expertised area not just limited to .net techstack, I excel in Test-Driven Development (TDD), leveraging the power of React to craft efficient and effective testing methodologies. I believe in continuous learning and staying abreast of emerging technologies to push the boundaries of what's possible in web development.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginBottom: "2rem" }}>
          <p>
          I hold a Master's Degree in Computer Application from APJ Abdul Kalam Technical University of Kerala, a testament to my commitment to academic excellence and lifelong learning.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Looking ahead, I am excited about the endless possibilities that lie in the ever-evolving landscape of software development. My goal is to continue pushing the boundaries of innovation, collaborating with like-minded professionals to create transformative solutions that make a tangible difference in the world.
          </p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={AboutMe} alt="Basil Jose" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
