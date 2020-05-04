import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h4>{education.school}</h4>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        </div>
      })

      //var workbullet = this.props.data.work
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h4>{work.company}</h4>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul>
                {work.description.split(";").map(item =>
                    <li key={item.index}>
                        {item}
                    </li>)}
            </ul>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })

        var publications = this.props.data.publications.map(function(publications){
            return <div key={publications.title}>
                <h4><a href={publications.link}>{publications.title}</a></h4>
                <p className="info">{publications.authors}</p>
                <p>{publications.description}</p>
            </div>
        })


        var awards = this.props.data.awards.map(function (awards) {
            return <div key={awards.index}>
                <h4>{awards.title}</h4>
                <p>-{awards.years}</p>
            </div>
        })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="two columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="ten columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

          <div className="row work">
              <div className="two columns header-col">
                  <h1><span>Publications</span></h1>
              </div>
              <div className="ten columns main-col">
                  {publications}
              </div>
          </div>


      <div className="row work">
         <div className="two columns header-col">
            <h1><span>Experience</span></h1>
         </div>
         <div className="ten columns">
          {work}
        </div>
    </div>



    <div className="row skill">
         <div className="two columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="ten columns main-col">
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>

          <div className="row education">
              <div className="two columns header-col">
                  <h1><span>Award</span></h1>
              </div>
              <div className="ten columns main-col">
                  <div className="row item">
                      <ul className="twelve columns">
                          {awards}
                      </ul>
                  </div>
              </div>
          </div>

   </section>
    );
  }
}

export default Resume;
