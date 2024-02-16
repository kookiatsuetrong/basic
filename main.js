var express = require("express")
var ejs     = require("ejs")
var server  = express()
server.listen(5050)
server.engine("html", ejs.renderFile)

server.get("/",      showHomePage)
server.get("/about", showAboutPage)
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