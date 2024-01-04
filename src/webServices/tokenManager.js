import { webUrls } from "./webUrls";
import axios from "axios"

export  async function TokenManage() {
    const username = process.env.REACT_APP_TOKEN_USER_NAME
    const password = process.env.REACT_APP_TOKEN_PASSWORD
    const baseURL = process.env.REACT_APP_PRODUCTION_URL
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    
        try {
            let response = await axios.post(baseURL + webUrls.TOKEN_URL, formData)
            if (response.status === 200) {
               return (response.data.access_token)
            }
        } catch (e) {
            return e
        }
}
