import Image from 'next/image';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Zionnaire Concepts</h1>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>
            Welcome to Zionnaire Concepts! We are a professional web development company specializing in creating modern and responsive websites.
          </p>
          <p>
            Our owner, John Doe, is a skilled web developer with 2 years of experience. He is proficient in Node.js, Next.js, React.js, JavaScript, MongoDB, Express, HTML, and CSS frameworks like Bootstrap and Tailwind CSS.
          </p>
          <p>
            With our expertise, we provide high-quality web solutions tailored to meet your business needs.
          </p>
        </section>
        <section>
          <h2>Professional Stacks</h2>
          <ul>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>HTML</li>
            <li>CSS (Bootstrap, Tailwind CSS)</li>
          </ul>
        </section>
        <section>
          <h2>Owner</h2>
          <p>
            Zion is a professional web developer with 2 years of experience. He is passionate about creating beautiful and functional websites. With his expertise in web development technologies, he delivers exceptional results to clients.
          </p>
        </section>
        <section>
          <h2>Image Section</h2>
          <div className={styles.imageContainer}>
            <Image src="/images/profile-image.jpg" alt="Profile Image" width={400} height={300} />
          </div>
        </section>
      </main>
      <footer>
        <a href="/contact" className={styles.ctaButton}>Contact Us</a>
      </footer>
    </div>
  );
};

export default Profile;
