const links = [
    // Developer
    {name: "Github", href: "https://github.com"},
    {name: "GitLab", href: "https://gitlab.com"},
    {name: "GNOME GitLab", href: "https://gitlab.gnome.org"},
    {name: "Arch Linux", href: "https://www.archlinux.org/"},

    // Social
    {name: "Hangouts", href: "https://hangouts.google.com"},
    {name: "Email", href: "https://beta.protonmail.com/inbox"},
    {name: "Mastodon", href: "https://linuxrocks.online"},

    // Forums
    {name: "Level1Techs Forums", href: "https://forum.level1techs.com"},
    {name: "HE Forum", href:"https://forum.heavyelement.io"},
    {name: "Destination Linux", href:"https://discourse.destinationlinux.network/"},
    {name: "GNOME Discourse", href: "https://discourse.gnome.org/"},
    {name: "LTT Forums", href: "https://linustechtips.com/main/"},

    // Reddit
    {name: "Reddit", href: "https://www.reddit.com"},
    {name: "/r/Linux_Gaming", href: "https://www.reddit.com/r/linux_gaming"},

    // Gaming
    {name: "Steam", href: "https://store.steampowered.com"},
    {name: "GoG", href: "https://www.gog.com/"},
    {name: "Humble Bundle", href: "https://www.humblebundle.com"},
    {name: "Chrono.GG", href: "https://www.chrono.gg/"},

    // Other
    {name: "SteamGridDB", href: "https://www.steamgriddb.com"},
    {name: "Titanium Server", href: "http://titanium-server.lan"},
    {name: "Invidious", href: "https://www.youtube.com/feed/subscriptions"},
    {name: "Channels", href: "./Channels"},
]

function insert_links()
{
    let items = [];

    for (let link of links)
    {
        items.push(
            `<li><a href="${link.href}"><span class="yellow">"${link.name}"</span>,<a/></li>`
        );
    }

    let ul = document.getElementById("link-list");
    ul.innerHTML = items.join("");
}

document.addEventListener("DOMContentLoaded", ()=> {
    insert_links();
});