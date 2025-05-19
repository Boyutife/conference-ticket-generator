# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](<./Screenshot/Screenshot%20(89).png>)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/conference-ticket-generator-gQkIA_ALOK)
- Live Site URL: (https://boyutife.github.io/conference-ticket-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Working on this project taught me valuable lessons in both frontend development and adaptive design thinking. Below are some key highlights:

### 🖼️ Handling File Uploads with `URL.createObjectURL()`

One of the most useful things I learned was how to preview uploaded images using the `URL.createObjectURL()` method.

```js
const imagePreview = document.getElementById('preview');
const fileInput = document.getElementById('avatar');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    imagePreview.src = URL.createObjectURL(file);
  }
});
```

This enabled instant avatar preview, greatly improving user experience.

---

### 📱 Mobile-First Development

I originally designed for large screens but had to redo the entire layout, this time building **mobile-first**. This made it easier to scale up using media queries and helped me create a more consistent user experience.

```css
/* Mobile styles */
.container {
  padding: 1rem;
}

/* For larger screens */
@media (min-width: 768px) {
  .container {
    padding: 2rem 4rem;
  }
}
```

---

### 📅 Using `new Date()` in JavaScript

I used the `Date` object to handle and format time data, which came in handy for displaying timestamps or tracking form submissions.

```js
const currentDate = new Date();
console.log(currentDate.toLocaleDateString());
```

---

### 🕵️ Understanding the `hidden` Attribute

Although I didn’t end up using the native `hidden` attribute in HTML, I learned how it works:

```html
<p hidden>This is hidden</p>
```

Instead, I created a reusable `.hidden` class in CSS for better control over element visibility:

```css
.hidden {
  display: none;
}
```

---

📆 Splitting Date() for Readable Formats
While using new Date(), I learned how to convert it into a more human-readable format using toISOString() and split() to extract just the date.

```js
const date = new Date().toISOString().split('T')[0];
console.log(date); // Outputs something like "2025-05-19"
```

This helped me display cleaner timestamps without the time and timezone details.

## ✅ Summary

This project helped me sharpen my front-end development skills, especially around responsiveness, file handling, and dynamic content management. I'm proud of the progress I've made and look forward to building even more interactive and accessible web experiences.

### Continued development

🔍 Areas for Future Focus
As I continue growing as a developer, one of my key goals is to deepen my knowledge of JavaScript. While this project helped reinforce many core concepts, I want to:

Strengthen my understanding of JavaScript fundamentals.

Gain confidence in working with the DOM and event handling.

Explore best practices for structuring and organizing JavaScript code.

Build more dynamic, interactive components from scratch.

Ultimately, I aim to reach a point where I feel fully ready to transition into working with JavaScript frameworks like React, Vue, or Svelte.

### Useful resources

-Chatgpt

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->

- Frontend Mentor - [@Boyutife](https://www.frontendmentor.io/profile/Boyutife)
- Twitter - [@Boluwatife_ven](https://www.twitter.com/Boluwatife_ven)

## Acknowledgments

Thank God for the motivation and inspiration
