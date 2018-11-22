$(document).ready(function(e) {
    listener();
});

function listener() {
    click_listener();
}


function click_listener() {
    $("*", document.body).click(function(event) {
        // http://ismydream.tistory.com/98
        // propagation: 부모 태그들도 이벤트에 반응한다
        event.stopPropagation();
        // url path
        var pathname = window.location.pathname;
        // domElement
        var domElement = $(this);
        $("#display").text("Clicked On:" + 
                           domElement.get(0).parentNode.nodeName + "/" +
                           domElement.get(0).nodeName + "/" +
                           domElement.attr("id")
                          );
    });
}