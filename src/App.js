import './App.css';
import PlanLayout from './Pages/Layouts/PlanLayout';
import Welcome from './Pages/welcome';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PhoneConfirmation from "./Pages/phone confirmation"
import CodeConfirm from "./Pages/codeconfirm"
import AllowNotification from './Pages/AllowNotification';
import AppLayout from './Pages/Layouts/AppLayout';
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Profile from "./Pages/Profile";
import LogIn from "./Pages/LogIn";

function App() {
  return(
    <BrowserRouter>
    <Route exact path={["/","/invite","/logIn","/get_username","/code_confirm","/allow_notification"]}>
    <PlanLayout>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/invite" component={PhoneConfirmation}/>
      <Route exact path="/logIn" component={LogIn}/>
      <Route exact path="/code_confirm" component={CodeConfirm}/>
      <Route exact path="/allow_notification" component={AllowNotification}/>
    </Switch>
    </PlanLayout>
    </Route>
    <Route exact path={['/home', "/explore", "/profile"]}>
      <AppLayout>
        <Switch>
          <Route exact path="/home" component={() => <Home />}/>
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </AppLayout>
    </Route>
    </BrowserRouter>
  );
}

export default App;
