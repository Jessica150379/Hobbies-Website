
let saveForLaterArray=[];
let save = [];

function updateSaveForLaterList(){
        let savedItems = JSON.parse(sessionStorage.getItem("save"));
        let i = 0;
        savedItems.forEach(function(p) {
//Create an option tag for each book            
        let listItem = document.createElement("li");
//Set the innerHTMl to the title             
        listItem.innerHTML =JSON.stringify(savedItems[i]);
//Set the info value of the specific book 
        let saveForLaterList = document.getElementById('saveForLaterItems');      
        saveForLaterList.appendChild(listItem);
        i = i + 1;

});
};
updateSaveForLaterList();
    



























    

    