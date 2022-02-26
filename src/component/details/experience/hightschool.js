import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import gomycode from "./image/gomycode.png";
import fsgf from "./image/fsgf.png";
import IPEI from "./image/IPEI.png";
import Educat from "./image/education.png";

export default function AlignItemsList() {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 2,
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="wethink"
            src={
              "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/118512317_167591294861288_5421313545268029938_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Bn0Onpjs2zcAX_m6J-X&_nc_ht=scontent.ftun4-1.fna&oh=00_AT8OF1hOBBgQIgX2fxf6mOYDx_j4aT3k7w0UDQoDmX498w&oe=62406DF2"
            }
          />
        </ListItemAvatar>
        <ListItemText
          primary="Wethink"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                14 Junary 2022 - 14 february 2022 <br />
              </Typography>
              {
                "Stagiaire en développement Web to improve group work skills and get a look at the startup's envirement"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="GoMyCode logo" src={gomycode} />
        </ListItemAvatar>
        <ListItemText
          primary="Developement web full Stack JS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                31 August 2021 - 14 Juanary 2022
                <br />
              </Typography>
              {
                "A full stack developer JavaScript,apable of programming a site or a web application both in front-end "
              }
              <b style={{ color: "#1976d2" }}>Reactjs</b>
              {" and back- end "}
              <b style={{ color: "#1976d2" }}>nodeJs, MongoDB</b>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="FSG logo" src={fsgf} />
        </ListItemAvatar>
        <ListItemText
          primary="bachelor's degree in physical sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                12 september 2016- 30 Juin 2020
                <br />
              </Typography>
              {
                "A physicist is a scientist who studies the field of physics analyzing the fundamental constituents."
              }
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="IPEI" src={IPEI} />
        </ListItemAvatar>
        <ListItemText
          primary="preparatory studies in engineering institutes"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                4 septembre 2013 - 24 July 2015
              </Typography>
              {"2 years passed with the section of physics-chimie"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="education minestry" src={Educat} />
        </ListItemAvatar>
        <ListItemText
          primary="Baccalaureate degree"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                26 July 2013
              </Typography>
              {"Got it with mention very good , section experimental science"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
