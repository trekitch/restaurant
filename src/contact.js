function contactPage() {
    const component = document.createElement("div");

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";

    const formTitle = document.createElement("h3");
    formTitle.textContent = "Send Us a Message";

    const $hr = document.createElement("hr");

    const contactSection = document.createElement("div");
    contactSection.classList.add("contactSec");
    const addressSection = document.createElement("div");
    addressSection.classList.add("addressSec");
    addressSection.innerHTML = `                        
    <h3>Where to Find Us</h3>
    <hr />
    <p class="sectionTitle">Address:</p>
    <p>2626 Aspen Dr. Kalamazoo, MI, 49006</p>
    <p class="sectionTitle">Hours:</p>
    <div class="hours">
        <p>Monday to Friday: <strong>8:00 AM - 11:00 PM</strong></p>
        <p>Saturday: <strong>12:00 PM - 11:00 PM</strong></p>
        <p>Sunday: <strong>Closed</strong></p>
    </div>
    <p class="sectionTitle">Phone:</p>
    <p>(231) 555-1234</p>`;
    const contactFormSection = document.createElement("div");
    contactFormSection.classList.add("contactFormSect");
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "#");

    const fields = ["Name", "Email", "Message"];
    fields.forEach((item, index) => {
        if (index == 0 || index == 1) {
            const fieldLabel = document.createElement("label");
            const fieldInput = document.createElement("input");
            fieldLabel.textContent = item;
            fieldInput.setAttribute("type", "text");
            fieldInput.setAttribute("name", item);
            fieldInput.setAttribute("id", item);
            form.appendChild(fieldLabel);
            form.appendChild(fieldInput);
        } else {
            const fieldLabel = document.createElement("label");
            const fieldInput = document.createElement("textarea");
            fieldLabel.textContent = item;
            fieldInput.setAttribute("name", item);
            fieldInput.setAttribute("id", item);
            fieldInput.setAttribute("cols", "30");
            fieldInput.setAttribute("rows", "10");
            form.appendChild(fieldLabel);
            form.appendChild(fieldInput);
        }
    });
    contactFormSection.appendChild(formTitle);
    contactFormSection.appendChild($hr);
    contactFormSection.appendChild(form);

    contactSection.append(addressSection, contactFormSection);

    component.append(contactTitle, contactSection);

    return component;
}

export default contactPage;
