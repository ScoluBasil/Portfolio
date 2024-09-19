import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import AboutMe from "../../assets/AppsTeamStarPerformer2020.jpeg";
import Carousel from "antd/es/carousel";

const images = [
  {
    url: '',
    src: AboutMe,
    description: 'Got the Star Performer award in 2020',
    type: 'image',
  },
  {
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-885a84d6-1543-464e-a5a0-3eb551046983.pdf',
    description: 'Udemy course completion',
    type: 'external',
  },
  {
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e69ca4ed-8941-49cd-8358-c15fe8a3e446.pdf',
    description: 'Udemy course completion',
    type: 'external',
  }
];
export function Achievements() {
  return (
    <Container id="achievements">
      <h2>My Achievements and Certifications</h2>

    <ScrollAnimation animateIn="flipInX">
    <Carousel arrows infinite={false}>
      {images.map((image, index) => (
       
        <div>
          <div id="mydiv" style={{
           height: '600px',
           position: 'relative',
           display: 'flex',
           alignItems:'center',
           justifyContent:'center',
           overflow:'hidden'   
          }}>
          { image.type==="image"&&(
               <img 
               src={image.src} 
               alt={`Slide ${index}`} 
               style={{ 
                 maxWidth: '100%', 
                 maxHeight: '100%', 
                 objectFit: 'scale-down' 
               }} 
             />  
          )}
         { image.type==="external"&&(
          <div className="iframe-container">
             <iframe
                src={image.url}
                title={`PDF Slide ${index}`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
          </div>
         )}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
          }}>
            {image.description}
          </div>
          </div>
          </div>
      ))}
    </Carousel>
    </ScrollAnimation>

    </Container>
  );
}