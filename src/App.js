import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import AddContactForm from "./components/addContactForm";
import Signup from "./components/signup";
import Contacts from "./components/contacts";
function App() {
    return (
        <div
            className="App"
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route
                    path="/addContactForm"
                    exact
                    component={AddContactForm}
                />
                <Route path="/contacts" exact component={Contacts} />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    );
}

export default App;
