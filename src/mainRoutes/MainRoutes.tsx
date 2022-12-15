import React from "react";
import { Routes, Route } from "react-router-dom";
import StepEight from "../steps/StepEight";
import StepEighteen from "../steps/StepEighteen";
import StepEleven from "../steps/StepEleven";
import StepFifteen from "../steps/StepFifteen";
import StepFive from "../steps/StepFive";
import StepFour from "../steps/StepFour";
import StepFourteen from "../steps/StepFourteen";
import StepNine from "../steps/StepNine";
import StepNinteen from "../steps/StepNinteen";
import StepOne from "../steps/StepOne";
import StepSeven from "../steps/StepSeven";
import StepSeventeen from "../steps/StepSeventeen";
import StepSix from "../steps/StepSix";
import StepSixteen from "../steps/StepSixteen";
import StepTen from "../steps/StepTen";
import StepThree from "../steps/StepThree";
import StepTwelve from "../steps/StepTwelve";
import StepTwenty from "../steps/StepTwenty";
import StepTwo from "../steps/StepTwo";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="/stepTwo" element={<StepTwo />} />
        <Route path="/stepThree" element={<StepThree />} />
        <Route path="/stepFour" element={<StepFour />} />
        <Route path="/stepFive" element={<StepFive />} />
        <Route path="/stepSix" element={<StepSix />} />
        <Route path="/stepSeven" element={<StepSeven />} />
        <Route path="/stepEight" element={<StepEight />} />
        <Route path="/stepNine" element={<StepNine />} />
        <Route path="/stepTen" element={<StepTen />} />
        <Route path="/stepEleven" element={<StepEleven />} />
        <Route path="/stepTwelve" element={<StepTwelve />} />
        <Route path="/stepFourteen" element={<StepFourteen />} />
        <Route path="/stepFifteen" element={<StepFifteen />} />
        <Route path="/stepSixteen" element={<StepSixteen />} />
        <Route path="/stepSeventeen" element={<StepSeventeen />} />
        <Route path="/stepEighteen" element={<StepEighteen />} />
        <Route path="/stepNinteen" element={<StepNinteen />} />
        <Route path="/stepTwenty" element={<StepTwenty />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
