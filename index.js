var posts=[
    ["img/map.jfif","location/index.html","Click to easily locate your location","rgb(146, 185, 172)"],
    ["img/idetor.png","idetor/idetor44.html","Code editor","rgb(123, 163, 30)"],
    ["img/multe_language.jpg","multe_lanugage/multe_lanugage51.html","Multilingual website","rgb(163, 50, 30)"],
    ["img/houre.jpg","houres/time.html","Click to see the time","rgb(146, 185, 172)"],
    ["img/btou.png","btou_atob/btoa_atob.html","Text encryption website ","rgb(146, 185, 172)"],
]
console.log(posts)
var content=document.getElementById("content")
posts.forEach(post =>{
    content.innerHTML =content.innerHTML
        +`<article>
        <a href="${post[1]}">
        <h2 style="background:linear-gradient(225deg, ${post[3]} 90%, rgb(201, 235, 12) 90%);" >${post[2]}</h2>
        <img src="${post[0]}" width="100%"/>
        </a>
        </article>`
})