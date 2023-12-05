import React from 'react';
import "./style/tripPlannerHeader.css"
import frame from "../assets/Frame.png"

const TripPlannerHeader = () => {
  return (
    <div className="trip-planner-header">
     <img src={frame} />
    </div>
  );
};

export default TripPlannerHeader;
