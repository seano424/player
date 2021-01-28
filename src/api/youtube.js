import axios from "axios";

const KEY = "AIzaSyDTGlG4dOYUd8TM3peZKKs9WKhkLgwa4yo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
