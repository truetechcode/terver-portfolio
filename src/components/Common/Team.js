import React, { Component } from 'react';
import TeamMember from './TeamMember';

import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";

const teamMembers = [
  {name: 'Kay Garland', title: 'Lead Designer', image: img1, twitter: '', facebook: '', linkedin: ''},
  {name: 'Larry Parker', title: 'Lead Marketer', image: img2, twitter: '', facebook: '', linkedin: ''},
  {name: 'Diana Pertersen', title: 'Lead Developer', image: img3, twitter: '', facebook: '', linkedin: ''}
]
class Team extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => {
            return <TeamMember {...member} key={index} />
          })}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>  
    )
  }
}

export default Team
