import React from 'react';

const Button = (props) => {
    return (
        <button className="button is-link">{props.children}</button>
    );
}

export default Button;