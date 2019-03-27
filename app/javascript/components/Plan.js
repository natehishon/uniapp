import React from "react"
import PropTypes from "prop-types"
class Plan extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="requirement-container">
            <h2 className="require-title">Requirements</h2>
            <div className="track-container">
                <h3 className="plan-class-title">Liberal Arts & Monstrosities: 6 Credits</h3>
                <p className="plan-complete">Complete all of the following items. <i className="fas fa-check-circle green-text"></i> <span className="green-text">2 of 2 Completed.</span> </p>
                <div className="plan-table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th className="course-width">Course</th>
                            <th>Grade</th>
                            <th>Term</th>
                            <th>Credits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th className="green-text">Completed</th>
                            <td className="course-width">Monst-221    Interpretive Dance</td>
                            <td>3.00</td>
                            <td>2018FA</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th className="green-text">Completed</th>
                            <td className="course-width">Monst-231    Monsters in Human Media</td>
                            <td>3.00</td>
                            <td>2018FA</td>
                            <td>3</td>
                        </tr>

                        </tbody>
                    </table>

                </div>
            </div>

            <div className="track-container">
                <h2 className="plan-class-title">Scaring: 12 Credits</h2>
                <p className="plan-in-prog">Complete all of the following items. 1 of 4 Completed. </p>

                <div className="plan-table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th className="course-width">Course</th>
                            <th>Grade</th>
                            <th>Term</th>
                            <th>Credits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th className="green-text">Completed</th>
                            <td className="course-width">Scare-314    Cognitive Neuroscience </td>
                            <td>3.00</td>
                            <td>2018FA</td>
                            <td>3</td>
                        </tr>

                        <tr>
                            <th className="yellow-text">In Progress</th>
                            <td className="course-width">Risk Mngmt-202    Emergency Protocol</td>
                            <td>-</td>
                            <td>2019SP</td>
                            <td>3</td>
                        </tr>

                        <tr>
                            <th className="yellow-text">In Progress</th>
                            <td className="course-width">Scaring-257    Tactical Thinking</td>
                            <td>-</td>
                            <td>2019SP</td>
                            <td>3</td>
                        </tr>

                        <tr>
                            <th className="red-text">Not Started</th>
                            <td className="course-width">Scaring-102    Hiding Techniques</td>
                            <td>-</td>
                            <td>2013FA</td>
                            <td>3</td>
                        </tr>

                        </tbody>
                    </table>
                </div>


            </div>


            <div className="track-container">
                <h3 className="plan-class-title">Other Studies</h3>
                <p className="plan-complete">Complete all of the following items. <i className="fas fa-check-circle green-text"></i> <span className="green-text">1 of 1 Completed.</span> </p>
                <div className="plan-table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th className="course-width">Course</th>
                            <th>Grade</th>
                            <th>Term</th>
                            <th>Credits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th className="green-text">Completed</th>
                            <td className="course-width">Dance-156    Ballroom Dancing</td>
                            <td>3.00</td>
                            <td>2018FA</td>
                            <td>3</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>


      </React.Fragment>
    );
  }
}

Plan.propTypes = {
  major: PropTypes.string
};
export default Plan
