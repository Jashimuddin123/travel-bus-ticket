
let decresingSeatCount= getVlueById('decresing-id')
let increasingCount = getVlueById('increasing-id')
function getBusSeat(event){
    console.log(event.target);
    if(increasingCount >=4){
        alert('You can not Buy more than 4 Seats ');
        return
    }
event.target.classList.add('bg-green-400')
decresingSeatCount--;
increasingCount++;


setInterTextById('decresing-id',decresingSeatCount)
setInterTextById('increasing-id',increasingCount)
event.target.setAttribute('disabled', true)
const div = document.getElementById('dynamick-div');
const div2 = document.createElement('div');
div2.classList.add('flex','justify-around')
const h2A=document.createElement('h2')
const h2B=document.createElement('h2')
const h2C=document.createElement('h2')
h2A.innerText = event.target.innerText;
h2B.innerText = 'economy';
h2C.innerText = 550;
div2.appendChild(h2A);
div2.appendChild(h2B);
div2.appendChild(h2C);
div.appendChild(div2)

let totalPrcie = getVlueById('total-price');
 const currenPrice = totalPrcie + 550;
 setInterTextById('total-price', currenPrice);
  setInterTextById('grand-total', currenPrice)

 if(increasingCount >= '4'){
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.removeAttribute('disabled')
    applyBtn.addEventListener('click', function(){
        const input = document.getElementById('input-field');

        // 15% discount
        if(input.value === 'NEW15'){
         const discountPrice = currenPrice * 15 / 100;
         setInterTextById('discount-price', discountPrice)
         const grandTotal = currenPrice - discountPrice;
         setInterTextById('grand-total', grandTotal);
          const copunFiledDisabled = document.getElementById('coupon-field');
          copunFiledDisabled.classList.add('hidden');
        } else  if(input.value === 'Couple 20'){
            const discountPrice = currenPrice * 20 / 100;
            setInterTextById('discount-price', discountPrice)
            const grandTotal = currenPrice - discountPrice;
            setInterTextById('grand-total', grandTotal);
             const copunFiledDisabled = document.getElementById('coupon-field');
             copunFiledDisabled.classList.add('hidden');
           } else{
            alert('You Must Give Right Cupon Code')
           }

      
       






    })
 }

 const nextBtn = document.getElementById('next-btn');
 document.getElementById('input-number').addEventListener('keyup', function(){
      nextBtn.removeAttribute('disabled')   
})



}

document.getElementById('buy-btn').addEventListener('click', function(){
    document.getElementById('seat-plan').scrollIntoView({behavior:"smooth"})
})


const allSeat = document.getElementsByClassName('kbd')
for(const seat of allSeat){
 seat.addEventListener('click', getBusSeat)

}

document.getElementById('modal-btn').addEventListener('click', function(){
    // window.location.reload()
    setTimeout(()=>{
        window.location.reload()
    },1000)
})
