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
$(document).ready(function() {
    cartCount_element = this.getElementById("cartCount");
    eventReady_displayonHover();
    insertCartItem_html();

    let cartItem_list;
    if (localStorage.getItem("cartItem") != null) {
        cartItem_list = JSON.parse(localStorage.getItem("cartItem"));
    } else {
        cartItem_list = [];
    }
    cartCount = cartItem_list.length;
    cartCount_element.innerText = cartCount;
});

function insertCartItem_html() {
    let cartItem_list;
    if (localStorage.getItem("cartItem") != null) {
        cartItem_list = JSON.parse(localStorage.getItem("cartItem"));
    } else {
        cartItem_list = [];
    }

    if (cartItem_list.length <= 0) {
        document.getElementById("cart-itemgrid").innerText= "Add a cart item to see cart...";
        return;
    }
    for (i = 0; i < cartItem_list.length; i++) {
        let itemid = cartItem_list[i];

        var cartItem_added = document.createElement("div");
        cartItem_added.classList.add("cart-item");
        cartItem_added.innerHTML = 
        `<div class= "cart-item-idbox">
            <p class= "cart-item-id">[${itemid}] ${getItemName(itemid)}</p>
        </div>
        <div class= "cart-item-pricebox">
            <div style="display: inline-block">RM${getItemPrice(itemid)}</div>
            <div class= "panel-topdown3 cart-button" onclick="removeIndex(${itemid})">
                Remove Item
            </div>
        </div>`;
        
        /*
        <div class= "cart-item">
            <div class= "cart-item-idbox">
                <p class= "cart-item-id">[${itemid}] ${getItemName(itemid)}</p>
            </div>
            <div>
                <div>\$${getItemPrice(itemid)}</div>
                <div class= "panel-topdown3 cart-button" onclick="removeIndex(${itemid})">
                    Remove Item
                </div>
            </div>
        </div>
        */
        document.getElementById("cart-itemgrid").appendChild(cartItem_added);
    }
}

function getItemName(itemid) { // should be handled by database if external conditions allow implementation
    switch(itemid) {
        case 1:
            return "MSI Pro Z790-P WiFi DDR4/DDR5 Socket LGA1700 ATX Motherboard";
        case 2:
            return "MSI Pro H610m-e";
        case 3:
            return "Sapphire PULSE AMD Radeon RX 7700 XT 12GB GDDR6";
        case 4:
            return "MSI GeForce RTX 4060 Gaming X 8GB DDR6 MLG Graphic Card";
        case 5:
            return "Asus Prime B760m-k D4 Motherboard Silver";
        case 6:
            return "MachDesk MD34 Single Performance Gas Spring Monitor Arm - Black (MD34-A01B)";
        case 7:
            return "Gigabyte A520m K V2 1.0 Motherboard Black";
        case 8:
            return "Corsair Vengeance Rgb Pro Sl 32GB DDR4 3200Mhz White - Set of 2";
        default:
            return "Weird PC";
    }
}

function getItemPrice(itemid) { // should be handled by database if external conditions allow implementation
    switch(itemid) {
        case 1:
            return 1269;
        case 2:
            return 359;
        case 3:
            return 2489;
        case 4:
            return 1999;
        case 5:
            return 599;
        case 6:
            return 258;
        case 7:
            return 274;
        case 8:
            return 299;
        default:
            return 0;
    }
}

function removeIndex(itemid_remove) {
    if (localStorage.getItem("cartItem") != null) {
        cartItem_list = JSON.parse(localStorage.getItem("cartItem"));
    } else {
        return;
    }
    cartItem_list = cartItem_list.filter(itemid => itemid !== itemid_remove);
    localStorage.setItem("cartItem", JSON.stringify(cartItem_list));
    clearCartItem_html();
    insertCartItem_html();
}

function clearCartItem_html() {
    let cart_itemgrid = document.getElementsByClassName("cart-itemgrid");
    cart_itemgrid.innerHTML = "";
}