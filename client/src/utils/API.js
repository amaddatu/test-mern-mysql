import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  registerUser: function(email, password){
    //can add a hash function later to increase security
    return axios.post("/api/user", { email: email, password: password});
  }
  // //gets a single random dog
  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  // //probably used for searching for a particular breed
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // //probably used for dropdown
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }
};


