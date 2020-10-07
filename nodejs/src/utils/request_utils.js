const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

/**
 * Get method
 * @author Harry Nguyen
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {object} params - {name: "foo", limit: 10}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function _get(server, path, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        chai.request(server)
            .get(path)
            .set(headers)
            .query(params)
            .end(function (err, res) {
                if (err)
                    reject(err)
                else resolve(res)
            });
    });

}

/**
 * Post method
 * @author Harry Nguyen
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {string} type - 'form'
 * @param {object} body -  { '_method': 'put'}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function _post(server, path, type = '', body = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        chai.request(server)
            .post(path)
            .set(headers)
            .type(type)
            .send(body)
            .end(function (err, res) {
                if (err)
                    reject(err)
                else resolve(res)
            });
    });
}

/**
 * Put method 
 * @author Harry Nguyen
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {string} type - 'form'
 * @param {object} body -  { '_method': 'put'}
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function _put(server, path, type = '', body = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        chai.request(server)
            .put(path)
            .set(headers)
            .type(type)
            .send(body)
            .end(function (err, res) {
                if (err)
                    reject(err)
                else resolve(res)
            });
    });

}


/**
 * Delete method 
 * @author Harry Nguyen
 * @param {string} server - https://localhost:8005
 * @param {string} path - '/search'
 * @param {object} headers - {"Authorization": "Bearer"}
 * @return {Promise- JSON} Need to parse JSON.parse(myJSON)
 */
function _delete(server, path, headers = {}) {
    return new Promise((resolve, reject) => {
        chai.request(server)
            .delete(path)
            .set(headers)
            .end(function (err, res) {
                if (err)
                    reject(err)
                else resolve(res)
            });
    });

}
module.exports = {
    _get: _get,
    _post: _post,
    _put: _put,
    _delete: _delete
}