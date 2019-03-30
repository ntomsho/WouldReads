import React from 'react';
import {withRouter} from 'react-router';

class AddShelfForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        return e => this.setState({
            title: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const newShelf = Object.assign({}, this.state);
        newShelf.default_shelf = false;
        this.props.createShelf(newShelf);
    }

    render() {
        return (
            <form className="add-shelf-form" onSubmit={this.handleSubmit}>
                <p className="add-shelf-header">Add a Shelf:</p>
                <input type="text" onChange={this.update()} />
                <input type="submit" value="add" className="add-shelf-button"/>
            </form>
        )
    }

}

export default AddShelfForm;