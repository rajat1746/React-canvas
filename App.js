import "./assets/fonts/_fonts.scss"
import configureStore from "./store";
import { Provider } from "react-redux";
import {Route, Link, Switch, Redirect} from 'react-router'
import './App.css';
import UserManagemnt from './container/UserManagement/UserManagement'
import Header from './component/Header/Header'
import MenuBar from './component/MenuBar'
import OrgHierarchy from './container/OrgHierarchy/OrgHierarchy'


function App() {
  return (
    <>
    <Provider store={configureStore()}>
    <Header/>
    <MenuBar/>
      <Switch>
      
        <div className='main-container-rtls '>
          <Route exact path='/' component={UserManagemnt} />
          <Route path='/org-hierarchy' component={OrgHierarchy} />
        </div>
      
       
      </Switch>
    
    </Provider>
    
    </>
  );
}

export default App;
