import axios from "axios"

export default {
  async getMatch(match_id) {
    let res = await axios.get("http://localhost:3000/api/match/" + match_id);
    return res.data;
  }
}