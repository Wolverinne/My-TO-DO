 const todobutton=document.querySelector('#push');
 todobutton.addEventListener("click",addTodo);

 function addTodo() {
    if(document.querySelector('#newtask input').value.length==0){
        alert("Please Enter a Task.")
    }
    else{
        //add HTML
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        //returns all elements in the document that matches a specified CSS selector(s),
        // as a static NodeList object.
        console.log(current_tasks)
        for(var i=0; i<current_tasks.length; i++){
            console.log(i)
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}