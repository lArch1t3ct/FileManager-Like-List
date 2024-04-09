function toggleSelectedCSSClass(li){
    li.classList.toggle("selected");
}

function multipleSelectedItems(li){

}

const myList = document.querySelector("#myList");
myList.onclick = (event) => {
    if ( event.target.tagName != "LI" ) return;

    if( event.ctrlKey || event.metaKey ){
        toggleSelectedCSSClass(event.target);
    }

};