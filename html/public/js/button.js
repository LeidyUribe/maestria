"use strict";
var container = document.getElementById("app");
var buton = function (props) {
    var output = "<button\n    id=\"btn\"\n    type=" + props.type + "\n    onClick= " + props.onClick + "\n    style=\"\n      font-size: " + props.size + "px;\n      background-color: " + props.color + ";\n      color: " + props.textColor + ";\n      height:" + props.height + "px;\n      width:" + props.width + "px;\n    \"\n  >\n    " + props.children + "\n  </button>";
    var node = document.getElementById('btn');
    container.innerHTML += output;
};
buton({ type: 'button', textColor: 'white', color: 'red', width: 50, height: 30, onClick: function () { alert('aqui'); }, children: "button" });
buton({ type: 'button', textColor: 'black', color: 'yellow', width: 80, height: 30, size: 18, onClick: function () { alert('aqui'); }, children: "button" });
