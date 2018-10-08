import React from 'react';


const Duration = () => {
    return (

        <div className="field">
            <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Enter Trip Duration in DAYS" />
                <span className="icon is-left">
                    <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-right">
                    <i className="fas fa-check"></i>
                </span>
            </div>
        </div>

    );
}

export default Duration;