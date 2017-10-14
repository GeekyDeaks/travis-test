'use strict'
module.exports = {

    nothing: function (test) {
        test.expect(1)

        test.ifError(null)

        test.done()

    }
}