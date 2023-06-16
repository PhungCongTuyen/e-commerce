import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ACTION_TYPE, ProfileDispatchContext } from "../context";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import NotFoundPage from "../pages/NotFoundPage";
import DetailPage from "../pages/DetailPage";
import ROUTES from "../utils/constants/routesConstant";

type Routers = {
  path: string | string[];
  element: ReactElement;
  exact?: boolean;
  isAuth?: boolean;
};

export function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Routes = () => {
  const { token } = useAuth();
  const dispatchContext = React.useContext(ProfileDispatchContext);

  const router: Routers[] = [
    {
      path: ROUTES.HOME,
      element: <HomePage />,
      exact: true,
    },
    {
      path: [ROUTES.BDS_FOR_RENT, ROUTES.BDS_FOR_SELL, ROUTES.VEHICLE_FOR_RENT],
      element: <CategoryPage />,
      exact: true,
    },
    {
      path: [
        ROUTES.BDS_FOR_RENT_DETAIL,
        ROUTES.BDS_FOR_SELL_DETAIL,
        ROUTES.VEHICLE_FOR_RENT_DETAIL,
      ],
      element: <DetailPage />,
      exact: true,
    },
    {
      path: "*",
      element: <NotFoundPage />,
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

  return (
    <Router>
      <ScrollToTop />
      {mappingRoute(router)}
    </Router>
  );
};

export default Routes;
