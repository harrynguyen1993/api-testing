const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

/**
 * Get method with query param
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {object} params - {name: "foo", limit: 10}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function get_method(server, path, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        chai.request(server)
            .set(headers)
            .get(path)
            .query(params)
            .end(function (err, res) {
                if (err)
                    reject(err)
                else resolve(res)
            });
    });

}


/**
 * Post method with query param
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {object} params - {name: "foo", limit: 10}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function post_method() {

}

/**
 * Put method with query param
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {object} params - {name: "foo", limit: 10}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function put_method() {

}

/**
 * Path method with query param
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {object} params - {name: "foo", limit: 10}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function path_method() {

}


/**
 * Delete method with query param
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {object} params - {name: "foo", limit: 10}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function delete_method() {

}
module.exports = {
get_method : get_method
}