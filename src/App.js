
import './App.css';
import { Route,Switch } from 'react-router';
import Dashboard from './features/dashboard/Dashboard';
import LoginForm from './features/loginform/LoginForm';
import {useEffect} from 'react'
import { withRouter } from 'react-router-dom';


function App(props) {
    const handleAuth = () =>{
      if(localStorage.getItem('token')){
        props.history.push('/dashboard/stats')
    }else{
      props.history.push('/')
    }
    }
    useEffect(()=>{
         handleAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
    <div>
      <Switch>
           <Route path="/" component={LoginForm} exact={true}/>  
           <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
