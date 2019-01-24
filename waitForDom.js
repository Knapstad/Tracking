function waitForDom(func){
    waitForElements = window.setInterval(function(){
        if(document.readyState==="complete"){
            func
            clearInterval(waitForElements);
        }
            
    },500);
}