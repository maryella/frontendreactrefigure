
import React, { Component } from "react";
import { loadData } from "../util/loadData";



export class BikeInfo extends Component {
    state = {
        titles: [],
        descriptions: [],
        incidents: []
    }

    async componentDidMount(){
        this.getInfo()
    };

    getInfo = async () => {
        const response = await loadData(`https://bikewise.org:443/api/v2/locations/markers?proximity=atlanta&proximity_square=100`)
        let titleList = []
        let descriptionList = []
        let incidentList = []
        for (let i = 0; i < response.features.length; i++){
            let title = response.features[i]['properties']['title']
            let description = response.features[i]['properties']['description']
            let incident = response.features[i]['properties']
            
            titleList.push(title)
            descriptionList.push(description)
            incidentList.push(incident)
        }
        this.setState({
            incidents: incidentList,
            descriptions: descriptionList,
            titles: titleList
        })
    };

    render () {
        const display_titles = this.state.titles;
        const display_descriptions = this.state.descriptions;
       
        console.log("console log")
        return (
            <div>
                
                 {display_titles.map((incident, id) => {
                    return ( 
                        <h2 key={`incident-${id}`}>
                            {incident}
                        </h2>
              
                    );
                })}
                
                 {display_descriptions.map((incident, id) => {
                    return ( 
                        <p key={`incident-${id}`}>
                            {incident}
                        </p>
              
                    );
                })}
               
          
             </div>
           
        );
    }
}


export default BikeInfo;