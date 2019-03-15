"use strict";

// Setup markup for links from config.json and set body innerHTML.
const markup = `
<div id="links">
    ${links.map(link => `
        <li class="link">
            <a href="${link.href}">
                ${link.name}
            </a>
        </li>
        `).join("")}
</div>
`;

const links_outer = document.getElementById("links-outer");
links_outer.innerHTML = markup;

// Set body background image
document.body.style.backgroundImage = `url("${background}")`
