

const recipes = [
  {
    id: 1,
    name: "Chicken Tikka",
    steps: "Fry chicken\nEat chicken"
  },
  {
    id: 2,
    name: "Hakka Noodles",
    steps: "Fry noodles\nEat noodles"
  }
];

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function (error) {
      console.log('Service worker registration failed, error:', error);
    });
}

const add_btn = document.getElementById('app-add-btn')
add_btn.addEventListener('click', function () {
  setupAddForm()
})

function getRecipes() {
  return recipes;
}

function buildList(data) {
  const ul = document.getElementById('app-recipe-list');
  ul.innerHTML = ""
  for (let rec of data) {
    const li = document.createElement('li')
    li.innerHTML = rec.name
    li.onclick = function () {
      makeRecipeSelected(rec)
    }
    ul.appendChild(li)
  }
  return
}

function makeRecipeSelected(rec) {
  const rec_name = document.getElementById('app-recipe-name')
  rec_name.value = rec.name;

  const rec_steps = document.getElementById('app-recipe-steps')
  rec_steps.value = rec.steps;

  const op_text = document.getElementById('app-operation-text')
  op_text.innerHTML = "Selected recipe"

  const op_btn = document.getElementById('app-recipe-operation-btn')
  op_btn.innerText = "Update"
  op_btn.onclick = function () {
    doUpdate(rec.id)
  }
}

function setupAddForm() {
  const op_text = document.getElementById('app-operation-text')
  op_text.innerHTML = "Add new recipe"

  const op_btn = document.getElementById('app-recipe-operation-btn')
  op_btn.innerText = "Add"
  op_btn.onclick = function () {
    doAdd()
  }

  const rec_name = document.getElementById('app-recipe-name')
  rec_name.value = "";
  const rec_steps = document.getElementById('app-recipe-steps')
  rec_steps.value = "";

}

function doAdd() {
  const rec_name = document.getElementById('app-recipe-name').value
  const rec_steps = document.getElementById('app-recipe-steps').value

  const r = {
    id: recipes.length + 1,
    name: rec_name,
    steps: rec_steps
  }

  recipes.push(r);
  buildList(recipes);
  return;
}

function doUpdate(id) {
  const rec_name = document.getElementById('app-recipe-name').value
  const rec_steps = document.getElementById('app-recipe-steps').value

  const index = recipes.map((r) => r.id).indexOf(id)
  recipes[index] = {
    id,
    name: rec_name,
    steps: rec_steps
  }

  buildList(recipes);
  return;
}


function bootstrap() {
  const data = getRecipes()
  buildList(data)
  makeRecipeSelected(data[0])
}


window.onload = function () {
  bootstrap();
}


// From http://foo.com/
fetch('http://bar.com/data.json', {
  mode: 'no-cors' // 'cors' by default
})
  .then(function (response) {
    // Do something with response
  });