
export function createReviews (mainDisplayObj) {
    let reviewsContainer = document.createElement("div")
    mainDisplayObj.main.appendChild(reviewsContainer)
    reviewsContainer.classList = "reviewsContainer"
    let createReview = (nameVal,starsCount,reviewTextVal,src) => {
        let div = document.createElement("div")
        div.classList = "reviewDiv"
        let img = document.createElement("img")
        img.src = src
        img.classList = "reviewImage"
        let name = document.createElement("h2")
        name.textContent = nameVal
        let reviewText = document.createElement("p")
        reviewText.textContent = reviewTextVal
        reviewText.classList = "reviewText"
        let stars = document.createElement("p")
        stars.classList = "stars"
        stars.textContent = "★".repeat(starsCount)
        reviewsContainer.appendChild(div)
        div.appendChild(img)
        div.appendChild(name)
        div.appendChild(reviewText)
        div.appendChild(stars)
    }
    createReview("Paul Allen",5,"Great sea urchin seviche.", "https://static.wikia.nocookie.net/the-dead-meat/images/5/5d/Paul_Allen.jpg")
    createReview("Timothy Bryce",5,"God, I hate this place. It's a chick restaurant. Why aren't we at Dorsia?", "https://pbs.twimg.com/profile_images/1634341787/297575_2324427623435_1031953486_2684668_652685917_n_400x400.jpg")
    createReview("David Van Patten",3,"No good bathroom to do coke in.", "https://i.redd.it/lyh6fz8i72wa1.png")
}