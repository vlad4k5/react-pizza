import Header from "./components/Header";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return <div className="wrapper">
    <Header />
    <div className="content">
      <Switch>
        <Route exact path="/" render={()=> <Home />}/>
        <Route path="/cart" render={()=> <Cart />}/>
      </Switch>
    </div>
  </div>
}

export default App;