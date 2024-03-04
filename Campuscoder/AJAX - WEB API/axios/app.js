// Cara 1
axios
  .get("https://swapi.dev/api/people/1")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // console.log(err);
    alert(err.message);
  });

// Cara 2
const getPeople = async (id) => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.status);
    console.log(error.response.data);
  }
};

// Study Case
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getJokes = async () => {
  try {
    // Menambahkan data header
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "No Jokes Available!";
  }
};

const generateJoke = async () => {
  const jokeText = await getJokes();
  const newList = document.createElement("LI");
  newList.append(jokeText);
  jokes.append(newList);
};

button.addEventListener("click", generateJoke);
