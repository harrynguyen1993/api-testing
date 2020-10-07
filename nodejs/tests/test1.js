
var method = require("../src/utils/request_utils")

describe("Get data",  () => {
    it('it should GET all the books',async () => {
        data = await method.get("https://postman-echo.com", "/get", { foo1: "bar1", foo2: "bar2" })
        console.log(data.body)
    });
});