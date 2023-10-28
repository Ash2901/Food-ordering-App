import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

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
        </div>  
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)