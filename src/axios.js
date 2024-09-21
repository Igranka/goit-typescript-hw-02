import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const imageSerfer = async (query, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 25,
      client_id: "E6IZEN8sRkde_OzRNT7h0egTQSebPhU31Q-z5V21eaI",
      orientation: "landscape",
    },
  });
  return response.data;
};