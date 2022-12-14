// Call inputs prices, manualDiscount and coupons 

const price_value = document.querySelector('#price');
const price2_value = document.querySelector('#price2');
const discount_value = document.querySelector('#discount');
const discountCoupon_value = document.querySelector('#coupon');

// Call buttons to excecute functions

const calcDisc_btn = document.querySelector('#calculateDiscount');
const calcDiscByCoupon_btn = document.querySelector('#calculateDiscountByCoupon');

// DOM manipulations insert result texts

const printDiscount = document.querySelector('#priceWithDiscount');
const printDiscountbyCoupon = document.querySelector('#priceWithDiscountbyCoupon');


//Calculate discount - manual inputs

calcDisc_btn.addEventListener('click', calculateDiscount);


// This funtion validate 2: If the form is full filled & Discount is less than 100% if both are true calculate & print new price.

function calculateDiscount(){  

    const price = Number(price_value.value);
    const discount = Number(discount_value.value);


    if (!price || !discount) { 

        printDiscount.innerText = '¡Hey! Por favor llena el formulario 😘';
        return;

    }


    if (discount >= 100) {

        printDiscount.innerText = 'Aqui no tenemos cosas gratis 😘';
        return;

    }


    const newPrice =  price * (100 - discount) / 100 ;
    printDiscount.innerText = 'El precio con descuento es de: $' + newPrice;

}

// Discount obtainded by coupon


const coupons = [
    { discountCode: 'tonitoDev1' , discount: 10 },
    { discountCode: 'tonitoDev2' , discount: 15 },
    { discountCode: 'tonitoDev3' , discount: 20 },
    { discountCode: 'tonitoDev4' , discount: 25 },
    { discountCode: 'tonitoDev5' , discount: 30 },
];


let discountCoupon;
let validatedCoupon;
let certifiedCoupon


/* This function validate if the form is fully filles (true)-> excecute applyDiscountByCoupon; Then prints 1 of 3 cases: 
1- Form is not fully filled
2- Coupon on the input doesn't exist in our array
3- The coupon exists and the discount is applied correctly */



function applyDiscountByCoupon(){
   
    price = Number(price2_value.value);
    discountCoupon = discountCoupon_value.value;

    if (!price || !discountCoupon) {  //Form is fully filled?

        console.warn('¡Hey! Por favor llena el formulario 😘');
        printDiscountbyCoupon.innerText = '¡Hey! Por favor llena el formulario 😘';
        return;

    }



    validatedCoupon = coupons.find(browseCouponAtList); //Is coupon at coupons list
    
    function browseCouponAtList (coupon) {
        return(coupon.discountCode === discountCoupon);
    }
    


    if(validatedCoupon) {
        
        console.log('El descuento a aplicar es del: ' + validatedCoupon.discount + '%');

        let newPriceCoupon = price * (100 - validatedCoupon.discount) / 100 ;
        console.log('El precio con descuento es de $' + newPriceCoupon);

        printDiscountbyCoupon.innerText = ('El precio con descuento es de $' + newPriceCoupon);
        
        return;
        
    } else {

        console.warn('Ojito, este cupon no existe. No se puede aplicar descuento 😥');
        printDiscountbyCoupon.innerText = ('Ojito, este cupon no existe. No se puede aplicar descuento 😥');
    
    }
}

/*Calculate discount Code Input*/

calcDiscByCoupon_btn.addEventListener('click', applyDiscountByCoupon);

