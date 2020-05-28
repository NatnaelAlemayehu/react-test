import React, { Component, createContext} from 'react'

export const RestaurantContext = createContext();
class RestaurantContextProvider extends Component{           
    constructor() {
        super()
        this.mydata = []
    }      
    addrestaurant = (data) => {    
        this.mydata.push(data)       
    }
    getState = () => {
        return this.mydata
    }
    render() {
        return (
            <RestaurantContext.Provider value={{allrescaller: this.getState, addrestaurant: this.addrestaurant}}>
                {this.props.children}
            </RestaurantContext.Provider>            
        ); 
    }
    
}

export default RestaurantContextProvider;


