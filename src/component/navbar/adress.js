import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value}
      onMouseLeave={() => setValue("recents")}
      onChange={handleChange}
      style={{ backgroundColor: "transparent", paddingRight: "20px" }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="+21651164297"
        value="+21651164297"
        icon={<ContactPhoneIcon style={{ color: "white" }} />}
      />
      <BottomNavigationAction
        style={{ color: "white", paddingTop: "50px" }}
        label="Olympic city, El-Manzah 1 Tunis, Tunisia 2080"
        value="Olympic city, El-Manzah 1 Tunis, Tunisia 2080"
        icon={<LocationOnIcon style={{ color: "white" }} />}
        onDoubleClick={() =>
          window.open(
            "https://www.google.tn/maps/@36.8390178,10.1946162,16z?hl=fr"
          )
        }
      />
      <BottomNavigationAction
        style={{ color: "white", paddingTop: "14px" }}
        label="https://github.com/RaedRdhaounia"
        value="https://github.com/RaedRdhaounia"
        icon={<GitHubIcon style={{ color: "white" }} />}
        onDoubleClick={() => window.open("https://github.com/RaedRdhaounia")}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="raedrdhaounia@gmail.com"
        value="raedrdhaounia@gmail.com"
        icon={<AlternateEmailIcon />}
        onDoubleClick={() => window.open("mailto:raedrdhaounia@gmail.com")}
      />
      <BottomNavigationAction
        style={{ color: "white", paddingTop: 30 }}
        label="https://linkedin.com/in/raed-rdhaounia"
        value="https://linkedin.com/in/raed-rdhaounia"
        icon={<LinkedInIcon />}
        onDoubleClick={() =>
          window.open("https://linkedin.com/in/raed-rdhaounia")
        }
      />
    </BottomNavigation>
  );
}
