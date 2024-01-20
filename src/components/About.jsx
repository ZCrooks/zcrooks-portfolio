import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Story</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Hello World! I'm Zach, a Toronto-based Front End developer with an eye for crafting visually appealing and intuitive web applications. I successfully completed Juno College of Technology (formerly HackerYou)'s web development bootcamp from November 2022 to July 2023, enhancing my skills and knowledge in the field. <br></br>
        <br></br>
        Having spent over 7 years in various administrative roles within the public sector, I bring a unique blend of experience and strong interpersonal skills to the world of web development. My background includes project management and supervision, where I've excelled in leading onboarding and training programs for new employees. This has not only polished my ability to thrive under pressure, but also instilled a knack for effective collaboration within small teams. <br></br>
        <br></br>
        Fueled by a passion for continuous education and an inquisitive nature, I relish opportunities to tackle complex challenges, troubleshoot bugs, and construct services that offer real-world utility to consumers and customers. I'm always eager for new opportunities to contribute my skills and creativity to innovative projects in the ever-evolving realm of web development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
