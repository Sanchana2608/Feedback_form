var userService=require('./userService')
var getDataControllerfn=async(req,res)=>
{
    var patient=await userService.getDataFromDBService();
    res.send({"status":true, "data":patient});
}

var createUserControllerFn=async(req,res)=>{
    var status = await userService.createUserDBService(req.body);
    if(status){
        res.send({"status":true,"message":"feedback created successfully"});
}else{
    res.send({"status":false,"message":"failure in feedback creation"});
}
}

var updateUserControllerFn=async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);

    var result=await userService.updateUserDBService(req.params.id,req.body);
    if(result){
        res.send({"status":true,"message":"user updated"});
    }
    else{
        res.send({"status":false,"message":"user updation failed"});
    }
}

module.exports={getDataControllerfn,createUserControllerFn,updateUserControllerFn};
