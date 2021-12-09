import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import HomepageComponent from "./components/homepage/homepage";
import WorkoutsComponent from "./components/workouts";
import CustomWorkoutsComponent from "./components/customWorkout";
import WorkoutScreenComponent from "./components/workoutScreen";
import MyAdviceComponent from "./components/myadvice";
import BuilderComponent from "./components/customBuilder";
import CustomWorkoutScreenComponent from "./components/CustomWorkoutScreenComponent";
import FitnessGurusComponent from "./components/fitnessGurus";
import ProteinProductsComponent from "./components/proteinProducts";
import AboutMeComponent from "./components/aboutMe";

function App() {
  return (
    <div>
      <NavbarComponent />
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<HomepageComponent />} />
          <Route path="/workouts" exact element={<WorkoutsComponent />} />
          <Route
            exact
            path="/customWorkouts"
            element={<CustomWorkoutsComponent />}
          />
          <Route
            exact
            path="/workoutScreen/:id"
            element={<WorkoutScreenComponent />}
          />
          <Route
            exact
            path="/customWorkoutScreen/:workoutObj"
            element={<CustomWorkoutScreenComponent />}
          />
          <Route exact path="/myadvice" element={<MyAdviceComponent />} />
          <Route exact path="/builder" element={<BuilderComponent />} />
          <Route
            exact
            path="/fitnessGurus"
            element={<FitnessGurusComponent />}
          />
          <Route
            exact
            path="/proteinProducts"
            element={<ProteinProductsComponent />}
          />
          <Route exact path="/aboutMe" element={<AboutMeComponent />} />

          <Route path="/*" element={<HomepageComponent />} />
        </Routes>
      </HashRouter>
      <FooterComponent />
    </div>
  );
}

export default App;