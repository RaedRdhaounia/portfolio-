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

const App = () => (
  <Router>
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
          <div className="menuecomponenet">
            <NestedList />
            <div className="comp">
              <Switch>
              
                <Route exact path="/" component={Main} />
                <Route exact path="/trainer" component={Trainer} />
                <Route exact path="/hightschool" component={AlignItemsList} />
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
  </Router>
);

export default App;
