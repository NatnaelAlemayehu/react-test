import React, { useState, useContext } from 'react'
import FormElement from './FormElement'
import { RestaurantContext } from '../RestaurantMain/RestaurantContextProvider'

function Register () {    
    const [restaurant, setrestaurant] = useState([{ resName: '' , resLocation: '', resFavFood: '' , resFavFoodPrice: '' }]);
    const { addrestaurant } = useContext(RestaurantContext);
    const initialcopystate = restaurant;

    const handleSubmit = (e) => {
        e.preventDefault();
        addrestaurant(restaurant[0])   
        setrestaurant(initialcopystate)
    }

    const handleChange = (e) => {      
        for (var name in restaurant[0]) {
            if (name === e.target.name) {
                setrestaurant([...restaurant, restaurant[0].name = e.target.value])
            }            
        }        
    }
    
    return (
        <>
            <FormElement elementmethod={handleChange} formmethod={handleSubmit} />
            <p>Hello</p>
        </>
    );      
}

export default Register