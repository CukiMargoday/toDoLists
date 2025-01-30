document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (storedTasks) {
    storedTasks.forEach((task) => tasks.push(task));

    updateTasksList();
    updateStats();
  }
});

let tasks = [];

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    updateTasksList();
    updateStats();
    saveTasks();
  }
};

// function toggle task complete
const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
  updateStats();
  saveTasks();
};

// function delete task
const deleteTask = (window.deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
  saveTasks();
});

// function edit task
const editTask = (window.editTask = (index) => {
  const taskInput = document.getElementById("taskInput");
  taskInput.value = tasks[index].text;

  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
  saveTasks();
});

// function update status stats
const updateStats = () => {
  const completedTasks = tasks.filter((task) => task.completed).length; // function mengfilter task yang dicentang
  const totalTasks = tasks.length; // membuat fungsi total tasks =  panjang teks
  const progress = (completedTasks / totalTasks) * 100; // membuat fungsi progress dengan membandingkan fungsi completed tasks dan total tasks

  // membuat fungsi efek dari progressbar dengan menggunakan class progress dari css
  const progressBar = document.getElementById("progress");

  progressBar.style.width = `${progress}%`;

  // membuat fungsi update status stats nomor otomatis dengan membandingkan completedtasks dengan total tasks
  document.getElementById(
    "numbers"
  ).innerText = `${completedTasks} / ${totalTasks}`;

  // fungsi apabila semua task selesai == dikeluarkan efekConfetti
  if (tasks.length && completedTasks == totalTasks) {
    efekConfetti();
  }
};

const updateTasksList = () => {
  const tasklist = document.getElementById("task-list");
  tasklist.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
    <div class="taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
            <input type="checkbox" class="checkbox" ${
              task.completed ? "checked" : ""
            }/>
            <p>${task.text}</p>
        </div>
        <div class="icons">
          <img src="img/edit.png" onClick="editTask(${index})" />
          <img src="img/bin.png" onClick="deleteTask(${index})" />
        </div>  
    </div>
    `;
    listItem.addEventListener("change", () => toggleTaskComplete(index));
    tasklist.append(listItem);
  });
};

document.getElementById("newTask").addEventListener("click", (e) => {
  e.preventDefault();

  addTask();
});

// function efek
const efekConfetti = () => {
  confetti({
    spread: 360,
    ticks: 200,
    gravity: 1,
    decay: 0.94,
    startVelocity: 30,
    particleCount: 100,
    scalar: 3,
    shapes: ["image"],
    shapeOptions: {
      image: [
        {
          src: "https://particles.js.org/images/fruits/apple.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/avocado.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/banana.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/berries.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/cherry.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/grapes.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/lemon.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/orange.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/peach.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/pear.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/pepper.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/plum.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/star.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/strawberry.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/watermelon.png",
          width: 32,
          height: 32,
        },
        {
          src: "https://particles.js.org/images/fruits/watermelon_slice.png",
          width: 32,
          height: 32,
        },
      ],
    },
  });
};
