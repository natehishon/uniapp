import React from "react"
import PropTypes from "prop-types"
class MyProgress extends React.Component {
  render () {
    return (
      <React.Fragment>
          <h3 className="progress-title">Progress</h3>
          <div className="my-progress-container">
        <div className="left-container">
            <div className="left-data-container">
                <strong>Cumulative Gpa:</strong><br></br>
                <strong>Degree:</strong><br></br>
                <strong>Major:</strong><br></br>
                <strong>Department:</strong><br></br>
                <strong>Catalog:</strong><br></br>
            </div>
            <div className="left-data-container2">
                {this.props.gpa}<br></br>
                {this.props.degree}<br></br>
                {this.props.major}<br></br>
                {this.props.department}<br></br>
                {this.props.catalog}<br></br>
            </div>

        </div>

        <div className="right-container">
            <strong>Progress: {this.props.progress}</strong>
          <progress className="progress is-success" value={this.props.progress} max="100">{this.props.progress}%</progress>

            <strong>Total Credits: {this.props.credits}</strong>
            <progress className="progress is-success" value={this.props.credits} max="100">this.props.credits}%</progress>
        </div>

          </div>
          <div className="description-container">
              <strong>Description: </strong>
              <span>{this.props.description}</span>
          </div>

          <div className="schedule-container">
              <h3 className="semester-schedule-title">Current Semester Schedule</h3>
              <div className="plan-table-container">
                  <table className="table">
                      <thead>
                      <tr>
                          <th>Class</th>
                          <th>Schedule</th>
                          <th> </th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <th>Risk Mngmt 202 - Emergency Protocol</th>
                          <td>Monday 7:00AM - 9:30PM
                              Bohol Hall - Room 105</td>
                          <td><a href="#">info</a></td>
                      </tr>

                      <tr>
                          <th>Scaring 257 - Tactical Thinking</th>
                          <td>Tues 7:00PM - 9:30PM
                              Scare Hall - Room 317</td>
                          <td><a href="#">info</a></td>
                      </tr>

                      </tbody>
                  </table>
              </div>
          </div>

      </React.Fragment>
    );
  }
}

MyProgress.propTypes = {
  gpa: PropTypes.string,
  degree: PropTypes.string,
  major: PropTypes.string,
  department: PropTypes.string,
  catalog: PropTypes.string,
  description: PropTypes.string,
  progress: PropTypes.string,
  credits: PropTypes.string
};
export default MyProgress
