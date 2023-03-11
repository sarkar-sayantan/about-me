import { ThemeProvider, TaskBar, Frame, Button } from '@react95/core';
import { User } from '@react95/icons';
import '@react95/icons/icons.css';
import { useEffect, useState } from 'react';
import './App.css';

export default function App () {
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false);
  }

  const openAboutMe = () => {
    setShowModal(true);
  }

  useEffect (() => {
    document.title = "My Portfolio";
  })
  return (
  <div className="container">
    <ThemeProvider>
        <div className='about-me' onClick={ openAboutMe }>
          <div style={{paddingLeft:'4px'}}><User variant='32x32_4'/></div>
          <div className='about-me-text'>About</div>
        </div>
        {showModal &&  
        <Frame w={400} h={320} padding={4} className="frame">
          <Button onClick={handleCloseModal}>X</Button>
          <Frame h="90%" boxShadow="in" bg="white">
            <div className='content'>
                <div className='section'>
                  Hello! I am Sayantan Sarkar.
                </div>
                <div className='section'>
                  Currently, I am working as SDE 2 at Lexmark(India) International Pvt. Ltd.
                  Before that I worked at Capgemini (India) for 7 months long.
                </div>
                <div className='section'>
                  I have expertise to build full stack software using MEAN, MERN Stack. 
                  Apart from that I love to explore latest technology related gadget,electronics.
                </div>
                <div className='section'>
                  In my free time, I love to take picture of nature and also write blogs.
                </div>
                <div className='section'>
                  Check out my <a href='https://medium.com/@sayantan-sarkar' target="_blank" rel='noreferrer'>medium blogs</a>
                </div>
                <div className='section'>
                  Check out my <a href="https://www.instagram.com/syntn_srkr" target="_blank" rel='noreferrer'>instagram</a>
                </div>
                <div className='section'>
                  Check out my <a href="https://www.twitter.com/SyantanSarkar" target="_blank" rel='noreferrer'>twitter</a>
                </div>
            </div>
          </Frame>
        </Frame>
        }
        <TaskBar />
    </ThemeProvider>
  </div>
  )
}