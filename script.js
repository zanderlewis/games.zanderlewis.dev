let folders = [
    { name: "Mini Colonies", path: "mini-colonies" },
    { name: "Endless Waves", path: "endless-waves" },
];

// Function to list folders
function listFolders(folders) {
    let folderList = document.getElementById('folderList');

    folders.forEach(folder => {
        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.href = folder.path;
        link.textContent = folder.name;
        listItem.appendChild(link);
        folderList.appendChild(listItem);
    });
}

// Call the function with your folders when the window loads
window.onload = function() {
    listFolders(folders);
}