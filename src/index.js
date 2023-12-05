import "./style.css";
import {createMenus} from "./menus";
import { createAbout } from "./about";
import { createReviews } from "./reviews";
import { createReservations } from "./reservations";

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
    menus.classList = "navButton"
    let about = document.createElement("p")
    about.textContent = "about"
    about.classList = "navButton currentNav"
    let reviews = document.createElement("p")
    reviews.textContent = "reviews"
    reviews.classList = "navButton"
    let reservations = document.createElement("p")
    reservations.textContent = "Reservations"
    reservations.classList = "navButton"
    reservations.id = "reservations"
    mainDisplayObj.nav.appendChild(about)
    mainDisplayObj.nav.appendChild(menus)
    mainDisplayObj.nav.appendChild(reviews)
    mainDisplayObj.nav.appendChild(reservations)
    return {about,menus,reviews,reservations}
}

let cleanMain = () => {
    mainDisplayObj.main.innerHTML = ""
}

let informationObject = {
    selectedPage: document.querySelector(".navButton"),
    switchPage(e) {informationObject.selectedPage.classList = "navButton"
    informationObject.selectedPage = e.currentTarget
    informationObject.selectedPage.classList = "navButton currentNav"
        switch (informationObject.selectedPage.textContent) {
        case ("menus"):
            cleanMain()
            createMenus(mainDisplayObj)
            break;
        case ("about"):
            cleanMain()
            createAbout(mainDisplayObj)
            break;
        case ("reviews"):
            cleanMain()
            createReviews(mainDisplayObj)
            break;
        case ("Reservations"):
        cleanMain()
        createReservations(mainDisplayObj)
            break;
    }
}
}

let createNavClick = () => {
    let navButtons = document.querySelectorAll(".navButton")
    navButtons.forEach((button) => {button.addEventListener("click",informationObject.switchPage)})
    createAbout(mainDisplayObj)
}

let mainDisplayObj = mainDisplay()
let menusDisplayObj = menusDisplay()
let navDisplayObj = navDisplay()
informationObject.selectedPage = navDisplayObj.about
createNavClick()
