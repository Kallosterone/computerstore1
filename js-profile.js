$(document).ready(function() {
    cartCount_element = this.getElementById("cartCount");
    eventReady_displayonHover();

    let cartItem_list;
    if (localStorage.getItem("cartItem") != null) {
        cartItem_list = JSON.parse(localStorage.getItem("cartItem"));
    } else {
        cartItem_list = [];
    }
    cartCount = cartItem_list.length;
    cartCount_element.innerText = cartCount;
});

function eventReady_displayonHover() {
    var trigger = document.getElementsByClassName("displayonHover");
    console.log("Trigger list: " + trigger.length);
    for (let i = 0; i < trigger.length; i++) {
        let triggerItem = trigger[i];
        triggerItem.addEventListener("mouseover", function() {
            var triggered = triggerItem.querySelectorAll('[data-displayonhover="1"]');
            console.log("Triggered list: " + triggered.length);
            for (let i2 = 0; i2 < triggered.length; i2++) {
                triggered[i2].classList.add("active");
            }  
        });
    }
}