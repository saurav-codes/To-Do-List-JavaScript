function Update_list() {
    let str = '';
    tableEl= document.getElementById('table');
    itemsJson= localStorage.getItem('itemsJson');
    itemsJsonArray= JSON.parse(itemsJson);
    for (var i = 0; i < itemsJsonArray.length; i++) {
        str+= `<tr>
               <th scope="row">${i+1}</th>
               <td>${itemsJsonArray[i][0]}</td>
               <td>${itemsJsonArray[i][1]}</td>
               <td><button onclick=Delete_item(${i}) class="btn btn-sm btn-danger">Delete</button></td>
               </tr> `
    }
    tableEl.innerHTML= str;
}

function addItem(){
    title= document.getElementById('title').value;
    desc= document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemsJsonArray= [];
        itemsJsonArray.push([title, desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
        console.log("successfully added ",localStorage.getItem('itemsJson'));
    }
    else{
        itemsJson= localStorage.getItem('itemsJson');
        itemsJsonArray= JSON.parse(itemsJson);
        itemsJsonArray.push([title,desc]);        
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
        console.log("successfully added ",localStorage.getItem('itemsJson'));
    }
    
    Update_list()
}

function Delete_item(index) {
    itemsJson= localStorage.getItem('itemsJson');
    itemsJsonArray= JSON.parse(itemsJson);
    itemsJsonArray.splice(index,1)
    console.log('item Deleted');
    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    Update_list()

}

window.onload= Update_list()