const rsvp = document.getElementById("rsvpb")
const card = document.getElementById("card")

const going = document.getElementById("going")
const cant = document.getElementById("cant")

cant.addEventListener("click", function(){
    card.style.display = "none"
})

going.addEventListener("click", function(){
    card.style.display = "none"
})
rsvp.addEventListener("click", function(){
    card.style.display = "block"
    card.style.transform = "scale(1)"
    
})
