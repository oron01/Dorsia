export function createMenus (mainDisplayObj) {
    console.log(mainDisplayObj)
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
    let switchMenu = () => {
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
            }
    }

    let menusButtonsHandler = (e) => {selectedMenu = e.currentTarget
        buttons.forEach((button) => {button.classList = "menusButton"})
        e.currentTarget.classList = "menusButton selectedMenuButton"
        selectedMenu = e.currentTarget.textContent
        menusContent.innerHTML = ""
        switchMenu(selectedMenu)
    }

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
    switchMenu(selectedMenu)
    entreesButton.classList = "menusButton selectedMenuButton"
}