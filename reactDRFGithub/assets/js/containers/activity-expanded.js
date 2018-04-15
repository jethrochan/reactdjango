import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchActivity, deleteActivity} from '../actions';

class ActivityExpandedComponent extends Component {

    componentDidMount() {
      const {id} = this.props.match.params; //from react router
      this.props.fetchActivity(id);
    }

    onDeleteClick() {
      const {id} = this.props.match.params; //from react router
      this.props.deleteActivity(id, () => {
        this.props.history.push('/fistbump/');
      }); //action creator
    }

    render() {
        if (!this.props.activity) {
          return (
            <div className='col-sm-10 col-sm-offset-1 expandedBox'>
                <h2>Loading...</h2>
            </div>
          ); //return
        }
        console.log(this.props.activity);
        return (
            <div className='col-sm-10 col-sm-offset-1 expandedBox'>
              <div className='row'>
                <div className='col-sm-8'>
                  <h4><strong>{this.props.activity.data.title} in {this.props.activity.data.city}</strong></h4>
                  <p>Hosted by {this.props.activity.data.createdBy}</p>
                  <p>{this.props.activity.data.description}</p>

                  <button
                      className="btn btn-danger"
                      onClick={this.onDeleteClick.bind(this)}
                    >
                    Delete
                  </button>
                </div>
                <div className='col-sm-4'>
                  <img src={this.props.activity.data.image} height="180" width="250"/>
                </div>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { activity: state.activity  };
}

export default connect(mapStateToProps, { fetchActivity, deleteActivity })(ActivityExpandedComponent);
