export const SAVE_USER = "SAVE_USER";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const FETCH_CHATS = "FETCH_CHATS";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const GET_CHATS_LOADING = "GET_CHATS_LOADING";
export const GET_CHATS_ERROR = "GET_CHATS_ERROR";
export const CHECK_AUTHENTICATION = "CHECK_AUTHENTICATION";

export const LOG_IN = "LOG_IN";

export const login = (email, password) => {
  return async (dispatch) => {
    const data = {
      email: email,
      password: password,
    };
    const optionsPost = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(
        `http://localhost:3001/users/login`,
        optionsPost
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
