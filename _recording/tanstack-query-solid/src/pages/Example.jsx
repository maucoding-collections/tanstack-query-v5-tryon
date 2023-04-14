import { For, Match, Switch } from "solid-js";
import LoaderComponent from "../components/Loader";

import { createMutation, createQuery } from "@tanstack/solid-query";

const ExampleComponent = () => {
  const query = createQuery({
    queryKey: () => ["data"],
    queryFn: () =>
      fetch("https://reqres.in/api/users").then((res) => res.json()),
  });

  const mutation = createMutation({
    mutationKey: () => ["data"],
    mutationFn: () =>
      fetch("https://reqres.in/api/users").then((res) => res.json()),
  });

  const fetchHandler = async () => {
    // query.refetch();
    // mutation.mutate();
    const Response = await mutation.mutateAsync();
    console.log("response", Response);
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
        <strong>Sample Case: Solid-Query</strong>
        <button
          type="button"
          onClick={fetchHandler}
          disabled={mutation.isLoading}
          className={`ui primary button ${mutation.isLoading && "loading"}`}
        >
          Fetch Data
        </button>
      </div>

      <div className="ui divider" />

      <Switch>
        <Match when={mutation.isLoading}>
          <LoaderComponent />
        </Match>
      </Switch>

      <Switch>
        <Match when={!mutation.isLoading && mutation?.data?.data?.length > 0}>
          <div className="ui two column grid">
            <For each={mutation.data.data}>
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
