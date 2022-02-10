import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string) => {
  const sentenceCut = sentenceSplitter(sentence);
  const regex = /[aeiouyAEIOUY]/m;
  const result = sentenceCut.filter((word) => {
    if (regex.exec(word.charAt(0)) === null) {
      return word;
    }
  });
  return sentenceJoiner(result);
};
