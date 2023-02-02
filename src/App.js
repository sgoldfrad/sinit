import {react, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Bootstrap from './components/Bootstrap';
import Table from './components/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyRouter from './components/MyRouter';
import Page from './components/Page';
import Form from './components/Form';
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        {
          isLogin ?
            <MyRouter />
            :
            <Login setIsLogin={setIsLogin}/>
        }
           <Form> </Form>
      </BrowserRouter>
    </>
  );
}

export default App;
