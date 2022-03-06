import React, { Component } from "react";
import { connect } from "react-redux";
import "./Studenterp.css";
class Studenterp extends Component {
  render() {
    const { student } = this.props;
    console.log(student);
    return (
      <div>
        <div class="cont1">
          <div class="title1">
            <h2>My Profile</h2>
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
                    <td>Sanjay Yadav</td>
                  </tr>
                  <tr>
                    <td>Father's Name</td>
                    <td>R S Yadav</td>
                  </tr>
                  <tr>
                    <td>Mother's Name</td>
                    <td>Asha Yadav</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>Male</td>
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
                    <td>2019-2020</td>
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
                    <td>7388797731</td>
                  </tr>
                  <tr>
                    <td>Email Id</td>
                    <td>sanjayyadav.sbd@gmail.com</td>
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
