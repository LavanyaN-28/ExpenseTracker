const form=document.getElementById("myform");
const expenseAmount=document.getElementById("expenseAmount");
const description=document.getElementById("description");
const category=document.getElementById("category");
const expensesList=document.querySelector("ul");

form.addEventListener("submit",onsubmit);
function onsubmit(event){
    event.preventDefault();

    if(expenseAmount.value === '' || description.value === '' || category.value==='--Select--') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
      } else {
    const li=document.createElement("li");
    li.appendChild(document.createTextNode(`${description.value} : ${category.value} : ${expenseAmount.value}`));

    //Delete
    var deleteBtn=document.createElement('button');
    deleteBtn.className="deleteBtn";
    deleteBtn.appendChild(document.createTextNode('Delete Expenses'));
    li.appendChild(deleteBtn);

    //Edit
    var editBtn=document.createElement('button');
    editBtn.className="editBtn";
    editBtn.appendChild(document.createTextNode('Edit Expenses'));
    li.appendChild(editBtn);

    expensesList.appendChild(li);

    const obj={
        expenseAmount : expenseAmount.value,
        expenseDescription : description.value,
        expenseCategory: category.value
    }

    localStorage.setItem(obj.expenseDescription,JSON.stringify(obj));

    expenseAmount.value="";
    description.value="";
    category.value="";

    //Delete Functionality
    var ul=document.getElementById("expenses")
    deleteBtn.onclick=function(expenseDescription){
            localStorage.removeItem(obj.expenseDescription)
            ul.removeChild(li)
        }

    //Edit Functionality
    editBtn.onclick=function(expenseDescription){
          document.getElementById("expenseAmount").value=obj.expenseAmount;
          document.getElementById("description").value=obj.expenseDescription;
          document.getElementById("category").value=obj.expenseCategory;
          ul.removeChild(li)
          localStorage.removeItem(obj.expenseDescription)
        }
}
}