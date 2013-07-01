/**
 * User: Flo
 * Date: 29/06/13
 */
module.exports = {
  development: {
    db: 'mongodb://localhost/devjs_dev',
    app: {
      name: 'Node.js app'
    }
  },
  test: {
    db: 'mongodb://localhost/devjs_test',
    app: {
      name: 'Node.js app'
    }
  },
  production: {}
}
