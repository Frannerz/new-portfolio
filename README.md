#My Updated Portfolio

##Design
I decided to use a simple, retro style for my new portfolio.
This involved:
- Selecting a retro font
- editing images to grey-scale and 'posterised'
- Choosing simple complimentary colours

I initially used a grid layout but it worked better using flex-box (and this also made it easier to edit for responsiveness).

##Javascript
Kept JS simple on this site. Wanted to create a 1 page, smooth scrolling site.

This code ensures the HTML document first loads, then selects each of the nav a elements and adds an event listener for each one. It then scrolls 'smoothly' to the correct target section:

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


##Responsiveness
I started by adding media queries for iPhones. Most of the layouts were kept the same, just made elements smaller and adjusted font size.

Here is an example of responsive view on an iphone:
[Screenshot of responsive view on iPhone.](/../main/images/responsive.png)

The final page needed the most editing due to the large amount of text. I made the following changes:
- Changed display settings to put image behind text
- Changed opacity of image to make text easier to read
- Set overflow on text container to scroll
- Decreased text, margins and padding sizes

After adding media queries for different iPhones, I checked other screen sizes and adjusted accordingly.