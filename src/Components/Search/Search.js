import React from 'react'
import { RestaurantContext } from '../RestaurantMain/RestaurantContextProvider'
import Searchfilterbar from './Searchfilterbar'
function Search() {
    const { allresobj } = useContext(RestaurantContext);
    const hanldeSubmit = (e) => {
        console.log(e.target)
    }
    return (
        <>              
            <Searchfilterbar handleSubmit={hanldeSubmit} />
            {/* <Searchresult resobj = {allresobj} /> */}
        </>
    )
}

export default Search()