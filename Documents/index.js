var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function(socket){
    console.log("Da truy cap may chu");
    socket.on("disconnect", function(){
        console.log("Da ngat ket noi voi server");
    });

    socket.on("sendData", function(data){
        console.log(data);
    })
});

app.get("/", function(req, res){
    res.render("index"); 
}); //Truy cap vao trang chu index.ejs