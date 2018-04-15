import React from 'react';
import ActivityList from '../containers/activity-list';
import BannerImage from './bannerimage';
import {Link} from 'react-router-dom';
require('../../scss/style.css') //global install of scss, put in this main aggregrator file

const Home = () => (
  <div>
    <div className="row">
      <BannerImage />
      <div className="text-center" style={{ marginTop: '30px', marginBottom: '30px' }}>
        <Link to="/fistbump/activitynew/" className="btn-lg btn-info">Create A New Activity</Link>
      </div>
      <ActivityList />
    </div>
  </div>
)

export default Home;
