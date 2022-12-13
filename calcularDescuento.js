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
    { coupon: 'tonitoDev1' , discount: 10 },
    { coupon: 'tonitoDev2' , discount: 15 },
    { coupon: 'tonitoDev3' , discount: 20 },
    { coupon: 'tonitoDev4' , discount: 25 },
    { coupon: 'tonitoDev5' , discount: 30 },
];


let cuponBuscado;
let codigoEncontrado;
let certifiedCoupon


/*This funtion traverse the coupons array by .some to identify if the coupon input already exist and if it does get it by .find to obtain
the discount value*/

function findCoupon(){

    cuponBuscado = discountCoupon_value.value;


    certifiedCoupon = coupons.some(function(coupon){
        return coupon.coupon === cuponBuscado;
    }); 


    if(certifiedCoupon == true) {

        codigoEncontrado = coupons.find(function(coupon){
            return(coupon.coupon === cuponBuscado);
        });
        
        console.log('El descuento a aplicar es del: ' + codigoEncontrado.discount + '%');
        
        return;
        
    }
}

/*Calculate discount Code Input*/

calcDiscByCoupon_btn.addEventListener('click', applyDiscount);

/* This function validate if the form is fully filles (true)-> excecute findCoupon; Then prints 1 of 3 cases: 
1- Form is not fully filled
2- Coupon on the input doesn't exist in our array
3- The coupon exists and the discount is applied correctly */

function applyDiscount(){
    
    price = Number(price2_value.value);
    cuponBuscado = discountCoupon_value.value;


    if (!price || !cuponBuscado) {

        console.warn('¡Hey! Por favor llena el formulario 😘');
        printDiscountbyCoupon.innerText = '¡Hey! Por favor llena el formulario 😘';
        return;

    }
    

    findCoupon();


    if (certifiedCoupon == true) {
    
        const newPriceCoupon = price * (100 - codigoEncontrado.discount) / 100 ;
        
        console.log('El precio con descuento es de $' + newPriceCoupon);

        printDiscountbyCoupon.innerText = ('El precio con descuento es de $' + newPriceCoupon);
        
    } else {

        console.warn('Ojito, este cupon no existe. No se puede aplicar descuento 😥');
        printDiscountbyCoupon.innerText = ('Ojito, este cupon no existe. No se puede aplicar descuento 😥');
    
    }

};

