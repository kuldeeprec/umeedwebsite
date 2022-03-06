import { STUDENT_DATA } from "../actions/actionTypes";

export default function student(state = [], action) {
  switch (action.type) {
    case STUDENT_DATA:
      return action.student;
    default:
      return state;
  }
}
