import React from "react";

const Search = props => (

  
        <div className="field is-grouped">
            <div className="control is-expanded">
                <form name="form_citydetails" id="form_citydetails" encType="multipart/form-data" >
                    <input className="ff_elem" type="text" name="ff_nm_from[]" value="" id="f_elem_city" placeholder="Start typing city name" onInput={props.handleInputChange}
                        value={props.city} />
                </form>

                <p className="control">
                    <a onClick={props.handleCitySearch} className="button is-link">Search</a>
                </p>
            </div>
        </div>
)

export default Search;