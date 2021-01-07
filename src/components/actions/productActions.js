export const FETCH_REDDIT_BEGIN = "FETCH_REDDIT_BEGIN";
export const FETCH_REDDIT_SUCCESS = "FETCH_REDDIT_SUCCESS";
export const FETCH_REDDIT_FAILURE = "FETCH_REDDIT_FAILURE";

export function fetchReddit(arr = "Cyberpunk") {
  const url = "https://www.reddit.com/r/" + arr + ".json";
  return (dispatch) => {
    dispatch(fetchRedditBegin());
    return fetch(url)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(
          fetchRedditSuccess({
            subreddit: json.data.children[0].data.subreddit,
            author: json.data.children[0].data.author,
            childrens: json.data.children,
          })
        );
        return json.data;
      })
      .catch((error) => dispatch(fetchRedditFailure(error)));
  };
}

export function searchReddit(arr) {
  const url = "https://www.reddit.com/search.json?q=" + arr;
  return (dispatch) => {
    dispatch(fetchRedditBegin());
    return fetch(url)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(
          fetchRedditSuccess({
            subreddit: "searchReddit",
            author: json.data.children[0].data.author,
            childrens: json.data.children,
          })
        );
        return json.data;
      })
      .catch((error) => dispatch(fetchRedditFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchRedditBegin = () => ({
  type: FETCH_REDDIT_BEGIN,
});

export const fetchRedditSuccess = (data) => ({
  type: FETCH_REDDIT_SUCCESS,
  payload: data,
});

export const fetchRedditFailure = () => ({
  type: FETCH_REDDIT_FAILURE,
  payload: false,
});
