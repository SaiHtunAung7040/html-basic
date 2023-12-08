var typing = new Typed (".typing" ,{
    string : ["9month", "'Day"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

function toggleContent () {
    var content = document.getElementById("main");
    if (content.style.display === "none") {
        content.style.display = "block";
    }else {
        content.style.display = "none"
    }
}