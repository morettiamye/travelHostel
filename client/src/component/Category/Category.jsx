import React from 'react';

const Category = () => {
    return (
        <div class="field has-addons">
            <div class="control is-expanded">
                <div class="select is-fullwidth">
                    <select name="Category">
                        <option value="Food">Food</option>
                        <option value="Accomodations">Accomodations</option>
                        <option value="Travel">Transportation</option>
                        <option value="Activities">Activities</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Category;