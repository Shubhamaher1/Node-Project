import React from "react";
import GreadItem from "./GridItem";
class GridRow extends React.Component{
    render(){
        const array = [<GreadItem />, <GreadItem />, <GreadItem />];
        return(
            <div className="grid-row">
            {array}
        </div>
        )
    }

}
export default GridRow;