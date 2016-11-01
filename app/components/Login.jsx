import React from 'react';
var {Button, Grid, Col, Row} = require('react-bootstrap');

export var Login = React.createClass({
    render: function () {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} xsHidden></Col>
                        <Col md={6}>
                            <h1 className="page-title">Todo App</h1>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <p>Please log in with your GitHub account to continue</p>
                                    <form ref="loginForm" className="loginForm">
                                        <input type="text" ref="username" placeholder="Username" className="form-control"/>
                                        <input type="password" ref="password" placeholder="Password" className="form-control"/>
                                        <Button type="submit" bsStyle="primary" block>Login With GitHub</Button>
                                    </form>
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

export default Login;