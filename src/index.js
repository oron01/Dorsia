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
    let hoursAndLocation = document.createElement("p")
    hoursAndLocation.textContent = "hoursAndLocation"
    hoursAndLocation.classList = "navButton"
    let reviews = document.createElement("p")
    reviews.textContent = "reviews"
    reviews.classList = "navButton"
    let reservations = document.createElement("p")
    reservations.textContent = "Reservations"
    reservations.classList = "navButton"
    mainDisplayObj.nav.appendChild(menus)
    mainDisplayObj.nav.appendChild(hoursAndLocation)
    mainDisplayObj.nav.appendChild(reviews)
    mainDisplayObj.nav.appendChild(reservations)
    return {menus,hoursAndLocation,reviews,reservations}
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
        case ("hoursAndLocation"):
            cleanMain()
            break;
        case ("reviews"):
            cleanMain()
            break;
        case ("reservations"):
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
