function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})
function display(mob){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
console.log(deck)

for(var i in mob){
    // console.log(mob[i].button)
    var caddiv=document.createElement("div")
    caddiv.classList.add("card")
    var cadimg=document.createElement("img")
    console.log(cadimg)
   cadimg.src=mob[i].img
     caddiv.appendChild(cadimg)
    deck.appendChild(caddiv)
    // div.classlist.add("abc")
    //name area
    var cname=document.createElement("h2")
     cname.textContent="MOBILE:-"+mob[i].name;
     caddiv.appendChild(cname)

     var crate=document.createElement("h3")
     crate.textContent="PRICE:-"+mob[i].rate;
     caddiv.appendChild(crate)
     var crate=document.createElement("h4")
     crate.textContent="OFFER PRICE:"+mob[i].offer;
     caddiv.appendChild(crate)
     var crate=document.createElement("h1")
     crate.textContent=mob[i].button;
     caddiv.appendChild(crate)
     var btn=document.createElement("button")
     btn.classList.add("btn-info");
     btn.textContent=mob[i].button;
     caddiv.appendChild(btn)
}
}