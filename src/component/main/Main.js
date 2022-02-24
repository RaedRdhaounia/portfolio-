import Avatar from "@mui/material/Avatar";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularStatic from "./Progress";
import Mypic from "../navbar/image/mypic.jpg";
import { stat } from "../../data/Stat";

const Main = () => {
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
        <div
          style={{ display: "flex", flexDirection: "column", float: "right" }}
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
      <div className="main" style={{display:'flex' , margin :'40px'}}>
        {stat.map((el) => (
          <div style={{margin : 60 }}>
            <CircularStatic value={el.value} />
            <h3> {el.skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Main;
