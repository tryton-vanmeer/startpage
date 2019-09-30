"use strict";

// Setup markup for links from config.js and set body innerHTML.
const markup = `
${links.map(link => `
    <li class="link">
        <img src="icon.png"></img>
        <a href="${link.href}">
            ${link.name}
        </a>
        <span class="filesize">${link.size}</span>
    </li>
`).join("")}
`;

const links_outer = document.getElementById("links");
links_outer.innerHTML = markup;
