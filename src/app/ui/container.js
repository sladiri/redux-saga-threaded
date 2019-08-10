import { connect } from "react-redux";
import { getInPath } from "../../helper/get-in-path";
import { increment } from "../model/actions/increment";
import { asyncIncrement } from "../model/actions/async-increment";
import { App } from "./view";

const mapStateToProps = (ns) => (root) => {
  const state = getInPath(ns, root);
  return {
    updateIsPending: state.meta.updateIsPending,
    count: state.data.count,
  };
};

const mapDispatchToProps = (ns, notifyPromises) => ({
  increment: increment(ns, notifyPromises),
  asyncIncrement: asyncIncrement(ns, notifyPromises),
});

export const createContainer = (ns) =>
  connect(
    mapStateToProps(ns),
    mapDispatchToProps(ns),
  )(App);
