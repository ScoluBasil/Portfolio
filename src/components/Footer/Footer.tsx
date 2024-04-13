import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import GmailLogo from '../../assets/Gmail_Logo.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/basiljose95" className='logo'>
          <span>{"<Basil "}</span>
          <span>{" Jose/>"}</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/basiljose95"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/ScoluBasil"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918893320889&text=Hello+Basil 👋"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="mailto:basiljose12345@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GmailLogo} alt="G-mail" />
        </a>
      </div>
    </Container>
  )
}
