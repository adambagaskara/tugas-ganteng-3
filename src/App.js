import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header } from "components";
import "./sass/main.scss";
import { Example, Home } from "pages";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
