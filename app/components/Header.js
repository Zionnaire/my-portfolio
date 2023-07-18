import React from 'react';

const Header = (props) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{props.title}</h1>
      <h2 style={styles.subtitle}>{props.subtitle}</h2>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#9b3a1d',
    marginBottom:"20px"
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '2px 2px 2px #000000',
    textAlign:"left"
  },
  subtitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadow: '2px 2px 2px #000000',
    textAlign:"left",
    padding: "20px 0"
  },
}

export default Header;