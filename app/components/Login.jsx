import React from 'react';
import * as Redux from 'react-redux';
var {Button, Grid, Col, Row} = require('react-bootstrap');

import * as actions from 'actions';

export var Login = React.createClass({
    onLogin() {
        var {dispatch} = this.props;

        dispatch(actions.startLogin());
    },
    render: function () {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} xsHidden></Col>
                        <Col md={6}>
                            <h1 className="page-title">Todo App</h1>
                            <div className="panel panel-default">
                                <div className="panel-body callout-auth">
                                    <p>Please log in with your GitHub account to continue</p>
                                    {/* <form ref="loginForm" className="loginForm">
                                        <input type="text" ref="username" placeholder="Username" className="form-control"/>
                                        <input type="password" ref="password" placeholder="Password" className="form-control"/>
                                        <Button  bsStyle="primary" block>Login With GitHub</Button>
                                    </form> */}
                                    <button className="btn btn-primary btn-block" onClick={this.onLogin}>Login with GitHub</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} xsHidden></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

export default Redux.connect()(Login);