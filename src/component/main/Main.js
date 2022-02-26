import Avatar from "@mui/material/Avatar";
import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import FaceIcon from "@mui/icons-material/Face";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularStatic from "./Progress";
import Mypic from "../navbar/image/mypic.jpg";
import { stat } from "../../data/Stat";
import { skills } from "../../data/skilldata";
import Paper from "@mui/material/Paper";

const Main = () => {
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  return (
    <div style={{ padding: 20, height: 469 }}>
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingRight: 50 }}>
            <Avatar alt=" my pic" src={Mypic} sx={{ width: 90, height: 90 }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1 style={{ margin: 10 }}> Raed Rdhaounia</h1>
            <h4 style={{ margin: 10 }}>Junior develppeur</h4>
            <h4 style={{ margin: 10 }}>physic's teacher</h4>
          </div>
        </div>
        <div>
          <h4 style={{ margin: 10, marginLeft: 80 }}>wab skills</h4>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
              maxWidth: 270,
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
            component="ul"
          >
            {skills.map((el) => (
              <ListItem key={el.skill.key}>
                <Chip
                  color="success"
                  size="small"
                  deleteIcon={<DoneIcon />}
                  icon={<DoneIcon />}
                  label={el.skill.title}
                />
              </ListItem>
            ))}
          </Paper>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            float: "right",
            paddingRight: 15,
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="English"
            only
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="Full stack JS"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label="permi"
          />
        </div>
      </div>
      <div className="main" style={{ display: "flex", margin: "40px" }}>
        {stat.map((el) => (
          <div style={{ margin: 40 }}>
            <CircularStatic value={el.value} />
            <h3> {el.skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Main;
