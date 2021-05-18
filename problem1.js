for(var i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("SenirOp");
    } else if(i % 3 === 0){
        console.log("Senir");
    } else if(i % 5 === 0){
        console.log("Op");
    } else {
        console.log(i)
    }
}