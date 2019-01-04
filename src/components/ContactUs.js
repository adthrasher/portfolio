import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contact: {/*Feel free to contact me {/*for any work or suggestions below*/}
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:&nbsp;  
                  <a href={"https://www.linkedin.com/in/" + resumeData.linkedinId} target="_blank" rel="noopener noreferrer">{resumeData.linkedinId}</a>
                </h4>
              </div>
            </aside>
          </div>
 		  <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email:&nbsp;  
                  <a href={"mailto:" + resumeData.email}>{resumeData.email}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
