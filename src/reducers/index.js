import { combineReducers } from "redux";
import Navbar from "./Navbar";
import auth from "./auth";
import student from "./student";
export default combineReducers({
  Navbar,
  auth,
  student,
});
