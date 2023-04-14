import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import ExamplePage from "./pages/Example";

import { QueryClientProvider, QueryClient } from "@tanstack/solid-query";

import "./index.css";

const root = document.getElementById("root");
const queryClient = new QueryClient();

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" component={ExamplePage} />
        </Routes>
      </Router>
    </QueryClientProvider>
  ),
  root
);
