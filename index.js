let s = 0;
let e = 50;
let fetching = async () => {
    let URL = await "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09"
    let Fetch = await fetch(URL);
    let JSON = await Fetch.json();
    let i = 0;
    for(let ele = s; ele < e; ele++){
        let {album, id, title, url, thumbnailUrl} = JSON[ele];
        let tag = document.createElement('img');
        document.getElementById('heading').appendChild(tag);
        tag.setAttribute("id", id);
        tag.setAttribute("class", "image");
        document.getElementById(id).src = url;
        document.getElementById(id).alt = title;
    }
    console.log(JSON.length, s);
    s = s + 50;
    e = e + 50;
    if(s == JSON.length){
        document.getElementById("click").style.display = "none";
    }
}