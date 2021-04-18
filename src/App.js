
import {React, useEffect} from "react";
import Routers from "./router"
import Header from "./components/header/header"
import  Footer from './components/footer/footer'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Body from "./components/body/body"
import NotFound from "./views/404/404"


function App() {
    useEffect(()=>{

    },[Routers])

    function redirect(){
        window.scrollTo(0, 0)

    }
  return (
      <BrowserRouter>
          <Header />
          <Switch>
              {
                  Routers.map((data,i)=>
                      <Route path={data.path} key={i}   exact={data.exact} render={ props =>(

                          <Body>
                              {redirect()}
                              <data.component props={props}/>
                          </Body>
                      )} />
                  )
              }
              <Route component={NotFound} />
          </Switch>
          <br/><br/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
