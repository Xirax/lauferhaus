var PREV_CARD_ID = 'logo';

function flipCard(ID, sdisplay = 'flex'){
    if(ID != PREV_CARD_ID){
        if(PREV_CARD_ID == 'logo') {
            flipClasses(PREV_CARD_ID, 'lanimate', 'qanimate');
            document.getElementById(PREV_CARD_ID).classList.remove('push-in');
            document.getElementById("popup").style.display = "none";
        }
        if(PREV_CARD_ID != null) flipClasses(PREV_CARD_ID, 'card-in', 'card-out');

        setTimeout(() => {
           document.getElementById(PREV_CARD_ID).style.display = 'none';
           document.getElementById(ID).style.display = sdisplay;
           flipClasses(ID, 'card-out', 'card-in');
            PREV_CARD_ID = ID;

            if(window.screen.width <= 800 && ID != 'logo'){
                document.getElementById('close-button').style.display = 'flex';

                document.getElementById('page-content').scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
           }

        }, 350);
    }
}

function flipClasses(ID, remove, add){
    document.getElementById(ID).classList.remove(remove);
    document.getElementById(ID).classList.add(add);
}

function closeCurrentSection(){
    flipCard('logo');
    document.getElementById('close-button').style.display = 'none';
}


setTimeout(() => {
    
})