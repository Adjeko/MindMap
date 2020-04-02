
function movableDragMouseDown(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = e => {
        e = e || window.event;
        //e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        };

        document.onmousemove = f => {
            f = f || window.event;
            f.preventDefault();

            pos1 = pos3 - f.clientX;
            pos2 = pos4 - f.clientY;
            pos3 = f.clientX;
            pos4 = f.clientY;

            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }
    };
}

