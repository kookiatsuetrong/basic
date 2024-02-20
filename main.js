var express = require("express")
var ejs     = require("ejs")
var server  = express()
server.listen(5050)
server.engine("html", ejs.renderFile)
var readBody = express.urlencoded({extended:false})

var database = require("./mongodb")
// var database = require("./mysql")

server.get ("/",        showHomePage)
server.get ("/about",   showAboutPage)

server.get ("/contact", showContactPage)
server.post("/contact", readBody, saveContactMessageDetail)
server.get ("/contact-complete", showContactComplete)

server.use(express.static("public"))
server.use(showErrorPage)

function showHomePage(request, response) {
	response.render("home.html")
}

function showAboutPage(request, response) {
	response.render("about.html")
}

function showErrorPage(request, response) {
	response.render("error.html")
}

function showContactPage(request, response) {
	response.render("contact.html")
}

async function saveContactMessageDetail(request, response) {
	var message = { }
	message.topic  = request.body.topic  || ""
	message.detail = request.body.detail || ""
	message.email  = request.body.email  || ""
	if (message.topic == "" || request.email == "") {
		response.redirect("/contact?error=Incomplete information")
	} else {
		await database.saveContactMessageDetail(message)
		response.redirect("/contact-complete")
	}
}

function showContactComplete(request, response) {
	response.render("contact-complete.html")
}