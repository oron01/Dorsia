import "./style.css";

let content = document.querySelector("#content")

function mainDisplay() {
    let banner = document.createElement("div")
    banner.classList = "banner"
    let nav = document.createElement("div")
    nav.classList = "nav"
    let main = document.createElement("div")
    main.classList = "main"
    content.appendChild(banner)
    content.appendChild(nav)
    content.appendChild(main)
    return {banner,nav,main}
}

function menusDisplay() {
    let logo = document.createElement("H1")
    logo.textContent = "Dorsia"
    let description = document.createElement("p")
    description.textContent = "A gastronomical Experience"
    let location = document.createElement("p")
    location.textContent = "Exclusive Reservations"
    mainDisplayObj.banner.appendChild(logo)
    mainDisplayObj.banner.appendChild(description)
    mainDisplayObj.banner.appendChild(location)
    return {logo,description,location}
}

function navDisplay() {
    let menus = document.createElement("p")
    menus.textContent = "menus"
    menus.classList = "navButton currentNav"
    let about = document.createElement("p")
    about.textContent = "about"
    about.classList = "navButton"
    let reviews = document.createElement("p")
    reviews.textContent = "reviews"
    reviews.classList = "navButton"
    let reservations = document.createElement("p")
    reservations.textContent = "Reservations"
    reservations.classList = "navButton"
    mainDisplayObj.nav.appendChild(menus)
    mainDisplayObj.nav.appendChild(about)
    mainDisplayObj.nav.appendChild(reviews)
    mainDisplayObj.nav.appendChild(reservations)
    return {menus,about,reviews,reservations}
}

let cleanMain = () => {
    mainDisplayObj.main.innerHTML = ""
}

let createMenus = () => {
    let selectedMenu = "Entrees"
    let menusHeader = document.createElement("h1")
    menusHeader.textContent = "Menus"
    menusHeader.classList = "menusHeader"
    mainDisplayObj.main.appendChild(menusHeader)

    let menusDiv = document.createElement("div")
    menusDiv.classList = "menusDiv"
    mainDisplayObj.main.appendChild(menusDiv)

    let menusContent = document.createElement("div")
    menusContent.classList = "menusContent"
    mainDisplayObj.main.appendChild(menusContent)

    let entreesButton =  document.createElement("h1")
    entreesButton.textContent = "Entrees"
    let cuisineButton = document.createElement("h1")
    cuisineButton.textContent = "Cuisine"
    let spiritsButton = document.createElement("h1")
    spiritsButton.textContent = "Spirits"
    let delicaciesButton = document.createElement("h1")
    delicaciesButton.textContent = "Delicacies"

    let buttons = [entreesButton,cuisineButton,spiritsButton,delicaciesButton]
    let menusButtonsHandler = (e) => {selectedMenu = e.currentTarget
        buttons.forEach((button) => {button.classList = "menusButton"})
        e.currentTarget.classList = "menusButton selectedMenuButton"
        selectedMenu = e.currentTarget.textContent
        menusContent.innerHTML = ""
        switch (selectedMenu) {
            case "Entrees":
                createItem("Cilantro Crawfish Gumbo","A tantalizing Cajun serenade, melds the bold zest of cilantro with the sultry dance of crawfish, creating a symphony of flavors that echoes through the bayou.")
                createItem("Mud Soup","A daring divergence, Mud Soup captivates with avant-garde earthiness, defying culinary norms in a bold journey through unconventional cuisine's untamed wilderness.")
                createItem("Red snapper with violets and pine nuts","The Red Snapper, a piscatorial virtuoso, elegantly bedecked with violets and pine nuts, orchestrates a sensory concerto on the palate.")
                createItem("Charcola Arugula","A darkened rebellion against the usual verdant fare, Charcoal Arugula emerges as a mysterious and shadowy kaleidoscope on the plate, infusing intrigue into every bite.")
                break;
            case "Cuisine":
                createItem("Sea Urchin Ceviche","A great initiation into indulgence, the Sea Urchin Ceviche unfolds as a masterpiece of marine delight.")
                createItem("Peanut Butter Soup with Smoked Duck and Mashed Squash", " a flavorful fusion where rich peanut butter meets smoky duck and sweet mashed squash, creating a harmonious culinary masterpiece.")
                createItem("Squid Ravioli in a Lemongrass Broth with Goat Cheese Profiteroles","An exquisite voyage through the seas and gardens of gastronomy, the Squid Ravioli in a Lemongrass Broth with Goat Cheese Profiteroles is a culinary sonnet.")
                createItem("Pork Loin with Lime Jell-o","A daring culinary juxtaposition, the Pork Loin with Lime Jell-o redefines flavor expectations.")
                createItem("Swordfish Meatloaf with Onion Marmalade", "A bold reinterpretation of a classic, takes meatloaf to the heights of oceanic elegance.")
                break;
            case "Spirits":
                createItem("Vodka Mirage", "Vodka + Cranberry Juice + Splash of Club Soda")
                createItem("Gin Sonata","Gin + Dry Vermouth + Lemon Twist")
                createItem("Mystic Mule", "Bourbon + Ginger Beer + Fresh Lime")
            case "Delicacies":
                createItem("Caramelized Pecan Parfait","Vanilla Bean Ice Cream combined with Warm Caramel Sauce and Toasted Pecans")
                createItem("Dark Chocolate Decadence","Flourless Chocolate Cake with Raspberry Coulis and a Dollop of Whipped Cream")
                createItem("Lemon Infusion Tart","Lemon Curd on Buttery Shortcrust, topped with Zest of Fresh Lemons")
            }    }
    buttons.forEach((button) => {menusDiv.appendChild(button)
    button.classList = "menusButton"
    button.addEventListener("click",menusButtonsHandler)})

    let createItem = (Header,Description) => {
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.textContent = Header
        let p = document.createElement("p")
        p.textContent = Description
        menusContent.appendChild(div)
        div.appendChild(h1)
        div.appendChild(p)

    }
}

