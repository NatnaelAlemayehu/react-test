import React, {useContext, useState} from 'react'
import { RestaurantContext } from '../../Context/RestaurantContext/RestaurantContextProvider'
import Searchfilterbar from './Searchfilterbar'
import Searchresult from './Searchresult'
import { v4 as uuidv4 } from 'uuid';
function Search() {    
    const { allrescaller } = useContext(RestaurantContext);
    const allresarray = allrescaller();  
    const restaurants = allresarray.map(resobj => <Searchresult key={uuidv4()} resobjprop={resobj} />)
    const [searchresult, setsearchresult] = useState(restaurants)
    const filterfunction = (Food) => {
        let filteredarray = allresarray.filter((resobje) => {
            return (resobje.resFavFood === Food)
        })        
        let filteredrestaurant = filteredarray.map(resobj => <Searchresult key={uuidv4()} resobjprop={resobj} />)
        setsearchresult(filteredrestaurant)
    }
    const hanldeSubmit = (e, foodName) => {
        e.preventDefault();
        filterfunction(foodName)        
    }    
    return (
        <>              
            <Searchfilterbar handleSubmit={hanldeSubmit} />            
            {searchresult}
        </>
    )
}
export default Search