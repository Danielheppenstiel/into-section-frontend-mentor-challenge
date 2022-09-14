# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://github.com/Danielheppenstiel/into-section-frontend-mentor-challenge)
- Live Site URL: [Add live site URL here](https://danielheppenstiel.github.io/into-section-frontend-mentor-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- google fonts

### What I learned

I've learned a deeper understanding of arranging content on the DOM using CSS grid and flexbox. As well, I was able to reinforce some basic JavaScript concepts and apply them in this project. I utilized online resources to (listed below) solve problems. During and after the development of this project gave me insight on strengths and also on what I need to focus on to improve.

```` css
nav {
    background-color: var(--clr-white);
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 0.75fr 0.75fr 0.75fr 0.75fr 1fr 1fr 1fr;
    grid-template-areas: 
    'logo features company careers about blank hamburger access';
}

function toggleFeatures() {

    const getFeatureItems = document.querySelector('.feature-items');

    if (getFeatureItems.style.display === 'none') {
        getFeatureItems.style.display = 'block';
    } else {
        getFeatureItems.style.display = 'none';
    }

}

---

## Author

- Website - [Daniel Heppenstiel - Github](https://github.com/Danielheppenstiel)
- Frontend Mentor - [@Danielheppenstiel](https://www.frontendmentor.io/profile/Danielheppenstiel)
- Twitter - [@DevWithDan](https://twitter.com/DevWithDan)


## Acknowledgments

 - W3Schools - (https://www.w3schools.com/)
 - Mozilla Developer Network - (https://developer.mozilla.org/en-US/)
 - Stack Overflow - (https://stackoverflow.com/)
