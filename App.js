import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/body';
import "./styles.css";

//Header
    //Logo
    //Nav bars
//Body
    //search
    //card container
        //cards
//Footer
    //copyright
    //links

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>  
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)