import './App.css';
import AppRoutes from './routes/AppRoutes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TEST_endPointUrl } from './common/api/endPointUrl';
import { createContext } from "react"

const Tokens = createContext();
function App() {
  const [token, setToken] = useState()
  const [couresPageData, setCouresPageData] = useState()


  useEffect(() => {
    const Token = () => {
      const data = new FormData();
      data.append('username', 'ImagnusAPIs');
      data.append('password', '5EFGJd6m');

      const config = {
        method: 'post',
        url: TEST_endPointUrl + 'api/student/v2/auth/token/',
        data: data
      };

      axios(config)
        .then((response) => {
          if (response.data.access_token) {
            setToken(response.data.access_token)
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    }
    Token()
  }, [token])

  useEffect(() => {
    var Alldata = (token) => {

      fetch(TEST_endPointUrl + "api/student/get_all_preferences/", {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(res => {
        if (res.length) {
          setCouresPageData(res)
        }
      })
    }
    Alldata(token)
  }, [token])

  return (
    <>
      <Tokens.Provider value={token}>
        <AppRoutes couresPageData={couresPageData} />
      </Tokens.Provider>
    </>
  );
}

export default App;
export { Tokens };
