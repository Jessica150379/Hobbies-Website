let saveForLaterArray =[];
let save = [];
let aboutMeImage = document.getElementById('aboutMeImg').src;
let aboutMeSaveBtn = document.getElementById('aboutMeSaveBtn');

//if code has run before
if (sessionStorage.getItem("hasCodeRunBefore") === null) {
//then set to store as string        
        sessionStorage.setItem("save", JSON.stringify(saveForLaterArray));
        sessionStorage.setItem("hasCodeRunBefore", true);
        } else {
//else get what was stored        
            saveForLaterArray = JSON.parse(sessionStorage.getItem("save"));
        };

//Function that saves items to storage
function saveForLater(a){
    //Push item to array
        save.push(a);
    //Loop through to check if the item already exists    
        for(let i=0; i< save.length;i++){
    //If item is not there        
        if (saveForLaterArray.indexOf(save[i]) === -1){
    //Then push to array        
            saveForLaterArray.push(save[i]);
            sessionStorage.setItem("save", JSON.stringify(saveForLaterArray));
        } 
           
        }
        alert("You have "+ (saveForLaterArray.length) + " items in your save for later file.");
    };
    

//Event Listeners and functions
aboutMeSaveBtn.addEventListener('click',saveForLater.bind(this,aboutMeImage));

