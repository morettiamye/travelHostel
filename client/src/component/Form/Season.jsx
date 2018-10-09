import React from 'react';

const Season = () => {
    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <div className="select is-fullwidth">
                    <select name="Season">
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                        <option value="Rainy Season">Rainy Season</option>
                        <option value="Dry Seasonr">Dry Season</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Season;