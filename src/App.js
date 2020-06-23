import React from 'react';
import "./components/cake.component";
import './App.css';

import { Provider } from "react-redux";
import store from "./redux/store";
import CakeComponent from './components/cake.component';

function App() {
  return (
    <Provider store={store}>
      <div>
         <CakeComponent/>
      </div>
    </Provider>
  );
}

export default App;
