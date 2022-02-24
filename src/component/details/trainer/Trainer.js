import React from 'react';
import {trainer} from '../../../data/trainer'
import RecipeReviewCard from './trainCard/Card';
import './skillList.css'


function Trainer() {
  return <div className='skillList'>
      {trainer.map(el=><RecipeReviewCard el= {el}/>)
}
</div>
}
export default Trainer;
