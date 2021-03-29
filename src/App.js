
import {React, useEffect} from "react";
import Routers from "./router"
import Header from "./components/header/header"
import  Footer from './components/footer/footer'
import { Route, Switch, BrowserRouter } from "react-router-dom";


function App() {
    useEffect(()=>{

    },[Routers])
  return (
      <BrowserRouter>
          <Header />
          <Switch>
              {
                  Routers.map((data,i)=>
                      <Route path={data.path} key={i} component={data.component} exact={data.exact} />
                  )
              }
          </Switch>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
