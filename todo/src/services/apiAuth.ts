import axios from "axios";
axios.defaults.withCredentials = true;
export async function postJoin(user) {
  try {
    await axios.post("http://localhost:8001/auth/join", {
      email: user[0],
      nick: user[1],
      password: user[2],
    });
  } catch (err) {
    console.log(err);
  }
}

export async function login(user) {
  try {
    const response = await axios.post("http://localhost:8001/auth/login", {
      email: user[0],
      password: user[1],
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
