var heads = document.getElementsByClassName("headings");
var dets = document.getElementsByClassName("details");
function show(headname){
    for(head of heads){
        head.classList.remove("active");
    }
    for(det of dets){
        det.classList.remove("show-active");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(headname).classList.add("show-active");
}
/*-----menu bar----*/
