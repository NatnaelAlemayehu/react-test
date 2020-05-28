import React from "react";

const styles = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  margin: "auto",
  width: 200
}

export default function FormElement({ elementmethod, formmethod}) {
  return (
    <>
      <form onSubmit={(e) => formmethod(e)} style={styles}>
        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            type="text"
            className="form-control"
            id="resName"
            name="resName"
            placeholder="Restaurant Name"            
            onChange={(e) => {
              elementmethod(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            id="resLocation"
            name="resLocation"
            placeholder="Location"            
            onChange={(e) => {
              elementmethod(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Favorite Food</label>
          <input
            type="text"
            className="form-control"
            id="resFavFood"
            name="resFavFood"
            placeholder="Favorite Food"            
            onChange={(e) => {
              elementmethod(e);
            }}
          />
        </div>
        <div className="form-group">
          <label>Pirce</label>
          <input
            type="number"
            className="form-control"
            id="resFavFoodPrice"
            name="resFavFoodPrice"
            placeholder="Food Price"            
            onChange={(e) => {
              elementmethod(e);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
