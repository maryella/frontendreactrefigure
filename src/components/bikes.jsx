
import React, { Component } from "react";
import { loadData } from "../util/loadData";


export class BikeInfo extends Component {

    async componentDidMount(){
        this.getInfo()
    };

    getInfo = async () => {
        const data = await loadData(`https://bikewise.org:443/api/v2/locations/markers?proximity=atlanta&proximity_square=100`)
        const titleInfo = (data.features[0]['properties']['title'])
        console.log(titleInfo)
        return data
    };

    render () {
        
        return (
            <div></div>
        );
    }
}


export default BikeInfo;