$(function(){

    console.log("ready");

    var isDragging = false;
    var currentEl;

    $(".stencil").on("mousedown", function(e){

        var el = $("div", this).clone()[0];
        currentEl = el;

        isDragging = true;

        e.preventDefault();
        return false;   
    });

    $("body").on("mouseup", function(){

        // Is currentEl inside of target????
            // if not ... remove currentEl
            //$(currentEl).remove();

        isDragging = false;
    });

    $("body").on("mousemove", function(e){

        if(isDragging){

            // Append only once ....
            if(!currentEl.parentElement){
                currentEl.style.position = "absolute";
                $("body").append(currentEl);
            }

            // Move ...
            currentEl.style.left = e.clientX + "px";
            currentEl.style.top = e.clientY + "px";

        }    

        e.preventDefault();
        return false;    

    });

});