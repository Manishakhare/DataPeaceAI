import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import page404 from '../components/Pageerror';
import First from '../components/First';
import Viewoneplan from '../components/Viewoneplan';

// import ShowUser from '../components/ShowUser';


const Routes = () => {
 
  return (
    

    <Router>
   
         <Switch>    
    
      
         <Route path="/" component={ First}  exact />  
         <Route path="/Viewoneplan/:id" component={ Viewoneplan}  exact />  

         <Route path="/*" component={ page404} exact />    
       </Switch>
  

      
   
   
  </Router>
  );
};

export default Routes;