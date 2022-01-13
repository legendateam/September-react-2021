import {useEffect, useState} from "react";

import Mission from "../Mission/Mission";
import './Missions.css'

function Missions(props) {

    let [missions,setMissions] = useState([])

    useEffect(() => {
          fetch('https://api.spacexdata.com/v3/launches/')
          .then(response => response.json())
          .then(missions => {
                      let reduce = missions.reduce((acc, value) => {
                          if(value.launch_year !== "2020") {
                              acc.push(value);
                          }
                          return acc
                      }, []);
                  setMissions(reduce)
          })
    },[]);


    return (
            <div className={'missions'}>
                {
                    missions.map(mission =>
                        <Mission
                            key={mission.flight_number}
                            name={mission.mission_name}
                            year={mission.launch_year}
                            img={mission.links.mission_patch_small}
                        />)
                }
            </div>
        );
}

export default Missions;