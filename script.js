let folders = [
    { name: "Mini Colonies", path: "mini-colonies", authors: ["Zander Lewis", "Calvare", "Cutesy Cookie"] },
    { name: "Endless Waves", path: "endless-waves", authors: ["Zander Lewis", "Calvare", "Cutesy Cookie"] },
];

// Function to list folders
function listFolders(folders) {
    let folderList = document.getElementById('folderList');

    folders.forEach(folder => {
        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.href = folder.path;
        link.textContent = folder.name + " created by " + folder.authors.join(", ");
        listItem.appendChild(link);
        folderList.appendChild(listItem);
    });
}

// Call the function with your folders when the window loads
window.onload = function() {
    listFolders(folders);
}