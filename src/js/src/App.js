import logo from './logo.svg';
import './App.css';
import {getAllEmployees} from './client';
import { Component } from 'react';

/* function App() {
  return (
    getAllEmployees().then(res => res.json().then(employees => {
      console.log(employees)}

    ,<h1>Employee Database</h1>
  )));
} */

class App extends Component {
  render() {
    getAllEmployees().then(res => res.json().then(employees => {
      console.log(employees);
    }))
    return <h1>Beez nuts</h1>
  }
}

export default App;
