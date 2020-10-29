function valuereturn(){
    var x = document.getElementById("fName").value;
    var xArray = Array.from(x);
    var xlength = xArray.length;
    if (xlength===10){
        for(var i=0;i<=xlength;i++){
        document.getElementById("ti").innerHTML = xArray[i];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = xArray[3];
        document.getElementById("t4").innerHTML = xArray[4];
        document.getElementById("t5").innerHTML = xArray[5];
        document.getElementById("t6").innerHTML = xArray[6];
        document.getElementById("t7").innerHTML = xArray[7];
        document.getElementById("t8").innerHTML = xArray[8];
        document.getElementById("t9").innerHTML = xArray[9];
    }
    }
    else if(xlength===9){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = xArray[3];
        document.getElementById("t4").innerHTML = xArray[4];
        document.getElementById("t5").innerHTML = xArray[5];
        document.getElementById("t6").innerHTML = xArray[6];
        document.getElementById("t7").innerHTML = xArray[7];
        document.getElementById("t8").innerHTML = xArray[8];
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===8){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = xArray[3];
        document.getElementById("t4").innerHTML = xArray[4];
        document.getElementById("t5").innerHTML = xArray[5];
        document.getElementById("t6").innerHTML = xArray[6];
        document.getElementById("t7").innerHTML = xArray[7];
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===7){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = xArray[3];
        document.getElementById("t4").innerHTML = xArray[4];
        document.getElementById("t5").innerHTML = xArray[5];
        document.getElementById("t6").innerHTML = xArray[6];
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===6){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = xArray[3];
        document.getElementById("t4").innerHTML = xArray[4];
        document.getElementById("t5").innerHTML = xArray[5];
        document.getElementById("t6").innerHTML = '';
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===5){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = xArray[3];
        document.getElementById("t4").innerHTML = xArray[4];
        document.getElementById("t5").innerHTML = '';
        document.getElementById("t6").innerHTML = '';
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===4){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = xArray[3];
        document.getElementById("t4").innerHTML = '';
        document.getElementById("t5").innerHTML = '';
        document.getElementById("t6").innerHTML = '';
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===3){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = xArray[2];
        document.getElementById("t3").innerHTML = '';
        document.getElementById("t4").innerHTML = '';
        document.getElementById("t5").innerHTML = '';
        document.getElementById("t6").innerHTML = '';
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===2){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = xArray[1];
        document.getElementById("t2").innerHTML = '';
        document.getElementById("t3").innerHTML = '';
        document.getElementById("t4").innerHTML = '';
        document.getElementById("t5").innerHTML = '';
        document.getElementById("t6").innerHTML = '';
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else if(xlength===1){   
        document.getElementById("t0").innerHTML = xArray[0];
        document.getElementById("t1").innerHTML = '';
        document.getElementById("t2").innerHTML = '';
        document.getElementById("t3").innerHTML = '';
        document.getElementById("t4").innerHTML = '';
        document.getElementById("t5").innerHTML = '';
        document.getElementById("t6").innerHTML = '';
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
    else{   
        document.getElementById("t0").innerHTML = '';
        document.getElementById("t1").innerHTML = '';
        document.getElementById("t2").innerHTML = '';
        document.getElementById("t3").innerHTML = '';
        document.getElementById("t4").innerHTML = '';
        document.getElementById("t5").innerHTML = '';
        document.getElementById("t6").innerHTML = '';
        document.getElementById("t7").innerHTML = '';
        document.getElementById("t8").innerHTML = '';
        document.getElementById("t9").innerHTML = '';
    }
}
