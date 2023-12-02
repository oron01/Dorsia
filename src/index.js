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
    let events = document.createElement("p")
    events.textContent = "events"
    events.classList = "navButton"
    let reviews = document.createElement("p")
    reviews.textContent = "reviews"
    reviews.classList = "navButton"
    let reservations = document.createElement("p")
    reservations.textContent = "Reservations"
    reservations.classList = "navButton"
    mainDisplayObj.nav.appendChild(menus)
    mainDisplayObj.nav.appendChild(events)
    mainDisplayObj.nav.appendChild(reviews)
    mainDisplayObj.nav.appendChild(reservations)
    return {menus,events,reviews,reservations}
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
                createItem("Cilantro Crawfish Gumbo","The Arugula Caesar Salad rebels against convention with its peppery arugula leaves, challenging the traditional romaine. Tossed in a clandestine Caesar dressing with anchovy nuances and adorned with defiant croutons, it's a culinary insurrection on the palate.")
                createItem("Mud Soup","A daring divergence, Mud Soup captivates with avant-garde earthiness, defying culinary norms in a bold journey through unconventional cuisine's untamed wilderness.")
                createItem("Red snapper with violets and pine nuts","The Red Snapper, a piscatorial virtuoso, elegantly bedecked with violets and pine nuts, orchestrates a sensory concerto on the palate.")
                createItem("Charcola Arugula","A darkened rebellion against the usual verdant fare, Charcoal Arugula emerges as a mysterious and shadowy kaleidoscope on the plate, infusing intrigue into every bite.")
                break;
            default:
                break;
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
        case ("events"):
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
