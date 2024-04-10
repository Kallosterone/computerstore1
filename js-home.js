$(document).ready(function() {
    expandModal = this.getElementById("modal-expandImg");
    cartCount_element = this.getElementById("cartCount");
    eventReady_displayonHover();
    eventReady_expandImgonClick();

    let cartItem_list;
    if (localStorage.getItem("cartItem") != null) {
        cartItem_list = JSON.parse(localStorage.getItem("cartItem"));
    } else {
        cartItem_list = [];
    }
    cartCount = cartItem_list.length;
    cartCount_element.innerText = cartCount;
});
var expandModal;
var cartCount = 0;
var cartCount_element;


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

function eventReady_expandImgonClick() {
    var trigger = document.getElementsByClassName("shop-item-expandview");
    for (let i = 0; i < trigger.length; i++) {
        let triggerItem = trigger[i];
        triggerItem.parentNode.addEventListener("click", function() {
            expandModal.style.display = "flex";
            expandModal.getElementsByClassName("modal-imgRef")[0].style.backgroundImage = "url("+ this.getElementsByClassName("shop-item-expandview")[0].getAttribute('data-imgurl') +")";

        });
    }
}

function addCart(id) {
    alert("Item added to cart");
    
    let cartItem_list;
    if (localStorage.getItem("cartItem") != null) {
        cartItem_list = JSON.parse(localStorage.getItem("cartItem"));
    } else {
        cartItem_list = [];
    }
    cartItem_list.push(id);
    localStorage.setItem("cartItem", JSON.stringify(cartItem_list));

    cartCount++;
    cartCount_element.innerText = cartCount;
}

function hideSelf_parent(element) {
    element.parentNode.style.display = 'none';
}

function removeSelf_parent(element) {
    element.remove();
}

$(document).ready(function() {
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);
    });
});