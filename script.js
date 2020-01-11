function onLoad() {
    // grab top post from reddit and set as backgroud image
    const http = new XMLHttpRequest()
    http.open("GET", "https://www.reddit.com/r/Widescreenwallpaper/top.json?limit=20&t=week");
    http.data
    http.send()
    var ranNum = Math.floor((Math.random() * 10));
    console.log(ranNum);
    http.onload = () => {
        var imgUrl = (JSON.parse(http.responseText).data.children[ranNum].data.url);
        var body = document.getElementsByTagName("BODY")[0];
        body.style.backgroundImage = 'url(' + imgUrl +')';
    }

    // get time of day and set
    var timeVal =  new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric"});
    console.log(timeVal)
    document.getElementById("time").textContent = timeVal;
}

window.onload = onLoad;
