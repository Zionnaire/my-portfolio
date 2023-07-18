"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import { data } from '../content/data';
import Modal from '../modal/Modal';
import pageStyles from '../page.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../globals.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleImageClick = (imageData) => {
    setSelectedContent(imageData);
    setShowModal(true);
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className='work'>My Works</h1>
        {showModal && (
          <Modal setShowModal={setShowModal} setSelectedContent={setSelectedContent} content={selectedContent} data={data} />
        )}
        <div className={styles.container}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={3}
            className="mySwiper"
          >
            {data.map((imageData, index) => (
              <SwiperSlide key={index}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={imageData.url}
                    alt={imageData.name}
                    onClick={() => handleImageClick(imageData)}
                  />
                  <div className={styles.imageDescription}>
                    <p className={styles.imageDescriptionText}>{imageData.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}


const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
    gap: '20px', 
    marginTop: '20px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    maxWidth: '60vw',
  },
  imageContainer: {
    display: 'flex',
    width: '300px',
    height: '300px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    aspectRatio: '1 / 1', // Ensure equal width and height
    cursor: 'pointer',
  },
  imageDescription: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '50px',
    backgroundColor: '#000000',
    opacity: '0.5',
  },
  imageDescriptionText: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};


export default Projects;