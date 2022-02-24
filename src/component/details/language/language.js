import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Rating from '@mui/material/Rating';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CreateIcon from '@mui/icons-material/Create';



export default function SimpleAccordion() {
  return (

    <div  style={{height:469 , maxHeight:500}}>

      <Accordion style={{backgroundColor :'transparent'}}>
        <AccordionSummary
          expandIcon={<GTranslateIcon style={{color:'blue'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color :'white', fontFamily :'Cursive' , fontSize: 20}}>English</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <RecordVoiceOverIcon style={{color:'lightblue'}}/>
          <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
             <br/>
             <CreateIcon style={{color:'darkblue'}}/>
             <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor :'transparent'}}>
        <AccordionSummary
          expandIcon={<GTranslateIcon style={{color:'blue'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color :'white', fontFamily :'Cursive' , fontSize: 20}}>Franch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <RecordVoiceOverIcon style={{color:'lightblue'}}/>
          <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
             <br/>
             <CreateIcon style={{color:'darkblue'}}/>
             <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{backgroundColor :'transparent'}}>
        <AccordionSummary 
          expandIcon={<GTranslateIcon style={{color:'blue'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color :'white' , fontFamily :'Cursive' , fontSize: 20}}>Espanol</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <RecordVoiceOverIcon style={{color:'lightblue'}}/>
             <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
             <br/>
             <CreateIcon style={{color:'darkblue'}}/>
             <Rating name="half-rating-read" defaultValue={1.5} precision={0.5} readOnly />
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<GTranslateIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style={{ fontFamily :'Cursive' }}>Arabic (Mother language)</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}