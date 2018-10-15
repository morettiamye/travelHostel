import React from "react";

const Search = props => (

    <div className="column is-centered">
        <div className="field">
            <div className="control is-expanded">
                <div name="form_citydetails" id="form_citydetails" encType="multipart/form-data">
                    <input className="ff_elem input is-link input is-large" type="text" name="ff_nm_from[]" value="" id="f_elem_city" placeholder="Start typing city name" onInput={props.handleInputChange}
                        value={props.city} />
                </div>
            </div>
            <br />

            <button onClick={props.handleReroute} className="button is-link is-large">Search</button>
        </div>
    </div >

)

export default Search;