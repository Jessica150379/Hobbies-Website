let afroLink = document.getElementById('afrolatinext').href;
let quote1 = document.getElementById("quote1").innerText;
let quote2 = document.getElementById("quote2").innerText;
let saveForLaterArray=[];
let danceQuoteImg = document.getElementById('danceQuoteImg').src;
let saveForLaterAfroBtn = document.getElementById('saveForLaterAfro');
let saveForLaterQuote1Btn = document.getElementById('saveForLaterQuote1');
let saveForLaterDanceImgBtn = document.getElementById('saveForlaterDanceImg');
let saveForLaterQuote2Btn = document.getElementById('saveForLaterQuote2');
let save = [];


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
//Set to storage        
        sessionStorage.setItem("save", JSON.stringify(saveForLaterArray));
    } 
    
    }
//Alert message    
    alert("You have "+ (saveForLaterArray.length) + " items in your save for later file.");  
};

//Setting the feedback form to hide on page load
$(function(){
    $('#feedbackForm').hide();
})

//Hide and show feedback form
$(function(){
    $(".feedbackHead").click (function(){
    $('#feedbackForm').toggle();
})
})

//Quote image animate and chained effects
$(function(){
    setInterval(500);
    $('#watchmedance').click(function(){
    $('.dancingquotesimg').fadeOut(500).fadeIn(500).slideUp(500).slideDown(500);
    $('.dancingquotesimg').animate({height:"200px",width:"200px"});
    $('.dancingquotesimg').animate({height:"400px",width:"700px"});
    })
})

//Accordion drop down
$(function(){
    //using the built in accordion function.
    $('#dropdownaccordion').accordion({ 
    });
});  

//Event Listeners and functions
saveForLaterAfroBtn.addEventListener('click',saveForLater.bind(this,afroLink));
saveForLaterQuote1Btn.addEventListener('click',saveForLater.bind(this,quote1));
saveForLaterDanceImgBtn.addEventListener('click',saveForLater.bind(this,danceQuoteImg));
saveForLaterQuote2Btn.addEventListener('click',saveForLater.bind(this,quote2));