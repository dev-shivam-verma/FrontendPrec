let cont = document.querySelector('.container');

function createCard(title, channel, views, uploaded, imgSrc, duration){
    let viewsParsed = "0"

    if (views >= 1000000000){
        viewsParsed = `${Math.floor(views/1000000000)} B`
    } else if (views >= 1000000){
        viewsParsed = `${Math.floor(views/1000000)} M`
    } else if (views >= 1000) {
        viewsParsed = `${Math.floor(views/1000)} K`
    } else {
        viewsParsed = `${views}`
    }
    
    
    
    
    let card = document.createElement("div")
    card.classList.add("card")

    let thumbnail = document.createElement("div")
    thumbnail.classList.add("thumb")

    let image = document.createElement("img")
    image.setAttribute("src",imgSrc)

    let durationDiv = document.createElement("div")
    durationDiv.classList.add("duration")
    durationDiv.innerText = duration

    let text = document.createElement("div")
    text.classList.add("text")

    let titleHeading = document.createElement("h3")
    titleHeading.innerText = title

    let details = document.createElement("div")
    details.classList.add("details")

    let channelText = document.createElement("li")
    channelText.innerText = channel

    let viewsText = document.createElement("li")
    viewsText.innerText = viewsParsed

    let uploadedText = document.createElement("li")
    uploadedText.innerText = `${uploaded} months ago`




    // inserting in dom
    details.append(channelText)
    details.append(viewsText)
    details.append(uploadedText)

    text.append(titleHeading)
    text.append(details)

    thumbnail.append(image)
    thumbnail.append(durationDiv)

    card.append(thumbnail)
    card.append(text)

    cont.append(card)
}


// i will call the funciton every 1 second
setInterval(() => {
    let title = "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73";
    let channel = "Code With Harry";
    let views = Math.floor(Math.random() * 1000000000) + 1;
    let uploaded = Math.floor(Math.random() * 12) + 1; 
    let imgSrc = "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB4h3uLYCuzx1GRi4VEg_QRgdPr0w"; 
    let duration = `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`; 

    createCard(title, channel, views, uploaded, imgSrc, duration);
}, 1000); 