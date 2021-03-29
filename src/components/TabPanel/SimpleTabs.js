import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FeedbackApp from "../Feedback/FeedbackApp";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabNames = ["home", "about", "users", "feedback"];

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();

  React.useEffect(() => {
    let pathnameValue =
      location.pathname !== "/"
        ? TabNames.indexOf(location.pathname.substring(1))
        : 0;
    setValue(pathnameValue);
  }, [location]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          {TabNames.map((t, i) => (
            <Tab
              component={Link}
              to={"/" + t}
              label={t}
              key={i}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </AppBar>

      <Switch>
        <Route path="/home">Home</Route>
        <Route path="/about">About</Route>
        <Route path="/users">Users</Route>
        <Route path="/feedback">
          <FeedbackApp />
        </Route>
      </Switch>
    </div>
  );
}

export default SimpleTabs;
