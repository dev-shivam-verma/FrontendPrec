
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showBlinkingText(element, text, active) {
    let child = document.createElement("div")
    element.append(child)
    while (active.isActive) {
        for (let i = 0; i < 3; i++) {
            child.innerText = text + ".".repeat(i + 1)
            await sleep(500)
        }
    }
}

function getRandomDelay() {
    return Math.floor(Math.random() * 10) % 7 * 1000;
}

async function main() {
    const element = document.body

    {
        let active = {isActive: true}
        showBlinkingText(element, "Initializing Hacking", active)
        await sleep(getRandomDelay())
        active.isActive = false
    }


    {
        let active = {isActive: true}
        showBlinkingText(element, "Reading your files", active)
        await sleep(getRandomDelay())
        active.isActive = false
    }

    {
        let active = {isActive: true}
        showBlinkingText(element, "Passwords files Detected", active)
        await sleep(getRandomDelay())
        active.isActive = false
    }

    {
        let active = {isActive: true}
        showBlinkingText(element, "Sending all passwords and personal files to server", active)
        await sleep(getRandomDelay())
        active.isActive = false
    }


    {
        let active = {isActive: true}
        showBlinkingText(element, "cleaning up", active)
        await sleep(getRandomDelay())
        active.isActive = false
    }
}

main()