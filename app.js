const pickupImg = document.querySelector(".pickupImg");
const checklistImg = document.querySelector(".checklistImg");
const bankImg = document.querySelector(".bankImg");


pickupImg.addEventListener("mouseover" , () => {
    pickupImg.src ="./images/pickup-truck.gif"
    pickupImg.style.width ="120%"
    pickupImg.style.height ="120%"

})
pickupImg.addEventListener("mouseout" , () => {
    pickupImg.src ="./images/pickup-truck.png"
    pickupImg.style.width ="250px"
    pickupImg.style.height ="250px"
})


checklistImg.addEventListener("mouseover" , () => {
    checklistImg.src ="./images/checklist.gif"
    checklistImg.style.width ="110%"
    checklistImg.style.height ="110%"

})
checklistImg.addEventListener("mouseout" , () => {
    checklistImg.src ="./images/checklist.png"
    checklistImg.style.width ="198px"
    checklistImg.style.height ="198px"
})

bankImg.addEventListener("mouseover" , () => {
    bankImg.src ="./images/bank.gif"
    bankImg.style.width ="240px"
    bankImg.style.height ="240px"

})
bankImg.addEventListener("mouseout" , () => {
    bankImg.src ="./images/bank.png"
    bankImg.style.width ="198px"
    bankImg.style.height ="198px"
})