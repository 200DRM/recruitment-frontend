import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/routes';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { Map } from './components/Map';
import { Data } from './views/Data';
import { Secondary } from './views/Secondary';
import { getCookie } from './helpers/cookie';

export const App = () => {
  const token = getCookie('token') || '';

  return (
    <Routes>
      <Route index element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route
        path={ROUTES.home}
        element={
          <PrivateRoute sessionKey={token}>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.map}
        element={
          <PrivateRoute sessionKey={token}>
            <Map />
          </PrivateRoute>
        }
      >
        <Route path={ROUTES.secondary} element={<Secondary />} />
        <Route path={ROUTES.data} element={<Data />} />
      </Route>
    </Routes>
  );
};
