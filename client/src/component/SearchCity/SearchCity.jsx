import React from "react";

const Search = props => (

    <div className="box">
        <div className="field is-grouped">
            <p className="control is-expanded">
                <form action="" method="post" name="form_citydetails" id="form_citydetails" enctype="multipart/form-data" onsubmit="return false;">
                    <input class="ff_elem" type="text" name="ff_nm_from[]" value="" id="f_elem_city" placeholder="Start typing city name" onChange={props.handleInputChange}
                        value={props.city} />
                </form>

                <p className="control">
                    <a onClick={this.props.handleCitySearch} className="button is-link">Search</a>
                </p>
            </p>
        </div>
    </div>
)

export default Search;