var mysql = require("mysql")
var source = "mysql://sample:pass@127.0.0.1/basic"
var pool  = mysql.createPool(source)

function saveContactMessageDetail(message) {
	return new Promise( function(resolve) {
		var sql =   " insert into messages(topic, detail, email) " +
					" values(?, ?, ?)                            "
		var data = [ message.topic, message.detail, message.email ]
		pool.query(sql, data, function(error, result) {
			resolve(result)
		})
	})
}

module.exports = {
	saveContactMessageDetail
}
