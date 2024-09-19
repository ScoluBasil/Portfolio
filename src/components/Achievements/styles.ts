import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .achievements{
  margin: 0,
  height: '160px',
  color: '#1677ff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  },
  .Sliderdiv{
    width: 600px,  
    height: 400px, 
    textAlign: center,
    position: relative,
    margin: 0 auto, // Center the slider
    overflow: 'hidden', // Prevent overflow
  }
    .iframe-container {
  position: relative;
  width: 100%; /* or a fixed width, e.g., 800px */
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
`