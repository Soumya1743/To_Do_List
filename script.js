const task = document.getElementById('task');
const button = document.getElementById('btn');
const date1 = document.getElementById('date');
const taskList = document.getElementById('taskList');


button.addEventListener('click', () =>{
    let Div = document.createElement('div');
    Div.innerText = task.value + ` ==>> ` + date1.value;
    Div.id = "div-list";
    task.value = '';
    
    const button1 = document.createElement('button');
    button1.innerText = "Delete";
    button1.id = "delete";
    date1.id = "date1";
    Div.append(button1);
    button1.addEventListener('click', () =>{
        Div.remove();
    });
    date1.value = '';
    taskList.append(Div);
});


// let d = document.getElementById('download');
// d.addEventListener('click', download_image);
// function download_image(){
//     html2canvas(taskList).then(canvas=>{
//         const link = document.createElement('a');
//         link.href = canvas.toDataURL('image/png');
//         link.download = 'image.png';
//         link.click();
//     });
// }





// function editable(button2){
//     if(button2.innerText == "save"){
//         task.setAttribute("contenteditable", "false");
//         task.innerText = "Edit";
//     }
//     else{
//         task.setAttribute("contenteditable", "true");
//         task.innerText = "Save";
//     }
// }