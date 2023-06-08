import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ACTION_TYPE, ProfileDispatchContext } from "../context";
import HomePage from "../pages/HomePage";

type Routers = {
  path: string;
  element: ReactElement;
  exact?: boolean;
  isAuth?: boolean;
};

const Routes = () => {
  const { token } = useAuth();
  const dispatchContext = React.useContext(ProfileDispatchContext);

  const router: Routers[] = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
  ];

  const mappingRoute = (router: Routers[]) => {
    if (!router) return;
    return (
      <Switch>
        {router.map((item, index) => {
          if (!!item.isAuth && !token) {
            return <Redirect to="/" key={index} />;
          }
          return (
            <Route exact={item.exact} path={item.path} key={index}>
              {item.element}
            </Route>
          );
        })}
      </Switch>
    );
  };

  React.useEffect(() => {
    if (!token) return;
    const profile = {
      username: "Tuyền",
      phone_number: "0321321321",
    };
    dispatchContext({ type: ACTION_TYPE.INIT, payload: profile });
  }, [dispatchContext, token]);

  return <Router>{mappingRoute(router)}</Router>;
};

export default Routes;
