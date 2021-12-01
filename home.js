function getprice(things){
    if(things=="absonic"){
        let v=document.getElementById("absonic").value;
        let price=v*10000;
        document.getElementById("absonicvalue").innerHTML="price for "+v+ " telephone is "+price;
    }
    if(things=="grayrotary"){
        let v=document.getElementById("grayrotary").value;
        let price=v*12000;
        document.getElementById("grayrotaryvalue").innerHTML="price for "+v+ " telephone is "+price;
    }
    if(things=="coinbooth"){
        let v=document.getElementById("coinbooth").value;
        let price=v*13000;
        document.getElementById("coinboothvalue").innerHTML="price for "+v+ " telephone is "+price;
    }
    if(things=="retro"){
        let v=document.getElementById("retro").value;
        let price=v*10000;
        document.getElementById("retrovalue").innerHTML="price for "+v+ " telephone is "+price;
    }

    if(things=="mobile2k"){
        let v=document.getElementById("mobile2k").value;
        let price=v*6000;
        document.getElementById("mobile2kvalue").innerHTML="price for "+v+ " telephone is "+price;
    }
    if(things=="mobile3k"){
        let v=document.getElementById("mobile3k").value;
        let price=v*8000;
        document.getElementById("mobile3kvalue").innerHTML="price for "+v+ " telephone is "+price;
    }
    if(things=="phone3k"){
        let v=document.getElementById("phone3k").value;
        let price=v*12000;
        document.getElementById("phone3kvalue").innerHTML="price for "+v+ " telephone is "+price;
    }
    if(things=="vivo"){
        let v=document.getElementById("vivo").value;
        let price=v*20000;
        document.getElementById("vivovalue").innerHTML="price for "+v+ " phone is "+price;
    }

    if(things=="redme"){
        let v=document.getElementById("redme").value;
        let price=v*18000;
        document.getElementById("redmevalue").innerHTML="price for "+v+ " phone is "+price;
    }
    if(things=="samsung"){
        let v=document.getElementById("samsung").value;
        let price=v*16000;
        document.getElementById("samsungvalue").innerHTML="price for "+v+ " phone is "+price;
    }
   /* if(things=="mobi4k"){
        let v=document.getElementById("mobi4k").value;
        let price=v*15000;
        document.getElementById("mobi4kvalue").innerHTML="price for "+v+ " telephone is "+price;
    }*/
    if(things=="iphone"){
        let v=document.getElementById("iphone").value;
        let price=v*40000;
        document.getElementById("iphonevalue").innerHTML="price for "+v+ " phone is "+price;
    }
    
    
}