import React from "react";

const Search = props => (

    <div className="column is-three-fifths is-offset-one-fifth">
        <div className="field has-addons has-addons-right">
            <div className="control is-expanded">
                <div name="form_citydetails" id="form_citydetails" encType="multipart/form-data" >
                    <input className="ff_elem input" type="text" name="ff_nm_from[]" value="" id="f_elem_city" placeholder="Start typing city name" onInput={props.handleInputChange}
                        value={props.city} />
                </div>
                </div>

                <div className="control">
                    <button onClick={props.handleCitySearch} className="button is-link" type="submit">Search</button>
                </div>
            </div>
        </div>
    
)

export default Search;