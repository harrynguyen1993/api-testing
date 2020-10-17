
var { _get, _post, _put, _delete } = require("../../src/utils/request_utils")
const Logger = require("../../src/utils/logger_utils")
const dem = require('../A/before')


describe("Get data", () => {
    
    it('it should GET all the books', async () => {
        console.log("##############----7--------######")
        let logger = new Logger("C:/APITESTING/api-testing/nodejs/resources/logs/demo.log",level="trace")
        logger.start()
        data = await _get("https://postman-echo.com", "/get", { foo1: "bar1", foo2: "bar2" })
        
        logger.trace(JSON.stringify(data.body))
        logger.ending()
    });

    it('it should GET all the books', async () => {
        console.log("##############----8--------######")
        let logger = new Logger("C:/APITESTING/api-testing/nodejs/resources/logs/demo1.log",level="trace")
        data = await _get("https://postman-echo.com", "/get", { foo1: "bar1", foo2: "bar2" })
        logger.trace(JSON.stringify(data.body))
    });
    it('it should GET all the books', async () => {
        console.log("##############----9--------######")
        let logger = new Logger("C:/APITESTING/api-testing/nodejs/resources/logs/demo2.log",level="trace")
        data = await _get("https://postman-echo.com", "/get", { foo1: "bar1", foo2: "bar2" })
        logger.trace(JSON.stringify(data.body))
    });
});