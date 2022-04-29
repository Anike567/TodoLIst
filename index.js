var date = new Date();
var option = {
    weekday: "long",
    day: "numeric",
    month: "long"

};
document.getElementById("date").innerHTML = date.toLocaleDateString("en-us", option);
function func() {
    if (input.value === "") {
        alert("Please enter something to add");
    }
    else {
        var div = document.createElement("div");
        div.classList.add("box");
        var item = document.getElementsByClassName("list")[0];
        var newitem = document.createElement("p");
        var chck = document.createElement("input");
        chck.type = "checkbox";
        newitem.innerHTML = document.getElementById("newelement").value;
        div.appendChild(chck);
        div.appendChild(newitem)

        item.appendChild(div);
        document.getElementById("newelement").value = "";
    }


}
var input = document.getElementById("newelement")
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (input.value !== "") {
            document.getElementById("mybtn").click();
        }
        else {
            alert("Please enter something to add");
        }
    }
    fu;

});
function fu() {
    console.log("its work");
}
window.onbeforeunload = function () {
    alert("Do you really want to exit");

};
