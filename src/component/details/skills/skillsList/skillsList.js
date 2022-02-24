import React from "react";
import RecipeReviewCard from "../skillCard/Card";
import './skillList.css';

const Listcard = ({ skills }) => {
  return (
    <div className='skillList'>
      {skills.map((el) => (
        <RecipeReviewCard key={el.skill.id} el={el} />
      ))}
    </div>
  );
}
export default Listcard;
