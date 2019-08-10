import React, { Component } from "react";

export class App extends Component {
  render() {
    const { updateIsPending, count, increment, asyncIncrement } = this.props;
    return (
      <div>
        <div>Update Pending = {JSON.stringify(updateIsPending)}</div>
        <div>Count = {count}</div>
        <div>
          <button onClick={() => increment()}>Synchronous Increment</button>
          <button
            onClick={() => {
              asyncIncrement(3);
            }}
          >
            Increment After 3 seconds
          </button>
        </div>
      </div>
    );
  }
}
