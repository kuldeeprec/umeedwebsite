import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Studenterp.css";
import { logoutUser } from "../actions/auth";
import { fetchStudent, clearFetchState } from "../actions/student";
class Studenterp extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logoutUser());
    console.log("hi");
  };
  componentWillUnmount() {
    this.props.dispatch(clearFetchState());
  }
  componentDidMount() {
    const { auth } = this.props;

    this.props.dispatch(fetchStudent(auth.user.userId));
  }
  render() {
    const { auth, student } = this.props;
    const { inProgress, isStudent } = student;
    console.log(isStudent);

    if (!auth.isLoggedin) {
      return <Redirect to="/" />;
    }
    if (!student) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div class="cont1">
          <div class="title1">
            <h2>My Profile</h2>
            {auth.isLoggedin && (
              <button className="student-logout" onClick={this.logOut}>
                logout
              </button>
            )}
          </div>
          <div class="home">
            <a href="#">Go to Home</a>
          </div>
          <div class="title2">
            <h3>My Information</h3>
            <div class="cont2">
              <div class="table1">
                <table>
                  <tr>
                    <td>Name</td>
                    <td>{student.student.name}</td>
                  </tr>
                  <tr>
                    <td>Father's Name</td>
                    <td>{student.student.fatherName}</td>
                  </tr>
                  <tr>
                    <td>Mother's Name</td>
                    <td>{student.student.motherName}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{student.student.gender}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth(DOB)</td>
                    <td>15/02/2001</td>
                  </tr>
                  <tr>
                    <td>Blood Group</td>
                    <td>AB</td>
                  </tr>
                  <tr>
                    <td>Admission Session</td>
                    <td>{student.student.admissionDate}</td>
                  </tr>
                  <tr>
                    <td>Academic Status</td>
                    <td>Regular</td>
                  </tr>
                  <tr>
                    <td>School's Name</td>
                    <td>The Sun Shine Senior Secondary School</td>
                  </tr>
                  <tr>
                    <td>Class</td>
                    <td>9th</td>
                  </tr>
                  <tr>
                    <td>Mobile No.</td>
                    <td>{student.student.mobile}</td>
                  </tr>
                  <tr>
                    <td>Email Id</td>
                    <td>{student.student.email}</td>
                  </tr>
                  <tr>
                    <td>Corresponding Address</td>
                    <td>VILL -MUBARAKPUR HARTARA POST-BAHARIABAD</td>
                  </tr>
                  <tr>
                    <td>District/City</td>
                    <td>Ghazipur</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>Uttar Pradesh</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>India</td>
                  </tr>
                  <tr>
                    <td>Pincode</td>
                    <td>275204</td>
                  </tr>
                </table>
              </div>
              <div class="table2">
                <table>
                  <tr>
                    <th>
                      <h3>Roll NO.: 12345</h3>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <h3>Enrollment NO.: 12345</h3>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="passport_picture_1545891480_486040.jpg"
                        alt="Photograph"
                      />
                      <br />
                      <p>Photograph</p>
                    </th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    student: state.student,
  };
}
export default connect(mapStateToProps)(Studenterp);
