import axios from 'axios';

const BASE_URL = `http://localhost:5000`;

const signup = async (user) => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/signup', { user });
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
const login = async (user) => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/login', { user });
    // console.log(response.data)
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const logout = async () => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/logout');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(BASE_URL + `/api/users/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const addSneakertoUser = async (sneakerObj) => {
  try {
    const response = await axios.post(BASE_URL + '/api/users/sell-sneaker', sneakerObj);
    return response.data;
  } catch (err) {
    console.log(err);
  }
  uploadSneaker(sneakerObj);
};

const uploadSneaker = async (sneakerObj) => {
  try {
    const response = await axios.post(BASE_URL + '/api/sneakers/add-sneaker-in-DB', sneakerObj);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getSneakerById = async (id) => {
  try {
    const response = await axios.get(BASE_URL + '/api/sneakers/get-sneaker/' + id);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const getAllSneakers = async () => {
  try {
    const response = await axios.get(BASE_URL + '/api/sneakers/get-sneakers');
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const savingSneakers = async (userId, sneaker) => {
  try {
    const response = await axios.post(BASE_URL + `/api/users/liking-sneakers/:${userId}`, sneaker);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export {
  signup,
  login,
  logout,
  getUserById,
  addSneakertoUser,
  uploadSneaker,
  getSneakerById,
  getAllSneakers,
  savingSneakers
};
