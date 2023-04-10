const LoaderComponent = () => (
  <div className="ui  grid">
    <div className="column">
      <div className="ui segment" style={{ padding: "50px 0" }}>
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    </div>
  </div>
);

export default LoaderComponent;
