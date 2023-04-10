import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import ExampleComponent from "./pages/Example";

import "./index.css";

const root = document.getElementById("root");
const queryClient = new QueryClient();

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" component={ExampleComponent} />
        </Routes>
      </Router>
    </QueryClientProvider>
  ),
  root
);
