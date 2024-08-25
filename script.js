document.getElementById(`show-more-button-1`).addEventListener(("click"), function(e) {
    // Show divider
    let divider = document.getElementById(`divider-1`)
    divider.classList.remove("hidden")

    // Show description
    let description = document.getElementById(`description-1`)
    description.classList.remove("hidden")

    // Hide show more button
    let showMoreButton = document.getElementById(`show-more-button-1`)
    showMoreButton.classList.add("hidden")

    // Show show less button 
    let showLessButton = document.getElementById(`show-less-button-1`)
    showLessButton.classList.remove("hidden")

    // Change card background color to green
    let card = document.getElementById(`long-card-1`)
    card.classList.add(`card-selected`)
})

document.getElementById(`show-less-button-1`).addEventListener(("click"), function (e) {
        // Hide divider
        let divider = document.getElementById(`divider-1`)
        divider.classList.add("hidden")
    
        // Hide description
        let description = document.getElementById(`description-1`)
        description.classList.add("hidden")
    
        // Show show more button
        let showMoreButton = document.getElementById(`show-more-button-1`)
        showMoreButton.classList.remove("hidden")
    
        // Hide show less button 
        let showLessButton = document.getElementById(`show-less-button-1`)
        showLessButton.classList.add("hidden")
    
        // Change card background color to grey
        let card = document.getElementById(`long-card-1`)
        card.classList.remove(`card-selected`)
})
