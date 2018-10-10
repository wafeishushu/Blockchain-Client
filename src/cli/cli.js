const vorpal = require('vorpal')();

module.exports = function (vorpal) {
  vorpal
    .use(require('./command/list-blockchain.js'))
    .use(require('./command/send.js'))
    .use(require('./command/open-port.js'))
    .use(require('./command/get-balance.js'))
    .use(require('./command/connect-peer.js'))
    .use(require('./command/list-peers.js'))
    // .use(require('./command/discover-peers.js'))
    .use(require('./util/welcome.js'))
    .delimiter('blockchain →')
    .show()
}
