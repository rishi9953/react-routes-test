import React from "react";

class StatefulComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"yoru",
            // thisYear: new Date.getFullYear(),
        }
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <h1>{this.state.thisYear}</h1> */}
            </div>
        )
    }
}
export default StatefulComponent;