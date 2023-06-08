import React from "react";
import "./App.css";
import Routes from "./routes";
import MainLayout from "./layouts";
import {
  ACTION_TYPE,
  Actions,
  Profile,
  ProfileContext,
  ProfileDispatchContext,
} from "./context";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const profileReducer = (state: Profile, action: Actions) => {
  const { type, payload } = action;
  let nextState = { ...state };
  switch (type) {
    case ACTION_TYPE.INIT:
      nextState = !!payload ? { ...payload } : ({} as Profile);
      return nextState;
    case ACTION_TYPE.INCREASE_WIN:
      return nextState;
    case ACTION_TYPE.INCREASE_LOSE:
      return nextState;
    default:
      return state;
  }
};

function App() {
  const [profile, dispatch] = React.useReducer(profileReducer, {} as Profile);

  return (
    <ProfileContext.Provider value={profile}>
      <ProfileDispatchContext.Provider value={dispatch}>
        <Navbar />
        <MainLayout>
          <Routes />
        </MainLayout>
        <Footer />
      </ProfileDispatchContext.Provider>
    </ProfileContext.Provider>
  );
}

export default App;
