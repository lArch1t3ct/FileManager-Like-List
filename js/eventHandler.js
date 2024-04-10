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

function shiftSelection(li){
    const nodeListOfAllItems = document.querySelectorAll('li');
    const arrayofListItems = Array.from(nodeListOfAllItems);
    
    let indexOfSelectedItem = 0; // If there is no selected items consider index = 0 as the first element. Otherwise, the value will change in the for-loop.
    let toIndex;

    for(const index in arrayofListItems){
        if( arrayofListItems[index].className === "selected"){
            indexOfSelectedItem = index;
        }

        if( arrayofListItems[index].innerText === li.innerText){
            toIndex = index;
        }
        arrayofListItems[index].classList.remove('selected');
    }

    let from;
    let to;
    if( indexOfSelectedItem > toIndex ){
        from = toIndex;
        to = indexOfSelectedItem;
    } else {
        from = indexOfSelectedItem;
        to = toIndex;
    }

    for(; from <= to; from++){
        arrayofListItems[from].classList.add('selected');
    }
}

const myList = document.querySelector("#myList");
myList.onclick = (event) => {
    if ( event.target.tagName != "LI" ) return;

    if( event.ctrlKey || event.metaKey ){
        toggleSelectedCSSClass(event.target);
    } else if ( event.shiftKey ){
        shiftSelection(event.target);
    } else {
        multipleSelectedItems(event.target);
    }
};