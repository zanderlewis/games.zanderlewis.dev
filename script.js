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
        link.textContent = folder.name;
        listItem.appendChild(link);
        
        let authors = document.createElement('p');
        let hr = document.createElement('hr');
        authors.textContent = "Authors: " + folder.authors.join(", ");
        let hr2 = document.createElement('hr');
        listItem.appendChild(authors); // Append the authors to the list item
        listItem.appendChild(hr); // Append a horizontal rule to the list item
        listItem.appendChild(hr2); // Append a horizontal rule to the list item

        folderList.appendChild(listItem);
    });
}

// Call the function with your folders when the window loads
window.onload = function() {
    listFolders(folders);
}