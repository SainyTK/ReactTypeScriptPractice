import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppNavigation from'./PresentationLayer/navigation/AppNavigation';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <AppNavigation/>
      </BrowserRouter>
    );
  }
}

export default App;
