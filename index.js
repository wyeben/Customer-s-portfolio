var elements = document.getElementsByClassName("btn1");

for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
        window.location.href = "./home/index.html";
    };
}
