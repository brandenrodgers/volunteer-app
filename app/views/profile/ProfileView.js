import React, { Component } from 'react';
import Hello from '../../components/Hello'
import Event from '../../components/Event'
import UsersHello from '../../containers/UsersHello'
import './divBox.css'
import {Link} from 'react-router';
import AboutMe from '../../components/aboutMe/AboutMe';
import ProfileChart from '../../components/profileChart/ProfileChart';
import FeaturedEvents from '../../components/featuredEvents/FeaturedEvents'
require('bootstrap/dist/css/bootstrap.css');

  /// <div className="col-sm-2">
          //     <br/>
          //     <AboutMe/>
          // </div>
          class ProfileView extends Component {
            render() {
              return (
                <div> 
                <div id="outer"> 
                <div className="col-sm-2 col-xs-12" id="lefttoc"><AboutMe/></div>
                <div className="col-sm-8 col-xs-12" id="maptoc">
                <h2> Lets test the event Lists </ h2>
                <div id="inner"> 
                <div id="box1">
                <h1> Unconfirmed Events</h1> 
                <Event />
                </div> 
                <div id="box2"> 
                <h1> Confirmed Events </h1> 
                <Event /> 
                </div> 
                </div> 
                <div id="bottom">
                <div className="col-sm-2 col-xs-12" id="lefttoc"></div>
                <div className="col-sm-8 col-xs-12" id="maptoc">
                <h1> Event History </h1> 
                <Event /> 
                </div> 
                </div> 
                </div> 
                <div className= "col-sm-2 col-xs-12" id="righttoc">


                
                <br/>
                <FeaturedEvents />
                <h3>Hours</h3>
                <br/>
                <h3>All Time: 32</h3>
                <br/>
                <h3> Last Month: 6</h3>
                <ProfileChart />
          
                </div>
                </div>
                </div> 

                );
              }
            }

            export default ProfileView
