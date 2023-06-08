//src/context/user.js
import React, { useState, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";

//this component handles User Authentication
//signing up and logging in, and retrieving user info

//create context
const UserContext = React.createContext();

//create a provider component
//it manages the state below, state related to the user, likes user data, errors and other related data.
//The UserProvider component serves as a central place to manage user-related state and actions, 
//allowing other components to access and modify the user data and handle authentication-related errors. 
//It encapsulates the logic for fetching user data and handles different scenarios based on the response 
//received from the server.
function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  //set useState to an empty object u r going to 'get'
  //user IS an object
  //user init as false, no user is present to start. once the user is authenticated the user data gets updated, setUser(data)
  const [errors, setErrors] = useState([]);
  //state for an array of errors related to user actions
  const [courts, setCourts] = useState([]);
  const [signUpError, setSignUpError] = useState([]);
  const [loginError, setLoginError] = useState([]);
  const [autoLoginError, setAutoLoginError] = useState([]);
  //each hold error messages that connect to sign-up, login, and autologin 
  const navigate = useNavigate()
  //react router library allow nav between pages


  useEffect(() => {
    fetchUser('/me', 'GET')
  }, []);
  //triggers fetchUser function when the component is first rendered

  //fn below 
  //responsible for making HTTP reqs to the server to fetch user data or do sign-up or login
  //it takes 3 parameters, url, method and body
  //an object 'options' contains the HTTP method and headers
  // if body is provided it is stringified and added to the options object as the request body (GET has no body)
 //fetch fn sends the request to the specified URL with constructed options
 //it awaits the response and parses it as JSON (line 55)
 //if the response contains errors, (line 58) then the errors are put in the respective state (signupEror, loginerror, autologinerror)
 //if there are no errors (69) the user data is stored in the user state variable and the navigate fn
 //is used to redirect the user to the /games route.
 //If an error occurs during the req/resp an error message is stored in the error state varaibles 

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
  //async await fetch that hits signup, login, auto login
  //send a url, method and a body
  //get must be false for a get
  //if body true then set it
  //set another conditional in 44

//by declaring a fn as async, you don't need to explcitily create and return
//a promise object. the async keyword automatically wraps the function's
//return value in a resolved promise. if the function returns a value,
//the promise will be resolved with that value. if the fn throws an
//error the promise will be rejected with the thrown error.

//async promises are implicit
//when an async function completes its execution it will resolve
//the promise. the resolved value of the promise will depend
//on the value returned by the async fn. if the fn returns a 
//value, the promise will be resolved with that value. 

//await keyword pauses the execution of the fn until a promise is resolved.
//this allows you to write code that appears to be synchronous but
//still handles async operations. await goes w async.

//async fns simplify the syntax and eliminates the need for manunal promise creation and chaining.

  //async returns a promise (line 50)
//asyc allows u to use await inside the function to wait for the asynchronous operation to complete
//await keyword is used to pause the execution of the function until the awauted
//async operation is resolved or rejected. 
//in this case, 'await' is used before the fetch and response.json operations 
//and waits for the response to be received and parsed as JSON




  //original one before you tried to write async await at the bottom here
  // useEffect(() => {
  //   fetch("/me")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data, "in the fetch of '/me'");
  //       if (data.errors) {
  //         setLoggedIn(false);
  //       } else {
  //         setUser(data);
  //         setLoggedIn(true);
  //         setGames(data.games);
  //       }
  //     });
  // }, []);


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

  //make one for login and signup too
  //then i can combo it all in one 
  //helper function
  
//   const fetchUserGames = async () => {
//     try {
//       const response = await fetch(`/me`);
//       const gamesData = await response.json();
//       setGames(gamesData);
//     } catch (error) {
//       console.error('Error fetching user games:', error);
//     }
//   };
  

  //^ write async function here

  //useEffect
  //empty dependency array to get user on mount and establish who user is
  //run this set the user in here
  //fetch the games for that user too (later on)
  //hit /me get the user
  //in the value return the user
  //the user is held in state, if the user changes we know about it

  //useEffect - when i refresh the page
  //hit the me route, checks user show to see if there is a user n the session hash
  //returns a user or an error
  //set the user in state
  //setLogged in becomes true or false depending on the obejct you get back

  //send nested json, get the user and their games instead
  //then you'd delete the fetchGames from Login and Signup

  //I call addGame in the GameForm component to trigger this POST when I want the user to post
  const addGame = (game) => {
    // debugger
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
  //clear the errors once it is successful
  //all games and the new one aka data w/spread operator
  //post it after I stringify it and then add it to the existing games
  //coming from GameForm

  //Cara's new patchGame that looks like addGame, trying to call this in EditGame component
  //so the game can be edited and it can be saved to the db
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
    //loggedIn is now part of global state
    //component just needs to check logged in, t or f
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

//any child that needs access to global state i can pass here
//nancy video auth in rails if u need
//parents and children

//global state
//wrap any component that needs acces to global state we wrap in consumer

//good to put useContext in global state
//refresh the page the context gets refreshed
//fetch to /me we come to user.js

//global state can be handled internally in react w useContext
