let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

let homeScore = 0
let guesScore = 0

function addOne(clicked) {
    if (clicked === "home-one") {
        homeScore += 1
        homeEl.textContent = homeScore
    }
    else {
        guesScore += 1
        guestEl.textContent = guesScore
    }
}

function addTwo(clicked) {
    if (clicked === "home-two") {
        homeScore += 2
        homeEl.textContent = homeScore
    }
    else {
        guesScore += 2
        guestEl.textContent = guesScore
    }
}

function addThree(clicked) {
    if (clicked === "home-three") {
        homeScore += 3
        homeEl.textContent = homeScore
    }
    else {
        guesScore += 3
        guestEl.textContent = guesScore
    }
}

function reset(clicked) {
    if (clicked === "home-reset") {
        homeScore = 0
        homeEl.textContent = homeScore
    }
    else {
        guesScore = 0
        guestEl.textContent = guesScore
    }
}