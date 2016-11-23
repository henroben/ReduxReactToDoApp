import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class ToDoSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {dispatch, showCompleted, searchText} = this.props;
        return(
            <div className="containter__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search items" value={searchText} onChange={() => {
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }} className="form-control"/>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(ToDoSearch);