import { expose } from "comlink";
import { store } from "../root/create-store";

expose(store);
