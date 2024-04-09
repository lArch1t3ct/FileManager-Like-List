function toggleSelectedCSSClass(li){
    li.classList.toggle("selected");
}

function multipleSelectedItems(li){
    const allListItems = document.querySelectorAll('li');
    for(const item of allListItems){
        item.classList.remove('selected');
    }
    li.classList.add('selected');
}

const myList = document.querySelector("#myList");
myList.onclick = (event) => {
    if ( event.target.tagName != "LI" ) return;

    if( event.ctrlKey || event.metaKey ){
        toggleSelectedCSSClass(event.target);
    } else if ( event.shiftKey ){
        console.log("SHIFT + Click Event {TODO}");
    } else {
        multipleSelectedItems(event.target);
    }
};