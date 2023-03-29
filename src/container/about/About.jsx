import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './about.scss';

import { aboutData } from '../../constants/data';


const abouts = aboutData;

const About = () => {
  return (
    <>
    <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description.length>15 && about.description.slice(0,50)}...<a href='#'>read more</a></p>
        </motion.div>
      ))}
    </div>
  </>
);
};

export default AppWrap(
MotionWrap(About, 'app__about'),
'about',
'app__whitebg',
);