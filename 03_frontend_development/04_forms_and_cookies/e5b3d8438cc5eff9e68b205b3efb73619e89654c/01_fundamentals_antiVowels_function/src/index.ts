import { sentenceSplitter } from "./sentenceSplitter"
import { sentenceJoiner } from "./sentenceJoiner"

const sentence = "Do or do not. There is no try."

console.log(sentence === sentenceJoiner(sentenceSplitter(sentence)));
// Should print : true

console.log(sentenceSplitter("Do or do not."));
// Should print : ["Do", "or", "do", "not."]

console.log(sentenceJoiner(["There", "is", "no", "try."]));
// Should print : "There is no try."

