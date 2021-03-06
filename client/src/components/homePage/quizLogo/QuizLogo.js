import React from "react";
import { Link } from "react-router-dom";
import Lottie from 'react-lottie'
import animationData from './quiz.json';


const QuizLogo = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }

  };

  return (

    <Link to="/quiz">
      <div className="quiz">
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
      </div>
    </Link>


  );
};

export default QuizLogo;

