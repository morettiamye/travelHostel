import React from "react";

class Favorite extends React.Component {
    state = {
        className: 'far fa-star'
    }

    toggleClass = () => {
        if (this.state.className === 'far fa-star') {
            this.setState({ className: 'fas fa-star' })
        } else {
            this.setState({ className: 'far fa-star' })
        }
    }

    render() {
        return (
            <span className={this.state.className} onClick={this.toggleClass}></span>
        );
    }
}

export default Favorite;