import "./styles.css";
import { diffWordsWithSpace, diffWords } from "diff";
import { diff_match_patch } from "diff-match-patch";

const one =
    "In passive attack attacker generally, hide and collects data by tapping communication link but does not modify it.",
  other =
    "In a passive attack, the attacker generally hides and collects data by tapping communication links but does not modify them.",
  color = "";

let span = null;

const diff = diffWordsWithSpace(one, other),
  display = document.getElementById("app"),
  fragment = document.createDocumentFragment();

const differ = new diff_match_patch();

const diffTwo = differ.diff_main(one, other);

console.log("diff:", diff);

console.log("diff two:", diffTwo);

const differHtml = differ.diff_prettyHtml(diffTwo);

document.querySelector("#app2").innerHTML += differHtml;

diff.forEach((part) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added ? "limegreen" : part.removed ? "pink" : "white";
  span = document.createElement("span");
  span.style.backgroundColor = color;
  span.appendChild(document.createTextNode(part.value));
  fragment.appendChild(span);
});

display.appendChild(fragment);
