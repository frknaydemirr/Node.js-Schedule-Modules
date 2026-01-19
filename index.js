const express=require("express");


const app =  express();
app.use("/blogs/:blogid",function(req,res,next) {
        console.log(req.params);
        res.send("blog detay sayfası");
});

app.use("/blogs",function(req,res,next) {

        res.send("blog listesi");
});

app.use("/",function(req,res,next) {
    //if(req.url=="/"&& req.method=="GET");
        res.send("anasayfa");
});








app.listen(3000,function(){
    console.log("listening on port 3000");
});

