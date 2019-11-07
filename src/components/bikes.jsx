
import React, { Component } from "react";
import { loadData } from "../util/loadData";



export class BikeInfo extends Component {
    state = {
        titles: [],
        descriptions: []
    }

    async componentDidMount(){
        this.getInfo()
    };

    getInfo = async () => {
        const response = await loadData(`https://bikewise.org:443/api/v2/locations/markers?proximity=atlanta&proximity_square=100`)
        let titleList = []
        let descriptionList = []
        for (let i = 0; i < response.features.length; i++){
            let title = response.features[i]['properties']['title']
            let description = response.features[i]['properties']['description']
            titleList.push(title)
            descriptionList.push(description);
        }
        this.setState({
            titles: titleList,
            descriptions: descriptionList
        })
    };

    render () {
        const display_titles = this.state.titles;
        const display_descriptions = this.state.descriptions;
        console.log(display_descriptions)
        return (
            <>
          
            {display_titles.map((incident, id) => {
                    return ( 
                        <h3 key={`incident-${id}`}>
                            {incident}
                        </h3>
              
                    );
                })}
           
     
            </>
        );
    }
}


export default BikeInfo;