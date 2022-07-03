const tabItems = document.querySelectorAll('.tab-item');
const tabcontentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab selected
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabcontentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabcontentItem.classList.add('show');
}

//remove border func
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


//remove show
function removeShow(){
    tabcontentItems.forEach(item => item.classList.remove('show'));
}

//listen for a tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));


