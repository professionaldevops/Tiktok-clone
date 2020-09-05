import React from'react';
import "./App.css";
import Vedio from './vedio.js';


class App extends React.Component{
    render(){
        return(
            <div className="app">
             <div className="app_vedio">
                <Vedio/>
                <Vedio/>
                <Vedio/>
             </div>
            </div>
        )
    }
};

export default App;
