import React from 'react';
import {withRouter} from 'react-router-dom';

class BookShowMyActivity extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        <>
        <div className="my-activity-header">My Activity</div>
        <div className="my-activity-rating"></div>
        <div className="my-activity-shelves"></div>
        <div className="my-activity-review"></div>
        </>
    }

}