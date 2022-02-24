import * as React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TranslateIcon from "@mui/icons-material/Translate";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 200,
        backgroundImage:
          "#1976d2",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <EngineeringIcon />
        </ListItemIcon>
        <ListItemText primary="Experience"  style={{color :'white' , fontFamily :'Cursive' , fontSize: 20}}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/hightschool" style={{ textDecoration: "none" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText
              style={{color :'white' , fontFamily :'Cursive' , fontSize: 20,textDecoration: "none" }}
                primary="High-school"
              />
            </ListItemButton>
          </Link>
          <Link to="/trainer" style={{color :'white' , fontFamily :'Cursive' , fontSize: 20, textDecoration: "none" }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText
              primary="traineeship"
              style={{color :'white' , fontFamily :'Cursive' , fontSize: 20}}
            />
          </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <Link to="/skills" style={{color :'white' , fontFamily :'Cursive' , fontSize: 20, textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <DownhillSkiingIcon />
          </ListItemIcon>
          <ListItemText primary="Skills" style={{color :'white' , fontFamily :'Cursive' , fontSize: 20, textDecoration: "none" }} />
        </ListItemButton>
      </Link>
      <Link to="/language" style={{color :'white' , fontFamily :'Cursive' , fontSize: 20, textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText
            primary="Languages"
style={{color :'white' , fontFamily :'Cursive' , fontSize: 20, textDecoration: "none" }}          />
        </ListItemButton>
      </Link>
      <Link to="/contact" >
        <ListItemButton>
          <ListItemIcon>
            <ContactPageIcon   />
          </ListItemIcon>
          <ListItemText primary="Contact" style={{color :'white' , fontFamily :'Cursive' , fontSize: 20, textDecoration: "none" }} />
        </ListItemButton>
      </Link>
    </List>
  );
}
