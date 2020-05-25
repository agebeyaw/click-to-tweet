var select = function (id) {
    return document.querySelector(id)
}

var username = select("#username");
var url = select("#url");
var tweetText = select("#tweet");
var mainText = select(".click-to-tweet-text a");


username.addEventListener("input",()=>{
    urlGen(username.value,null,null)
})

url.addEventListener("input",()=>{
    urlGen(null,null,url.value)
})

tweetText.addEventListener("input",()=>{
    urlGen(null,tweetText.value,null)
})

function urlGen(User,text,URL){
    var userName = User || "piyushsthr";
    var TweetText = text || "Hey! I just landed across this amazing tool, Click To tweet.";
    mainText.innerText = TweetText;
    var Url  = URL || "https://piyushsuthar.codes";
    var uri = `https://twitter.com/intent/tweet?text=${TweetText}&tw_p=tweetbutton&url=${Url}&via=${userName}`
    var putUrl = select(".click-to-tweet-text a");
    var putUrl2 = select(".click-to-tweet-btn")
    putUrl.setAttribute("href",uri)
    putUrl2.setAttribute("href",uri)
    console.log(uri)
}

function getCode(e){
    var html = select(".demo")
    console.log(html.innerHTML)

    select("#html").innerText = html.innerHTML;
    select(".result").style = "display:flex;"
    username.addEventListener("input",()=>{
        var html = select(".demo")
        select("#html").innerText = html.innerHTML;
    })
    
    url.addEventListener("input",()=>{
        var html = select(".demo")
        select("#html").innerText = html.innerHTML;
    })
    
    tweetText.addEventListener("input",()=>{
        var html = select(".demo")
        select("#html").innerText = html.innerHTML;
    })
}
