import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ActivityDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }//constructor

  render() {
    return(
      <div className="col-sm-2ThreeQuarter vessel-detail-box text-center">
        <img src={this.props.activityProp.image} height="170" width="100%"/>
        <h4><strong>{this.props.activityProp.title} in {this.props.activityProp.city}</strong></h4>
        <p>Hosted by {this.props.activityProp.createdBy}</p>
        <p>{this.props.activityProp.description}</p>
      </div>
    )
  }//render
}

export default ActivityDetail;
