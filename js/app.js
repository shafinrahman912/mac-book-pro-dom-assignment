// -----------------------------function for calculating total price--------------------------

function totalprice() {
    let totalprice = 0;
    totalprice = parseInt(document.getElementById('basePrice').innerText) + parseInt(document.getElementById('memoryPrice').innerText) + parseInt(document.getElementById('storagePrice').innerText) + parseInt(document.getElementById('deliveryCharge').innerText);
    document.getElementById('totalPrice').innerText = totalprice;
    document.getElementById('promoPrice').innerText = totalprice;
}

// -----------------------------function for calculating product price------------------------

function costCalculation(buttonName, costInput, price) {

    document.getElementById(buttonName).addEventListener('click', function () {
        document.getElementById(costInput).innerText = price;
        totalprice();
    });
}


// ------------------function for calculating discounted price of used promo----------------------

function addPromo() {
    document.getElementById('applyButton').addEventListener('click', function () {

        const promoCode = document.getElementById('promoInput').value;
        // case insensitive promo
        if (promoCode == "" || promoCode.toLowerCase() != 'stevekaku')
            window.alert("Invalid promo");

        else if (promoCode.toLowerCase() == 'stevekaku') {
            let discountedPrice = 0;
            const totalPrice = document.getElementById('totalPrice').innerText;
            discountedPrice = parseFloat(totalPrice) - (parseFloat(totalPrice) * 0.2);
            document.getElementById('promoPrice').innerText = discountedPrice;

        }
        document.getElementById('promoInput').value = '';


    });
}

// -----------------------------------function calling-------------------


// Memory
costCalculation('smallMemory', 'memoryPrice', 0);
costCalculation('largeMemory', 'memoryPrice', 180);

// Storage
costCalculation('smallStorage', 'storagePrice', 0);
costCalculation('mediumStorage', 'storagePrice', 100);
costCalculation('largeStorage', 'storagePrice', 180);

// Delivery
costCalculation('lateDelivery', 'deliveryCharge', 0);
costCalculation('earlyDelivery', 'deliveryCharge', 20);

// promo
addPromo();





// -------------------------------------------------previous large code-----------------------------------------------

/*
function memoryCalculation() {

    document.getElementById('smallMemory').addEventListener('click', function () {
        document.getElementById('memoryPrice').innerText = 0;
        totalprice();
    });

    document.getElementById('bigMemory').addEventListener('click', function () {
        document.getElementById('memoryPrice').innerText = 180;
        totalprice();
    });


}

function storageCalculation() {

    document.getElementById('smallStorage').addEventListener('click', function () {
        document.getElementById('storagePrice').innerText = 0;
        totalprice();

    });
    document.getElementById('mediumStorage').addEventListener('click', function () {
        document.getElementById('storagePrice').innerText = 100;
        totalprice();

    });
    document.getElementById('largeStorage').addEventListener('click', function () {
        document.getElementById('storagePrice').innerText = 180;
        totalprice();

    });


}

function deliveryCalculation() {
    document.getElementById('lateDelivery').addEventListener('click', function () {
        document.getElementById('deliveryCharge').innerText = 0;
        totalprice();


    });
    document.getElementById('earlyDelivery').addEventListener('click', function () {
        document.getElementById('deliveryCharge').innerText = 20;
        totalprice();

    });


}

memoryCalculation();
storageCalculation();
deliveryCalculation();

*/