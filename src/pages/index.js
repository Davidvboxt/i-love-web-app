import * as React from "react";
import '@fontsource/bruno-ace-sc';

import photo from '../images/scrum.jpg'; // Adjust the path to where you saved the image


const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: '"Nova square", Arial, sans-serif',
  },
  eventItem: {
    marginBottom: '30px',
    borderBottom: '1px solid #eee',
    paddingBottom: '20px',
  },
  eventDate: {
    color: '#0056b3',
    fontSize: '1.5em',
    marginTop: '0px',
    cursor: 'pointer',
  },
  header1: {
    fontFamily: '"Bruno Ace SC", Arial, sans-serif',
  },
  header2: {
    color: '#0056b3',
    fontSize: '1.5em',
    marginTop: '0px',
    marginBottom: '10px',
    fontFamily: '"Bruno Ace SC", Arial, sans-serif',
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    width: '48%', // Approximately half the container width
    height: '200px', // Adjust as needed
    backgroundColor: '#e0e0e0', // Gray color for the skeleton photo
    marginLeft: '10px', // Adjusted for right alignment
  },
  skeleton: {
    width: '48%', // Approximately half the container width
    height: '200px', // Adjust as needed
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite',
  },
  textContent: {
    width: '48%', // Approximately half the container width
  },
  spanStyle: {
    display: 'block',
    marginBottom: '10px',
    color: '#ff8c00',
  },
  naam: {
    display: 'block',
    marginBottom: '10px',
    color: '#666',
  },
  photo: {
    width: '48%', // Approximately half the container width
    height: '200px', // Adjust as needed
    background: `url(${photo}) no-repeat center center`, // Use the imported image here
    backgroundSize: 'cover', // This will cover the entire area of the div
    marginLeft: '10px', // Adjusted for right alignment
  },
  skeletonDate: {
    height: '30px',
    width: '19%', // Approximately half the container width
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite',
  },
  skeletonName: {
    height: '30px',
    width: '42%', // Approximately half the container width
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite',
  },
  skeletonParagraph: {
    height: '30px',
    width: '66%', // Approximately half the container width
    background: '#eee',
    background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    margin: '5px 0',
    padding: '10px',
    borderLeft: '5px solid #0056b3',
  },
  
};

// Generate 10 events with skeleton content
const events = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  title: `Event ${index + 1}`,
}));

const IndexPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header1}>We love web overzichtspagina</h1>

      <div style={styles.eventItem}>
        <span style={styles.spanStyle}>
          Woensdag 29 november
        </span>
        <div style={styles.contentRow}>
          <div style={styles.textContent}>
            <h2 style={styles.header2}>Scrum crash course</h2>
            <span style={styles.naam}>Lars van Funda</span>
            <p style={styles.paragraph}>
              Lars gaf vandaag een talk in les van de eerstejaars over hoe ze bij Funda de sprint review aan pakken en welke scrum fundamentals zij hiervoor gebruiken.
            </p>
          </div>
          <div style={styles.photo}></div>
        </div>
        <h4>Hun belangrijke fundamentals:</h4>
        <ul style={styles.list}>
          <li style={styles.listItem}>Sprint reviews</li>
          <li style={styles.listItem}>Sprint retrospective</li>
          <li style={styles.listItem}>Backlog refilement </li>
          <li style={styles.listItem}>Daily scrum</li>
          <li style={styles.listItem}>Sprint planning</li>
          <li style={styles.listItem}>Backlog refinement</li>
        </ul>
        <h4>Waar bestaat hun scrum team allemaal uit?</h4>
        <ul style={styles.list}>
          <li style={styles.listItem}>Developers</li>
          <li style={styles.listItem}>Scrum master</li>
          <li style={styles.listItem}>Product owner   </li>
        </ul>
      </div>

      {events.map(event => (
        <div key={event.id} style={styles.eventItem}>
          <span style={styles.spanStyle}>
            Date
          </span>
          <div style={styles.contentRow}>
            <div style={styles.textContent}>
              <h2 style={styles.header2}>{event.title}</h2>
              <p style={styles.skeletonName}></p>
              <p style={styles.skeletonParagraph}>
              </p>
            </div>
            <div style={styles.skeleton}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Events Overview</title>
