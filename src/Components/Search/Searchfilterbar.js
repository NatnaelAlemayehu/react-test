import React from 'react'

export default function Searchfilterbar(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div class="form-group">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </div>                
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}