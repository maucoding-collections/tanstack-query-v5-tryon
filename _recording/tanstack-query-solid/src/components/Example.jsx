import LoaderComponent from "./Loader";

const { isLoading, data } = {};

const ExampleComponent = () => {
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
          //   onClick={fetchDataHandler}
          disabled={isLoading}
          className={`ui primary button ${isLoading && "loading"}`}
        >
          Fetch Data
        </button>
      </div>

      <div className="ui divider" />

      <LoaderComponent />

      <div className="ui two column grid">
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src=" https://www.w3schools.com/howto/img_avatar.png" />
            </div>
            <div className="content">
              <a className="header">First Last</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src=" https://www.w3schools.com/howto/img_avatar.png" />
            </div>
            <div className="content">
              <a className="header">First Last</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
