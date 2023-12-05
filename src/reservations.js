export function createReservations (mainDisplayObj) {
    let reservationsContainer = document.createElement("div")
    reservationsContainer.classList = "reservationsContainer"
    mainDisplayObj.main.appendChild(reservationsContainer)
    let reservationsForm = document.createElement("form")
    reservationsForm.classList = "reservationsForm"
    let formHeader = document.createElement("h1")
    formHeader.textContent = "Reservations"
    reservationsForm.appendChild(formHeader)
    let createFormField = (labelText,placeholder,id,required,inputType) => {
        let div = document.createElement("div")
        div.classList = "formField"
        let label = document.createElement("label")
        label.textContent = labelText
        label.for = id
        let input = document.createElement(inputType)
        input.placeholder = placeholder
        input.id = id
        if (required == "true") {input.required = true
        let requiredText = document.createElement("strong")
        requiredText.classlist = "requiredText"
        requiredText.textContent = " - Required"
        label.appendChild(requiredText)}
        else {
            let notRequiredText = document.createElement("span")
            notRequiredText.classlist = "optionalText"
            notRequiredText.textContent = " - Optional"
            label.appendChild(notRequiredText)}
        reservationsForm.appendChild(div)
        div.appendChild(label)
        div.appendChild(input)
        return {div,label,input}
    }
    let createSelectOption = (selectElement,optionVal,disabled,selected) => {
        let option = document.createElement("option")
        option.value = optionVal
        option.textContent = optionVal
        selectElement.appendChild(option)
        if (disabled !== null) {option.disabled = "true"}
        if (selected !== null) {option.selected = "true"}
        return {option}
    }
    let first = createFormField("Number of People","Number of people","Nobama","","select")
    createSelectOption(first.input,"Number of people","false")
    createSelectOption(first.input,"2 People",null,"")
    createSelectOption(first.input,"3 People",null,null)
    createSelectOption(first.input,"4 People",null,null)
    createSelectOption(first.input,"5 People",null,null)
    createSelectOption(first.input,"6 People",null,null)
    createSelectOption(first.input,"7 People",null,null)
    createSelectOption(first.input,"8 People",null,null)

    let currentDate = new Date()
    let date = createFormField("Date","Date","Date","true","input")
    date.input.type = "date"
    const formattedDate = currentDate.toISOString().split('T')[0];
    date.input.value = formattedDate

    let time = createFormField("Time","Time","Time","true","select")
    createSelectOption(time.input,"Time","true",null)
    // createSelectOption(time.input,currentDate.getHours(),null,null)
    // let hourOptions = []
    for (let i = 16 ; i < 24.5; i+= 0.5) {
        let hour = 0
        if (i % 1 == 0) {
            // this if is obsolete i just didn't want to remove the if else formatting, the else is always the one
            if (false && i == currentDate.getHours()+1) {hour = createSelectOption(time.input,i + " : 00",null,"true")}
            else {hour = createSelectOption(time.input,i + " : 00",null,null)}
        // hourOptions.push(hour)
        }
        else {if (i !== 20.5) {hour = createSelectOption(time.input,i-0.5 + " : 30",null,null)}
        else{hour = createSelectOption(time.input,i-0.5 + " : 30",null,"true")}
    }
}
    let bookButton = document.createElement("button")
    bookButton.classList = "bookButton"
    bookButton.textContent = "Find a Table"
    reservationsForm.appendChild(bookButton)
    reservationsContainer.appendChild(reservationsForm)

}