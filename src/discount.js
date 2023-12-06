const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btnCalculate = document.querySelector('#calculate');
const pResult = document.querySelector('#result');

class Coupon {
    constructor(name, discount) {
        this.name = name,
        this.discount = discount
    }
}

const coupons = [];

coupons.push(new Coupon('summer', 5), new Coupon('chritsmas', 15), new Coupon('black-friday', 25), new Coupon('cyber-monday', 35));

btnCalculate.addEventListener('click', calculateDiscount);

function calculateDiscount() {
    const price = inputPrice.value;
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = `Enter price and coupon to get the total price`;
    } else {
        const validCoupon = coupons.find(item => item.name == coupon);
        if (validCoupon) {
            const totalPrice = Number((price)*(100 - validCoupon.discount) / 100);
            pResult.innerText = `With the discount you get $ ${totalPrice}`;
        } else {
            pResult.innerText = `Coupon: ${coupon} does not exist`;
        }
    }
}