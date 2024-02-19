var mongo = require("mongodb")
var source = "mongodb://127.0.0.1"

async function saveContactMessageDetail(message) {
	var cn = await mongo.MongoClient.connect(source)
	await cn.db("basic").collection("messages").insertOne(message)
	await cn.close()
}

module.exports = {
	saveContactMessageDetail
}
