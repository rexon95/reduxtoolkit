import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import App from './App'
import {store} from './app/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

console.log(store.subscribe(()=>{
  console.log(store.getState())
}))

ReactDOM.render(
      <Container>
              <Provider store={store}>
                   <BrowserRouter>
                      <App />
                  </BrowserRouter>
              </Provider>
          
      </Container>,
  document.getElementById('root')
);

