import { expose } from "comlink";

export class Foo {
  hey() {
    console.log("hey from worker");
  }
}

expose(Foo);
