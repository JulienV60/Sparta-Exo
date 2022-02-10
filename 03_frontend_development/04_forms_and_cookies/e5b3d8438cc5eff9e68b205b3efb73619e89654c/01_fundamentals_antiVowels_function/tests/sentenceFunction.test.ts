import { sentenceSplitter } from "../src/sentenceSplitter"
import { sentenceJoiner } from "../src/sentenceJoiner"

describe("sentenceSplitter", () => {
  it("Should return a splitted version of the argument string", () => {
    expect.assertions(1);
  
    expect(sentenceSplitter("A leader is best, when people barely know he exists")).toEqual(["A", "leader", "is", "best,", "when", "people", "barely", "know", "he", "exists"]);
  })

})

describe("sentenceJoiner", () => {
  it("Should return a single string, joining the elements of the input array", () => {
    expect.assertions(1);
  
    expect(sentenceJoiner(["Of", "a", "good", "leader,", "who", "talks", "little,", "when", "his", "work", "is", "done,", "his", "aim", "fulfilled,"])).toEqual("Of a good leader, who talks little, when his work is done, his aim fulfilled,");
  })

})
describe("Using both functions", () => {
  it("There should be no change when passing a sentence in sentenceSplitter then sentenceJoiner", () => {
    expect.assertions(1);
    
    expect(sentenceJoiner(sentenceSplitter("They will say, We did this ourselves."))).toEqual("They will say, We did this ourselves.");
  })
})
