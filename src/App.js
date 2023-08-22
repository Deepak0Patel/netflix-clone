import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./app/HomeScreen/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route as RoutedRoute,
} from "react-router-dom"; // Alias Route as RoutedRoute
import LoginScreen from "./app/HomeScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/features/userSlice";
import ProfileScreen from "./app/HomeScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <RoutedRoute path="/profile" element={<ProfileScreen />} />
            <RoutedRoute path="/" element={<HomeScreen />} />
            {/* Use element prop */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