let createAbout = () => {
    let aboutImage = document.createElement("div")
    aboutImage.classList = "aboutImage"
    mainDisplayObj.main.appendChild(aboutImage)
    let aboutHeading = document.createElement("h1")
    aboutHeading.textContent = "Timeless Elegance, Enduring Flavor"
    aboutHeading.classList = "aboutHeading"
    mainDisplayObj.main.appendChild(aboutHeading)
    let aboutText = document.createElement("p")
    aboutText.classList = "aboutText"
    mainDisplayObj.main.appendChild(aboutText)
    aboutText.textContent = "Capturing the essence of our establishment's storied past and contemporary allure, DORSIA stands as the pinnacle of refined dining in the heart of the city. Presenting a curated culinary journey, our skilled chefs artfully craft seasonal menus in collaboration with local purveyors and sustainable partners."
    let aboutTeam = document.createElement("h1")
    aboutTeam.textContent = "Our Team"
    mainDisplayObj.main.appendChild(aboutTeam)
    aboutTeam.classList = "aboutTeam"
    let teamContainer = document.createElement("div")
    teamContainer.classList = "teamContainer"
    mainDisplayObj.main.appendChild(teamContainer)

    let createTeamMember = (name,title,imgSrc,description) => {
        let div = document.createElement("div")
        div.classList = "teammateCard"
        let img = document.createElement("div")
        img.classList = "teammateImage"
        img.style.backgroundImage = `url("${imgSrc}")`
        let fullName = document.createElement("h2")
        fullName.textContent = name
        let jobTitle = document.createElement("p")
        jobTitle.textContent = title
        teamContainer.appendChild(div)
        div.appendChild(img)
        div.appendChild(fullName)
        div.appendChild(jobTitle)

        function createDialogue() {
            let body = document.querySelector("body")
            body.classList = "bodyDuringDialogue"
            let dialogue = document.createElement("div")
            dialogue.classList = "dialogue" 
            body.appendChild(dialogue)
            let closeButton = document.createElement("div")
            body.appendChild(closeButton)
            closeButton.classList = "closeButton"
            closeButton.textContent = "X"
            let header = document.createElement("h1")
            header.textContent=name
            let subHeader = document.createElement("h2")
            subHeader.textContent= title
            let teammateDescription = document.createElement("p")
            teammateDescription.classList = "teammateDescription"
            teammateDescription.textContent = description    
            dialogue.appendChild(header)
            dialogue.appendChild(subHeader)
            dialogue.appendChild(teammateDescription)
            closeButton.addEventListener("click",() => {body.removeChild(dialogue)
            body.classList = ""
        body.removeChild(closeButton)})
            
        }
        div.addEventListener("click",createDialogue)
    }
    const dorsiaExperience = `
    With an unwavering commitment to orchestrating an unparalleled diner's delight, Patrick Bateman's quarter-century tenure as the discerning head of Dorsia's avant-garde culinary domain has fostered an unassailable esprit de corps among our accomplished team. Manifesting genuine pleasure in delivering meticulous service, Patrick propels Dorsia's vision to captivate every facet of our esteemed guests' sensory journey—whether it be the thoughtfully curated jazz ensemble or the subtly ambient illumination gracing our private dining enclaves. In each meticulous detail, Patrick defines Dorsia's luxury.

    Within the realm of Patrick's personal recommendations for an exquisite Dorsia dining experience, he fervently champions the Lobster Chitarra, a gastronomic masterpiece perfectly complemented by a velvety Paul Hobbs California Chardonnay.`;

    const chefDescription = `
    With an unmatched flair for culinary innovation, Mario Luigitello assumes the role of Executive Restaurant Chef, orchestrating a symphony of flavors that dance upon the palate. Mario's culinary journey is a testament to his passion for exquisite gastronomy, and his creative prowess has elevated our dining experience to unparalleled heights.

    In the kitchen, Mario is a maestro, blending tradition with avant-garde techniques to craft dishes that transcend the ordinary. His dedication to sourcing the finest ingredients and infusing each creation with a touch of his Italian heritage sets the stage for a gastronomic journey like no other.

    Executing his culinary vision with precision, Mario Luigitello invites you to savor the artistry of his creations, where each dish tells a story, and every bite is a celebration of flavor, texture, and culinary finesse.
    `;
    const sommelierDescription = `
    As our esteemed Sommelier-in-Chief, Barack Obama brings a refined palate and a wealth of experience to curate an exceptional wine selection that complements the exquisite dining experience at our establishment. With a passion for the art of wine, Barack's journey in oenology has been nothing short of illustrious.

    Drawing on his extensive knowledge and impeccable taste, Barack has meticulously curated a wine list that mirrors the diversity and complexity of flavors found in every corner of the world. His commitment to showcasing both well-established vineyards and hidden gems ensures that our guests embark on a vinous journey that transcends expectations.

    In Barack's capable hands, each glass becomes a narrative, and every pour tells a story of terroir, craftsmanship, and the joy of discovery. Join us as Sommelier Obama guides you through a curated selection that elevates your dining experience to new heights.
    `;

    createTeamMember("Patrick Bateman","General Manager","https://media.gq-magazine.co.uk/photos/5e9ee080be258400088d6fc3/1:1/w_1080,h_1080,c_limit/20200421-psycho-04.jpg", dorsiaExperience)
    createTeamMember("Mario Luigitello","Execute Restaurant Chef","https://www.the-yeatman-hotel.com/fotos/gca/chef_212942577763b6a8b28754d.jpg", chefDescription)
    createTeamMember("Obama","Sommilier","https://images1.penguinrandomhouse.com/author/22627",sommelierDescription)

}

let createReviews = () => {

}

let informationObject = {
    selectedPage: document.querySelector(".navButton"),
    switchPage(e) {informationObject.selectedPage.classList = "navButton"
    informationObject.selectedPage = e.currentTarget
    informationObject.selectedPage.classList = "navButton currentNav"
        switch (informationObject.selectedPage.textContent) {
        case ("menus"):
            cleanMain()
            createMenus()
            break;
        case ("about"):
            cleanMain()
            createAbout()
            break;
        case ("reviews"):
            cleanMain()
            break;
        case ("Reservations"):
        cleanMain()
            break;
    }
}
}

let createNavClick = () => {
    let navButtons = document.querySelectorAll(".navButton")
    navButtons.forEach((button) => {button.addEventListener("click",informationObject.switchPage)})
    createMenus()
}

let mainDisplayObj = mainDisplay()
let menusDisplayObj = menusDisplay()
let navDisplayObj = navDisplay()
informationObject.selectedPage = navDisplayObj.menus
createNavClick()
