import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { firebaseConfig } from './utils/FirebaseUtil';
import routes from './utils/routes';

function App() {
  firebaseConfig();

  const routeElements = routes().map(route => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children &&
        route.children.map(child => (
          <Route key={child.path} path={child.path} element={child.element} />
        ))}
    </Route>
  ));

  return (
    <Router>
      <Routes>{routeElements}</Routes>
    </Router>
  );
}

export default App;
