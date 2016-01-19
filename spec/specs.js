describe('characterLength', function() {
  it("has characters", function() {
    expect(characterLength("dog")).to.equal(3);
  });
});

describe('areSpaces', function() {
  it("has spaces", function() {
    expect(areSpaces("any ol message")).to.equal(true);
  });
});
