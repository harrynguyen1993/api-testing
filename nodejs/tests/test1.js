
var method = require("../src/utils/request_utils")

describe("Get data",  () => {
    it('it should GET all the books',async () => {
        await method.get_method("https://postman-echo.com", "/get", { foo1: "bar1", foo2: "bar2" })
    });
});