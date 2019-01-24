function kjeks(){
let smaakaker = document.cookie.split(";")
for(i=0; i>=smaakaker.length; i++){
    if(smaakaker[i].length > 400){
        let nykake = smaakaker[i].trim()
        let kakestart=nykake.slice(0,nykake.indexOf("=")+1)
        nykake = nykake.slice(nykake.indexOf(",")+1)
        nykake = kakestart+nykake+";max-age=5184000"
        document.cookie = nykake
    }
}
}