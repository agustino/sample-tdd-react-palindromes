const palindromes = require("./palindromes");

describe("palindromes()", () => {
  it("correctly indentifies one-word palindromes", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
  });
});
