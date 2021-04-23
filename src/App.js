
import {React, useEffect} from "react";
import Routers from "./router"
import Header from "./components/header/header"
import  Footer from './components/footer/footer'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Body from "./components/body/body"
import NotFound from "./views/404/404"
import AppDb from "./firebase";
import axios from "axios";

function App() {
    useEffect(()=>{
        getInfoClient();
    },[Routers])

   async function getInfoClient() {
        await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=431d6061925442e08d75b08ca289dc07')
            .then(response => {
                let database = AppDb.database()
                database.ref('users/'+response.data.country+'/'+response.data.city+'/'+response.data.postal_code).set(response.data);

            })
            .catch(error => {
                console.log(error);
            });
    }

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
