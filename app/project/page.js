"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import { data } from '../content/data';
import Modal from '../modal/Modal';
import MySideBar from '../components/myside';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

export default function MyProjects() {
    const [showModal, setShowModal] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
  
    return (
      <>
      <MySideBar />
        {showModal && <Modal setShowModal={setShowModal} setSelectedContent={setSelectedContent} content={selectedContent} data={data} />}
        <div style={styles.main}>
          <div style={styles.container}>
            {data.map((image_data) => { // Removed the "index" parameter since we won't use it as the key.
              return (
                <div key={image_data.id} style={styles.imageContainer} // Assuming "id" is the unique identifier.
                  onClick={() => {
                    setShowModal(true);
                    setSelectedContent(image_data);
                  }}
                >
                  <img style={styles.image} src={image_data.url} />
                  <div style={styles.imageDescription}>
                    <p style={styles.imageDescriptionText}>{image_data.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#f0f0f0',
      flexDirection: "column"
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      maxWidth: "60vw"
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      cursor: 'pointer',
    },
    image: {
      width: '300px',
      height: '300px',
      objectFit: 'cover',
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
  }