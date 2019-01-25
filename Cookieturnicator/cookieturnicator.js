function smaakaker(){
let smaakaker = document.cookie.split(";");
for(i=0; i<smaakaker.length; i++){
    if(smaakaker[i].length > 1000){
        let nykake = smaakaker[i].trim();
        let kakestart=nykake.slice(0,nykake.indexOf("=")+1);
        if (kakestart.includes("channel")){
            nykake = nykake.slice(nykake.indexOf(",")+1);
            while(nykake.length > 1020){
                nykake = nykake.slice(nykake.indexOf(",")+1);
            }
    
            nykake = kakestart+nykake+";domain=.klp.no;max-age=5184000";
            document.cookie = nykake;

        }
        
    }
}
}