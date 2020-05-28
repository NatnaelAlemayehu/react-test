import React, { useState } from "react";
const styles = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    width: 300
}
export default function Searchfilterbar(props) {
  const [foodName, setFoodName] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {props.handleSubmit(e, foodName);}}
        style={styles}
      >
        <div className="form-group">
          <input
            className="form-control mr-sm-2"
            type="search"
            name="resFavFoodName"
            placeholder="Type in restaurant name to searh from list"
            aria-label="Name"
            onChange={(e)=>{setFoodName(e.target.value)}}
          />
        </div>
              <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </>
  );
}
