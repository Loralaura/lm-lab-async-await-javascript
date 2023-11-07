import fetch from "node-fetch";

const jsonTypicode = "http://placekitten.com/200/300";

const fetchData = async (apiEndPoint) => {
  const response = await fetch(apiEndPoint);
  try {
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
