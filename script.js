
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

// Portfolio items

const portfolio = [
    {
        project: "Bookster",
        image: "./images/booksterLogo.png",
        alt: "Bookster Logo",
        siteUrl: "https://fac29a.github.io/fran-and-lucien-API-project/",
        repoUrl: "https://github.com/FAC29A/fran-and-lucien-API-project",
        textClass: "bookster"
    },
    {
        project: "Strange Talents",
        image: "./images/earMan.png",
        alt: "Ear Man",
        siteUrl: "https://fac29a.github.io/Fran-and-Phoebe-Agency/",
        repoUrl: "https://github.com/FAC29A/Fran-and-Phoebe-Agency",
        textClass: "strange"
    },
    {
        project: "Colour Palette Creator",
        image: "./images/paintPalette.png",
        alt: "Paint Palette",
        siteUrl: "https://frannerz.github.io/color-palette/",
        repoUrl: "https://github.com/Frannerz/color-palette",
        textClass: "color"
    },
    {
        project: "Teach and Travel",
        image: "./images/airplane.png",
        alt: "Plane",
        siteUrl: "https://frannerz.github.io/Project-1",
        repoUrl: "https://github.com/Frannerz/Project-1",
        textClass: "travel"
    },
    {
        project: "Pass the Pigs",
        image: "./images/pigsBlackandWhite.png",
        alt: "Pigs",
        siteUrl: "https://frannerz.github.io/game-project/",
        repoUrl: "https://github.com/Frannerz/game-project",
        textClass: "travel"
    },
    {
        project: "Archive",
        image: "./images/macbook.png",
        alt: "Macbook",
        siteUrl: "https://frannerz.github.io/Portfolio-2023/",
        repoUrl: "https://github.com/Frannerz/Portfolio-2023",
        textClass: "archive"
    },

]

const portfolioContent = document.getElementById('portfolio-content');

portfolio.forEach((item) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.innerHTML = `
    <div class="portfolio-items">
      <div class="img-container">
        <img src="${item.image}" alt="${item.alt}">
      </div>
      <div>
        <a href="${item.siteUrl}" target="_blank">
            <p class="text ${item.textClass}">${item.project}</p>
        </a>
      </div>
      <div>
        <a href="${item.repoUrl}" target="_blank">
            <p class="text ${item.textClass}">Repo</p>
        </a>
      </div>
    </div>
    `;
    portfolioContent.appendChild(portfolioItem);
});
