const contact = (() => {
    const contact = document.createElement('div')
    contact.className = "contact-from"

    const contactTitle = document.createElement('h4')
    contactTitle.className = "contact-title"
    contactTitle.textContent = "Contact us"

    const from = document.createElement('form')

    const name = document.createElement('div')
    const inputName = document.createElement('input')
    inputName.setAttribute('placeholder', 'Your name..')
    inputName.setAttribute('type', 'text')
    name.appendChild(inputName)

    const email = document.createElement('div')
    const inputEmail = document.createElement('input')
    inputEmail.setAttribute('placeholder', 'Your email..')
    inputEmail.setAttribute('type', 'email')
    email.appendChild(inputEmail)

    const text = document.createElement('div')
    const inputText = document.createElement('textarea')
    inputText.setAttribute('placeholder', 'Your message..')
    inputName.setAttribute('type', 'text')
    text.appendChild(inputText)

    const submit = document.createElement('div')
    const inputSubmit = document.createElement('input')
    inputSubmit.className = 'submit-btn'
    inputSubmit.setAttribute('value', 'Submit')
    inputSubmit.setAttribute('type', 'submit')
    submit.appendChild(inputSubmit)
    




    from.appendChild(name)
    from.appendChild(email)
    from.appendChild(text)
    from.appendChild(submit)

    contact.appendChild(contactTitle)
    contact.appendChild(from)
    return contact
})();

export default contact