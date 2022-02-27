import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StickyFooter from "./component/footer/footer";
import SearchAppBar from "./component/navbar/navbar";
import NestedList from "./component/navmenu/navmenu";
import Contact from "./component/details/contact/contact";
import AlignItemsList from "./component/details/experience/hightschool";
import AccessibleTabs2 from "./component/details/language/language";
import { skills } from "./data/skilldata";
import Listcard from "./component/details/skills/skillsList/skillsList";
import "./style.css";
import Main from "./component/main/Main";
import Trainer from "./component/details/trainer/Trainer";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FormControlLabel } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import UseSwitchesCustom from "./DarkMode";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const liteTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const [theme, setTheme] = React.useState(liteTheme);
  const [selected, setSelected] = React.useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleMode = () => {
    setSelected(!selected);
    selected ? setTheme(liteTheme) : setTheme(darkTheme);
  };
  console.log(selected);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <div
            className="box"
            style={{
              backgroundImage:
                " url(https://www.pixelstalk.net/wp-content/uploads/images2/Light-Wallpaper-HD.jpg)",
            }}
          >
            <CssBaseline />
            <SearchAppBar></SearchAppBar>
            <>
              <div className="menuecomponenet" style={{paddingBottom: 32}}>
                <div><div>
            <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {handleMode()}}
      style={{border: 'none'}}
    >
       <UseSwitchesCustom
                Checked={selected}
              />
    </ToggleButton>
    <ToggleButton onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1UYeQY7HqRCc6rkxqFJKeun5nZjjD8c4_/view"
          )}
    > CV
      <InsertDriveFileIcon color="success" />
    </ToggleButton>
            </div>
                <NestedList /></div>
                <div className="comp">
                  <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/trainer" component={Trainer} />
                    <Route
                      exact
                      path="/hightschool"
                      component={AlignItemsList}
                    />
                    <Route exact path="/language" component={AccessibleTabs2} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/skills">
                      <Listcard skills={skills} />
                    </Route>
                  </Switch>
                </div>
              </div>
            </>
            <StickyFooter className="footer" />
          </div>
        </ScopedCssBaseline>
      </ThemeProvider>
    </Router>
  );
};

export default App;
