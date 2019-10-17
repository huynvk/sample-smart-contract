const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", accounts => {
  it("should have zero by default", async () => {
    const instance = await SimpleStorage.deployed();
    const data = await instance.get.call();
    assert.equal(data.valueOf(), 0, "0 wasn't initial value");
  });

  it("should set storage correctly", async () => {
    const instance = await SimpleStorage.deployed();
    await instance.set(10);
    const data = await instance.get.call();
    assert.equal(data.valueOf(), 10, "10 wasn't set");
  });
});
