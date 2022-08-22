// TODO: Declare any global variables we need
//variables needed: total flipped, heads flipped, tails flipped, heads percent, tails percent
let totalHeads = 0
let totalTails = 0

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip 
    document.getElementById("flip").addEventListener("click", function() {
        
        // determine whether a coin flipped is heads or tails
        if (Math.random() < 0.5) {
            document.getElementById("penny-image").src = "assets/images/penny-heads.jpg"
            document.getElementById("message").textContent = "You Flipped Heads"

            totalHeads++
        } else {
            document.getElementById("penny-image").src = "assets/images/penny-tails.jpg"
            document.getElementById("message").textContent = "You Flipped Tails"

            totalTails++
        }

        let total = totalHeads + totalTails

        let percentHeads = Math.round((totalHeads/total) * 100)
        let percentTails = Math.round((totalTails/total) * 100)

        document.getElementById("heads").textContent = totalHeads
        document.getElementById("tails").textContent = totalTails
        document.getElementById("heads-percent").textContent = percentHeads + "%"
        document.getElementById("tails-percent").textContent = percentTails + "%"
    })
    
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

        document.getElementById("clear").addEventListener("click", function() {
            totalHeads = 0
            totalTails = 0

            document.getElementById("heads").textContent = totalHeads
            document.getElementById("tails").textContent = totalTails
            document.getElementById("heads-percent").textContent = 0 + "%"
            document.getElementById("tails-percent").textContent = 0 + "%"
            
            document.getElementById("message").textContent= "Let's Get Rolling"
        })

})