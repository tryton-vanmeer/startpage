import config_to_element from "./config.js";

class Terminal
{
    constructor()
    {
        this.insert_links();
    }

    insert_links()
    {
        let ul = document.getElementById("terminal-body-list");

        ul.innerHTML = config_to_element();
    }
}

export default Terminal