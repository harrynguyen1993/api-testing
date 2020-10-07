const log4js = require("log4js");
const chalk = require('chalk');

class Logger {
    /**
    * config Logger 
    * @author Harry Nguyen
    * @class Logger
    * @constructor  constructor(path, level = "info", categories = "default")
    * @example  
    *           - logger = new Logger("logger.log")
    *           - logger.trace("Testing");
    *           - logger.debug("Testing");
    *           - logger.info("Testing");
    *           - logger.warn("Testing");
    *           - logger.error("Testing");
    *           - logger.fatal("Testing");
    * @return {Logger} logger = new Logger("logger.log")
    */
    constructor(path, level = "info", categories = "default") {
        this.logger = this.configLogger(path, level, categories)
    }
    configLogger(path, level, categories) {
        log4js.configure({
            appenders: {
                file: {
                    type: "file",
                    filename: path,
                    encoding: 'utf-8',
                    flags: 'w+',
                    compress: true,
                    timestamp: true,
                    json: true
                },
                console: { "type": "console" }
            },
            categories: {
                default: { appenders: ["console", "file"], level: level },
                console: { appenders: ["console"], level: level }
            }
        });
        return log4js.getLogger(categories);
    }

    start() {
        this.logger.info(chalk.blue.bold("##########---------- START -----------##########\n"))

    }
    ending() {
        this.logger.info(chalk.blue.bold("##########---------- ENDING -----------##########\n"))

    }
    trace(message) {
        this.logger.trace(chalk.cyan(message))

    }
    debug(message) {
        this.logger.debug(chalk.white(message))
    }
    info(message) {
        this.logger.info(chalk.green(message))
    }
    warning(message) {
        this.logger.warn(chalk.yellow(message))
    }

    error(message) {
        this.logger.error(chalk.redBright(message))
    }
    fatal(message) {
        this.logger.fatal(chalk.cyanBright.bold(message))
    }
}

module.exports = Logger