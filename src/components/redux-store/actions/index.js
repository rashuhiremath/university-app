export const SHOW_SIGNUP_FORM = "SHOW_SIGNUP_FORM";
export const HIDE_SIGNUP_FORM = "HIDE_SIGNUP_FORM";
export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_BLOGS = "FETCH_BLOGS";
// in this file we're going to export our actions
// what

// this is called an ACTION CREATOR
// a function that returns an action (a JS object)

export const showFormAction = (toShow) => ({
  type: SHOW_SIGNUP_FORM,
  payload: toShow, // this is going to be the book we intend to add to the cart
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});

export const hideFormAction = (toHide) => ({
  type: HIDE_SIGNUP_FORM,
  payload: toHide,
});
// the function returns an object, so you can dispatch it INSTEAD of dispatching the object

export const fetchTheEvents = () => {
  return async (dispatch, getState) => {
    console.log("this is my action");
    try {
      let resp = await fetch("http://localhost:3030/calender");
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: FETCH_EVENTS,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTheBlogs = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:3030/universityBlog");
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: FETCH_BLOGS,
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
