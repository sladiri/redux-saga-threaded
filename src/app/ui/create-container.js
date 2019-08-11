import { connect } from "react-redux";
import { getInPath } from "../../_helper/get-in-path";
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

const mapDispatchToProps = (...args) => ({
  increment: increment(...args),
  asyncIncrement: asyncIncrement(...args),
});

export const createContainer = (...args) =>
  connect(
    mapStateToProps(...args),
    mapDispatchToProps(...args),
  )(App);
