import React from 'react'

const styles = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    width: 300,
    backgroundColor: "rgb(191, 186, 186)", 
    borderRadius: 15,
}

export default function Searchresult(props) {
    return (
        <>
            <div className="card" style={styles}>
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    <div className="card-body">
                        <h3 className="card-title">Restaurant Name: {props.resobjprop.resName}</h3>
                        <p className="card-text">Location: <b>{props.resobjprop.resLocation}</b></p>
                        <p className="card-text">Favorite Food: <b>{props.resobjprop.resFavFood}</b></p>
                        <p className="card-text">Pirce: <b>{props.resobjprop.resFavFoodPrice}</b></p>
                        <button className="btn btn-primary">View More</button>
                    </div>
            </div>
        </>
    )
}