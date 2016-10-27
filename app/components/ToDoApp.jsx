var React = require('react');
var {Grid, Row, Col} = require('react-bootstrap');
var uuid = require('node-uuid');
var moment = require('moment');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';


var ToDoApp = React.createClass({
    render: function() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} xsHidden></Col>
                        <Col md={6}>
                            <h1 className="page-title">Todo App</h1>
                            <ToDoSearch/>
                            <ToDoList/>
                            <AddToDo/>
                        </Col>
                        <Col md={3} xsHidden></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

module.exports = ToDoApp;