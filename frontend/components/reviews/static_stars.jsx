import React from 'react';

class StaticStars extends React.Component {

    constructor(props) {
        super(props);
    }

    Star(num) {
        if (this.props.rating <= num - 0.75) {
            return (
                <span id={num} className="inactive-star" /> 
            )
        }

        if (this.props.rating > num - 0.75 && this.props.rating <= num - 0.25) {
            return (
                <span id={num} className="static-star-half" />
            )
        }

        if (this.props.rating > num - 0.25) {
            return (
                <span id={num} className="static-star-full" />
            )
        }
    }

    render() {
        return (
            <>
                {this.Star(5)}
                {this.Star(4)}
                {this.Star(3)}
                {this.Star(2)}
                {this.Star(1)}
            </>
        )
    }
}

export default StaticStars;