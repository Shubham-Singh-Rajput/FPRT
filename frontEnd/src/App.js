import Layout from "./Container/Layout";
import Routes from './Routes/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Layout>
        <Switch>
          {Routes.map((i,key)=>{
            return(<Route key={key} {...i}></Route>)
          })}
        </Switch>
        </Layout>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
