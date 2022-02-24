import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onMouseLeave={() => setValue('recents')} onChange={handleChange} style={{backgroundColor :'transparent', paddingRight: '20px'}}>
      
      <BottomNavigationAction style={{color :'white'}}
        label="+21644670586"
        value="number"
        icon={<ContactPhoneIcon style={{color :'white'}} />}
      />
      <BottomNavigationAction style={{color :'white' , paddingTop:'15px'}}
        label="Lala KSAR 2121"
        value="mocation"
        icon={<LocationOnIcon style={{color :'white'}} />}
      />
      <BottomNavigationAction style={{color :'white', paddingTop :'14px'}}
        label="https://github.com/raedrdh"
        value="github"
        icon={<GitHubIcon style={{color :'white'}} />}
      />
      <BottomNavigationAction style={{color :'white'}} label="raed.rdh1994@gmail.com" value="mail" icon={<AlternateEmailIcon/>} />
    </BottomNavigation >
  );
}