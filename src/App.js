import React from "react";
import GreadItem from "./GridItem";
import GridRow from "./GridRow";

import "./App.css";
class App extends React.Component {
    render() {
       
        return (

            <div className="container">
                <div className="header">Tic Tac Toe</div>
                <div id="board">
                  <GridRow/> 
                  <GridRow/> 
                  <GridRow/> 
                   
                </div>
                <div className="turn"></div>

            </div>
            
        )
    }
}
export default App;