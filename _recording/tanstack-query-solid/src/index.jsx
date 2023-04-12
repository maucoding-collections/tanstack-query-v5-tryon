import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import ExamplePage from "./pages/Example";

import "./index.css";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={ExamplePage} />
      </Routes>
    </Router>
  ),
  root
);
