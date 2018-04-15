import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
//Project Specific
import ActivityDetail from './activity-detail';
import {fetchActivities} from '../actions/index';

class ActivityList extends Component {

  componentDidMount() {
    this.props.fetchActivities();
  }

  createListItems() {
    if (!this.props.activities.data) {
        return (
          <div className='col-sm-9 col-sm-offset-1 vessel-detail-box expandedBox'>Loading...</div>
        );
    }
    else{
      return this.props.activities.data.results.map((activity) => {
        return(
          <Link key={activity.id} to={ `/fistbump/activityexpanded/${activity.id}` }>
            <ActivityDetail key={activity.id} activityProp={activity} />
          </Link>
        );//for each activity
      }); //map

    } //else
  } //createListItems()

  render() {
    return(
      <div className="col-sm-10 col-sm-offset-1">
        <div className="row">
          {this.createListItems()}
        </div>
      </div>
    ); //return
  }//render()

}//component ActivityList

function mapStateToProps(state) {
  return{
    activities: state.activities
  };
}//mapStateToProps

function matchDispatchToProps(dispatch){
  return bindActionCreators({ fetchActivities: fetchActivities }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ActivityList);
