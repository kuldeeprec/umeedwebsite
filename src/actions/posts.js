import { UPDATE_POST } from "./actionTypes";
export function fetchposts() {
  return (dispatch) => {
    const url = "";
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POST,
    posts: posts,
  };
}
