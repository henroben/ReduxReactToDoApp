import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

import * as actions from 'actions';

export class AddToDo extends React.Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var strText = this.refs.addtext.value;

        if(strText.length > 0) {
            this.refs.addtext.value = '';
            dispatch(actions.startAddToDo(strText));
        } else {
            this.refs.addtext.focus();
        }
    }
    render() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="testForm">
                    <input type="text" ref="addtext" placeholder="What do you need to do?" className="form-control"/>
                    <Button type="submit" bsStyle="primary" block>Add</Button>
                </form>
            </div>
        );
    }
};

export default connect()(AddToDo);