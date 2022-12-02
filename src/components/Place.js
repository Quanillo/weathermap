import  { useState } from 'react'
import axios from 'axios'
const Place = ({place}) => {
    //const [ country, setCountry ] = useState([])
    if(place.data===null){
        return <p></p>
    }
    else{

        //console.log(place);
        return (
            <div>
               
            </div>
        )
    }
    
}
export { Place }

