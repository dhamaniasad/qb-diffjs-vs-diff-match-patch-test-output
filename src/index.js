import "./styles.css";
import { diffWordsWithSpace } from "diff";

const one =
    "In passive attack attacker generally, hide and collects data by tapping communication link but does not modify it.",
  other =
    "In a passive attack, the attacker generally hides and collects data by tapping communication links but does not modify them.",
  color = "";

let span = null;

const diff = diffWordsWithSpace(one, other),
  display = document.getElementById("app"),
  fragment = document.createDocumentFragment();

console.log("diff:", diff);

diff.forEach((part) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added ? "green" : part.removed ? "red" : "grey";
  span = document.createElement("span");
  span.style.color = color;
  span.appendChild(document.createTextNode(part.value));
  fragment.appendChild(span);
});

display.appendChild(fragment);
