import React, { Component } from "react";
import { wrap } from "comlink";

export class App extends Component {
  async useWorker() {
    if (!this.foo) {
      const Foo = wrap(
        new Worker("../model/foo.worker.js", { type: "module" }),
      );
      this.foo = await new Foo();
    }
    await this.foo.hey();
  }

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
        <button onClick={() => this.useWorker()}>Use Web Worker</button>
      </div>
    );
  }
}
