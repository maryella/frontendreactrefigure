
import React, { Component } from "react";
import { loadData } from "../util/loadData";


export class BikeInfo extends Component {
    state = {
        title: "Loading title",
        description: "Loading description",
    }

    async componentDidMount(){
        this.getInfo()
    };

    getInfo = async () => {
        const response = await loadData(`https://bikewise.org:443/api/v2/locations/markers?proximity=atlanta&proximity_square=100`)
        const inctitle = response.features[0]['properties']['title']
        const incdescription = response.features[0]['properties']['description']

        this.setState({
            title : inctitle,
            description: incdescription
        })
    };

    render () {
        const display_title = this.state.title;
        const display_description = this.state.description;
        console.log (this.state.title)
        return (
            <div>
            <h3>{display_title}</h3>
            <p>{display_description}</p>
            </div>
        );
    }
}


export default BikeInfo;