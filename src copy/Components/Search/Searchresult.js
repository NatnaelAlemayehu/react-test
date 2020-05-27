import React from 'react'

const styles = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    width: 200
}

export default function Searchresult(props) {
    return (
        <>
            <div className="card" style={styles}>
                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                    <div className="card-body">
                        <h3 className="card-title">{props.resobjprop.resName}</h3>
                        <p className="card-text"><b>{props.resobjprop.resLocation}</b></p>
                        <p className="card-text"><b>{props.resobjprop.resFavFood}</b></p>
                        <p className="card-text"><b>{props.resobjprop.resFavFoodPrice}</b></p>
                        <button className="btn btn-primary">View More</button>
                    </div>
            </div>
        </>
    )
}