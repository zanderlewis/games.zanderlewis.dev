let folders = [
    { name: "Empty", path: "empty-iframe.html", authors: ["Unknown"] }, // Keep this here for the default iframe
    { name: "Mini Colonies", path: "https://games.zanderlewis.dev/mini-colonies", authors: ["Zander Lewis", "Calvare", "Cutesy Cookie"] },
    { name: "Endless Waves", path: "https://games.zanderlewis.dev/endless-waves", authors: ["Zander Lewis", "Calvare", "Cutesy Cookie"] },
];

// Function to list games
function listGames(folders) {
    let gameList = document.getElementById('gameList');
    let currentFolder = folders.find(folder => folder.name === "Empty"); // Start with the "Empty" folder

    folders.forEach(folder => {
        // Skip the "Empty" folder
        if (folder.name === "Empty") {
            return;
        }

        let item = document.createElement('div');
        
        let button = document.createElement('button');
        button.className = "bg-gray-500 text-white py-2 px-4 rounded-full cursor-pointer text-lg";
        button.textContent = "Load " + folder.name;
        button.onclick = function() {
            // Only load the iframe if it's not the current one
            if (folder !== currentFolder) {
                loadIframe(folder);
                currentFolder = folder; // Update the current folder
            }
            else {
                button.textContent = "Already loaded";
                // Reset the button text after 2 seconds
                setTimeout(() => {
                    button.textContent = "Load " + folder.name;
                }, 2000);
            }
        };
        item.appendChild(button);
        
        let authors = document.createElement('p');
        authors.textContent = "Authors: " + folder.authors.join(", ");
        authors.className = "p-3";
        item.appendChild(authors);

        gameList.appendChild(item);
    });
}

function loadIframe(folder) {
    let iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.innerHTML = ''; // Clear the container

    // Set the display to flex, align and justify content to the center
    iframeContainer.style.display = 'flex';
    iframeContainer.style.alignItems = 'center';
    iframeContainer.style.justifyContent = 'center';

    let iframe = document.createElement('iframe');
    iframe.src = folder.path;
    iframe.width = "480px";
    iframe.height = "360px";
    iframe.style.border = "5px solid gray";
    iframe.style.borderRadius = "15px";
    iframe.style.textAlign = "center";
    iframeContainer.appendChild(iframe);
}

// Call the function with your folders when the window loads
window.onload = function() {
    listGames(folders);
    // Load the empty HTML file by default
    loadIframe(folders.find(folder => folder.name === "Empty"));
}