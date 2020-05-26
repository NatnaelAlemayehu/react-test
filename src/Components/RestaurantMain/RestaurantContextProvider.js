import React, { Component, createContext} from 'react'

export const RestaurantContext = createContext();
class RestaurantContextProvider extends Component{           
    state = {}       
    addrestaurant = (data) => {        
        this.setState({ ...this.state, ...data }) 
        console.log(this.state)
    }
    
    render() {
        return (
            <RestaurantContext.Provider value={{ allresobj: this.state, addrestaurant: this.addrestaurant }}>
                {this.props.children}
            </RestaurantContext.Provider>            
        ); 
    }
    
}

export default RestaurantContextProvider;


