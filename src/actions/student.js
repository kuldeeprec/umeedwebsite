import { STUDENT_DATA } from "./actionTypes";
import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";
export function fetchStudent() {
  return (dispatch) => {
    const url = APIUrls.fetchStudent();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ rollno }),
    }).then((data) => {
      console.log(data);
      dispatch(updateStudeunt(data.data.student));
    });
  };
}

export function updateStudeunt(student) {
  return {
    type: STUDENT_DATA,
    student,
  };
}
