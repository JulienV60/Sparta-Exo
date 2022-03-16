import { headOrTail } from "./head-or-tail";

headOrTail("head")
  .then(() => {
    console.log("YES!");
  })
  .catch(() => {
    console.log("Oh no.");
  });
