import React, { useState, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  const [errors, setErrors] = useState([]);
  const [courts, setCourts] = useState([]);
  const [signUpError, setSignUpError] = useState([]);
  const [loginError, setLoginError] = useState([]);
  const [autoLoginError, setAutoLoginError] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    fetchUser('/me', 'GET')
  }, []);

  const fetchUser = async (url, method, body = false) => {
    try {
      const options = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(url, options);
       console.log("Response Not Ok")
      const data = await response.json();
        console.log(data, "in the fetch of '/me'");
      if (data.errors) {
        let err = data.errors.map((e) => <li>{e}</li>)
        
        if (url === "/signup"){
          setSignUpError(err)
        } else if (url === "/login") {
          setLoginError(err)
        } else {
          setAutoLoginError(err)
        }
      } else {
        setUser(data);
        navigate('/games');
      }
    } catch (error) {
      let message = [<li>Server Unresponsive</li>]
         
      if (url === "/signup"){
        setSignUpError(message)
      } else if (url === "/login") {
        setLoginError(message)
      } else {
        setAutoLoginError(message)
      }
      console.log("error", error)
    }
  };

    useEffect(() => {
        console.log("useEffect for initial fetch for '/courts'")
        fetch('/courts')
        .then(response => {
            if (response.ok){
                response.json().then(data => {
                    console.log(data, "new courts")
                    setCourts(data)
                })
            } else {
                response.json().then(error => {
                    console.log(error.error, "courts load error")
                })
            } 
        })
    }, [])

    const addCourt = (addedCourt) => {
        setCourts([...courts, addedCourt])
    }

  const addGame = (game) => {
    fetch("/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          console.log(data, "gucci");
          const errorLis = data.errors.map((e) => <li>{e}</li>);
          setErrors(errorLis);
        } else {
          console.log(data);
          setUser({...user, games: [...user.games, data]})
          alert("Game added!");
          setErrors([]);
        }
      });
  };
  
  const patchGame = (editGame) => {
    fetch(`/games/${editGame.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editGame),
    })
      .then((response) => response.json())
      .then((editGameData) => {
        if (editGameData.errors) {
          console.log(editGameData, "new edited game today");
          const errorLis = editGameData.errors.map((error) => <li>{error}</li>);
          setErrors(errorLis);
        } else {
          const newGames = user.games.map((game) => {
            if (game.id === editGame.id) {
              return editGameData;
            } else {
              return game;
            }
          });
          setUser({...user, games: newGames});
          alert("game updated!");
          setErrors([]);
        }
      });
  };

  const logout = () => {
    setUser(false)
  }


  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        fetchUser,
        signUpError,
        loginError,
        autoLoginError,
        logout,
        addGame,
        patchGame,
        errors,
        addCourt,
        courts,
        setCourts
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

