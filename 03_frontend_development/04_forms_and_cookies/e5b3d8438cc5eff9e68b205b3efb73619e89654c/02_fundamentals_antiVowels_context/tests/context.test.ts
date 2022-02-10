import { context } from "../src/context"
import * as splitterFunction from "../src/sentenceSplitter"
import * as joinerFunction from "../src/sentenceJoiner"

describe("context", () => {

  it("Should return a string", () => {
    expect.assertions(1);
    
    expect(typeof context("No Luke, I am your father.")).toBe("string");
  })
  
  it("Should filter all words that start with vowels", () => {
    expect.assertions(1);
    
    expect(context("Is this the Krusty Krab?")).toEqual("this the Krusty Krab?");
  })

  it("Should use the functions sentenceSplitter and sentenceJoiner correctly", () => {
    expect.assertions(6);

    const splitMock = jest.spyOn(splitterFunction, "sentenceSplitter").mockImplementation(() => {
      return ["No", "this", "is", "Patrick."]
    });

    const joinMock = jest.spyOn(joinerFunction, "sentenceJoiner").mockImplementation(() => {
      return "No this Patrick."
    });
    
    context("No this is Patrick!")
    
    expect(splitMock).toHaveBeenCalled();
    expect(splitMock).toHaveBeenCalledTimes(1);
    expect(splitMock).toHaveBeenCalledWith("No this is Patrick!");
    expect(joinMock).toHaveBeenCalled();
    expect(joinMock).toHaveBeenCalledTimes(1);
    expect(joinMock).toHaveBeenCalledWith(["No", "this", "Patrick."]);
  })
})
