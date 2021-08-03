import Header from "./components/Header";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/db.json")
    .then(res => {
      setPizzas(res.data.pizzas)
    })
  }, [])

  return <div className="wrapper">
    <Header />
    <div className="content">
      <Switch>
        <Route exact path="/" render={()=> <Home items={pizzas} />}/>
        <Route path="/cart" render={()=> <Cart />}/>
      </Switch>
    </div>
  </div>
}

export default App;