const firstElementToFadeIn = document.querySelector('.fade-in-first')
const elementsToFadeIn = document.querySelectorAll('.fade-in')
const navBar = document.getElementById('navbar');
const video = document.getElementById('video');
const playPauseBtn = document.getElementsByClassName('play-pause')[0]
const newsLetterButton = document.getElementsByClassName('newsletter-button')[0]
const newsLetterPopUp = document.getElementsByClassName('newsletter-popup')[0]
const newsLetterCloseButton = document.getElementsByClassName('close')[0]
const hamburgerMenuButton = document.getElementsByClassName('hamburger')[0]
const mobileNavigationContainer = document.getElementsByClassName('mobile-navigation-container')[0]
const hamburgerBars = document.getElementsByClassName('bar')
let count = 0;

hamburgerMenuButton.addEventListener('click', () => {
    count++;
    mobileNavigationContainer.classList.toggle('show-nav');
    window.removeEventListener('scroll', navHideAndShow);
    hamburgerBars[1].classList.toggle('disappear')
    hamburgerBars[0].classList.toggle('move')
    hamburgerBars[2].classList.toggle('move')
    console.log(count)
    let remainder = count % 2;
    if (remainder === 0) {
        window.addEventListener('scroll', navHideAndShow)
    } else {
        return
    }
})

video.controls = false

playPauseBtn.addEventListener('click', () => {
    video.play();
    video.controls = true;
    playPauseBtn.style.opacity = '0';
    setTimeout(() => {
        playPauseBtn.style.display = 'none'
    }, 500);
})

newsLetterButton.addEventListener('click', () => {
    newsLetterPopUp.classList.add('slide-up')
})
newsLetterCloseButton.addEventListener('click', () => {
    newsLetterPopUp.classList.remove('slide-up')
})

var initialScrollTop = window.pageYOffset;

function navHideAndShow() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > initialScrollTop) {
        navBar.style.position = 'fixed'
        navBar.style.top = '-120px'
    } else {
        navBar.style.position = 'fixed'
        navBar.style.top = '0'
    }
    initialScrollTop = scrollTop;
}

window.addEventListener('scroll', navHideAndShow)

const optionsForAll = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px'
}

const fadeInOnScroll = new IntersectionObserver(function (entries, fadeInOnScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear')
            fadeInOnScroll.unobserve(entry.target)
        } else {
            return;
        }
    })
}, optionsForAll)

elementsToFadeIn.forEach(element => {
    fadeInOnScroll.observe(element)
})

const optionsForFirst = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
}

const fadeInFirst = new IntersectionObserver(function (firstElementToFadeIn, fadeInFirst) {
    if (firstElementToFadeIn[0].isIntersecting) {
        firstElementToFadeIn[0].target.classList.add('appear')
        fadeInFirst.unobserve(firstElementToFadeIn[0].target)
    } else {
        return
    }
}, optionsForFirst)

fadeInFirst.observe(firstElementToFadeIn)

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)