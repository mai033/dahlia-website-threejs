// // import React from 'react';
// import { Link } from 'react-router-dom';

// import { arrow } from '../assets/icons';

// // import arrow from '../assets/icons/arrow.svg';

// const InfoBox = ({ text, link, btnText }) => (
//   <div className="info-box">
//     <p className="font-medium sm:text-xl text-center">{text}</p>
//     <Link to={link} className="neo-briutalism-white neo-btn">
//       {btnText}
//       <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
//     </Link>
//   </div>
// );

// const renderContent = {
//   1: (
//     <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
//       Hi, I'm <span className="font-semibold">Dahlia</span> 👋
//       <br />A Software Engineer 👩🏻‍💻
//     </h1>
//   ),
//   2: (
//     <InfoBox
//       text="I'm proficient in JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, and SQL."
//       link="/about"
//       btnText="Learn More"
//     />
//   ),

//   3: (
//     <InfoBox
//       text="I am proud to be a co-creator of Kube VX, an observability platform integrated with AI for in-depth analysis of Kubernetes clusters."
//       link="/projects"
//       btnText="Visit my portfolio"
//     />
//   ),
//   4: (
//     <InfoBox
//       text="Need a project done or looking for a dev? I'm just a few keystrokes away."
//       link="/contact"
//       btnText="Let's talk"
//     />
//   ),
// };

// function HomeInfo({ currentStage }) {
//   return renderContent[currentStage] || null;
// }

// export default HomeInfo;

import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Dahlia</span>
        👋
        <br />A Full-Stack Software Engineer 👩🏻‍💻
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          I'm proficient in JavaScript, TypeScript, <br /> React, Next.js,
          Node.js, Express.js, MongoDB, and SQL.
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          I am proud to be a co-creator of Kube VX, 
          <br/>an observability platform integrated with AI 
          for in-depth analysis of Kubernetes clusters.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
