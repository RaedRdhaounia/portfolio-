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
import Agr from "./image/minagr.png";

export default function AlignItemsList() {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 2
      }}
    >
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
              </Typography>
              {
                "A full stack developer, also called generalist developer, versatile developer or more familiarly 'all-purpose developer', is a coder capable of programming a site or a web application both in front-end and back- end"
              }
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
              </Typography>
              {
                "A physicist is a scientist who studies the field of physics, that is, the science analyzing the fundamental constituents of the universe (on all scales) and the forces that connect them. The word physicist derives from the Greek, which knows nature."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="minestry of agriculture" src={Agr} />
        </ListItemAvatar>
        <ListItemText
          primary="agriculture certificate"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                15 March 2015 - 1 October 2015
              </Typography>
              {
                "A farmer is a person who, professionally or not, cultivates the land or raises animals."
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
                4 septembre 2013 - 24 junary 2015
              </Typography>
              {
                "An engineer is a professional dealing with complex engineering problems, in particular by designing products, processes if necessary with innovative means, and directing the realization and the implementation of the whole."
              }
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
              {
                "The baccalauréat, often known in France colloquially as the bac, is a French national academic qualification that students can obtain at the completion of their secondary education"
              }
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
