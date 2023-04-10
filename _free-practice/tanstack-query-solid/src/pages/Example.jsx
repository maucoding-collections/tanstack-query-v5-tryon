//source : https://tanstack.com/query/v5/docs/solid/overview
import { createQuery } from "@tanstack/solid-query";
import LoaderComponent from "../components/Loader";
import { Match, Switch, For } from "solid-js";

const ExampleComponent = () => {
  const query = createQuery({
    queryKey: () => ["data"],
    queryFn: () =>
      fetch("https://reqres.in/api/users").then((res) => res.json()),
  });

  const fetchDataHandler = () => {
    query.refetch();
  };

  return (
    <div
      style={{
        width: "500px",
        "max-width": "100%",
        margin: "0 auto",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <strong>Sample Case: React-Query</strong>
        <button
          type="button"
          onClick={fetchDataHandler}
          disabled={query.isLoading}
          className={`ui primary button ${query.isLoading && "loading"}`}
        >
          Fetch Data
        </button>
      </div>

      <div className="ui divider" />

      <Switch>
        <Match when={query.isLoading}>
          <LoaderComponent />
        </Match>
        <Match
          when={
            !query.isLoading && query?.data?.data && query.data.data.length >= 0
          }
        >
          <div className="ui two column grid">
            <For each={query.data.data}>
              {(n) => (
                <div className="column">
                  <div className="ui fluid card">
                    <div className="image">
                      <img src={n.avatar} />
                    </div>
                    <div className="content">
                      <a className="header">{`${n.first_name} ${n.last_name}`}</a>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default ExampleComponent;
