import stripHtml from "../../utils/stripHtml";

describe("strip html tags from a string", () => {
  it("returns a string", () => {
    const string = "<p>Test body<p>";
    expect(typeof stripHtml(string)).toBe("string");
  });

  it("removes html tags from a string", () => {
    const string = "<p>Test body<p>";
    expect(stripHtml(string)).toBe("Test body");
  });

  it("return an error is argument is not a string", () => {
    const array = [];
    const expectedResult = "Function only accepts string values";
    expect(stripHtml(array)).toBe(expectedResult);
  });
});
