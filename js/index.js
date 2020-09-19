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

function on_arrow_down()
{

}

function on_arrow_up()
{

}

let ACTIVE_LINK = -1;
let link_list;

document.addEventListener("DOMContentLoaded", ()=> {
    insert_links();

    link_list = document.getElementById("link-list").children;
});

window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented)
    {
        return; // Do nothing if event already handled.
    }

    switch(event.code)
    {
        case "ArrowDown":
            on_arrow_down();
            break;

        case "ArrowUp":
            on_arrow_up();
            break;
    }
});