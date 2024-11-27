const form = document.querySelector("form");
const container = document.querySelector(".container");
const title = document.getElementById("title");
const description = document.getElementById("description");

const tasks = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];


const showAlltasks = () => {
    tasks.forEach((value, index) => {
        const div = document.createElement("div")
        div.setAttribute("class","task")

        const innerDiv = document.createElement("div")
        div.append(innerDiv)

        const p = document.createElement("p")
        p.innerText = value.title
        innerDiv.append(p)

        const span = document.createElement("span")
        span.innerText = value.description
        innerDiv.append(span)

        const button = document.createElement("button")
        button.setAttribute("class", "deleteBtn")
        button.innerText = "-"

        button.addEventListener("click", () => {
            deleteTask();
            tasks.splice(index,1)
            localStorage.setItem("task",JSON.stringify(tasks))
            showAlltasks();
        })

        div.append(button)


        container.append(div);
    })

}

const deleteTask = () => {
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}

showAlltasks()


form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    deleteTask();

    tasks.push({
        title: title.value,
        description: description.value
    });

    console.log(tasks);

    title.value = '';
    description.value = '';

    localStorage.setItem("task", JSON.stringify(tasks));
    showAlltasks()
});
