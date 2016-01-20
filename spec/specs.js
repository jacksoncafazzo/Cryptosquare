describe('areSpaces', function() {
  it("has spaces", function() {
    expect(areSpaces("any ol message")).to.equal(true);
  });
});

describe('removeSpaces', function() {
  it("removes spaces", function() {
    expect(removeSpaces("any ol message")).to.equal("anyolmessage");
  });
});

describe('characterLength', function() {
  it("has characters", function() {
    expect(characterLength("dog")).to.equal(3);
  });
});

describe('columnLength', function() {
  it("has characters", function() {
    expect(columnLength(13)).to.equal(4);
  });
});
