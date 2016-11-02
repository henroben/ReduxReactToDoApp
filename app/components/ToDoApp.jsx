import React from 'react';
import * as Redux from 'react-redux';

var {Grid, Row, Col} = require('react-bootstrap');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
import * as actions from 'actions';


export var ToDoApp = React.createClass({
    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    },
    render() {
        return(
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} xsHidden></Col>
                        <Col md={6}>
                            <h1 className="page-title">Todo App</h1>
                            <ToDoSearch/>
                            <ToDoList/>
                            <AddToDo/>
                        </Col>
                        <Col md={3} xsHidden>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

export default Redux.connect()(ToDoApp);