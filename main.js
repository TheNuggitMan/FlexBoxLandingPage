window.onscroll = function() {
    let navBar = document.getElementById("nav").style;
    if (document.body.scrollTop > 179 || document.documentElement.scrollTop > 179) {
        navBar.position = "fixed";
        navBar.top = "0";
        navBar.backgroundColor = "darkgray";
        navBar.zIndex= "2";
    } else {
        navBar.position = "relative";
        navBar.top = "25%";
        navBar.backgroundColor = "";
    }
}
