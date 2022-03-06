const MOCK = require('mockjs')

const util = require('./util')

module.exports = function (app) {
  app.post('/api/test', (rep, res) => {
    const data = util.getJsonFilr('./index.json')
    res.json(MOCK.mock(data))
  })
}
