// Простая логика прототипа
const recipes=[
{name:"Овсянка с ягодами",category:"завтрак",calories:250,protein:10,fat:5,carbs:40},
{name:"Смузи банан-немолочка",category:"смузи",calories:180,protein:3,fat:2,carbs:35},
{name:"Соус авокадо",category:"соусы",calories:120,protein:2,fat:10,carbs:5}
];
function showSection(id){document.querySelectorAll('.section').forEach(s=>s.style.display='none');document.getElementById(id).style.display='block';}
function renderRecipes(){let ul=document.getElementById('recipeList');ul.innerHTML='';recipes.forEach(r=>{let li=document.createElement('li');li.textContent=`${r.name} (${r.calories} ккал, Б:${r.protein}Ж:${r.fat}У:${r.carbs})`;ul.appendChild(li);});}
renderRecipes();

// Дневник
function saveDiary(){let text=document.getElementById('diaryInput').value;if(text==='')return;let ul=document.getElementById('diaryList');let li=document.createElement('li');li.textContent=text;ul.appendChild(li);document.getElementById('diaryInput').value='';}

// Анализы
document.getElementById('uploadAnalysis').addEventListener('change',e=>{let ul=document.getElementById('analysisList');for(let f of e.target.files){let li=document.createElement('li');li.textContent=f.name;ul.appendChild(li);}});
// Схемы
document.getElementById('uploadScheme').addEventListener('change',e=>{let ul=document.getElementById('schemeList');for(let f of e.target.files){let li=document.createElement('li');li.textContent=f.name;ul.appendChild(li);}});

// Вода
let water=0;
function drinkWater(){water++;document.getElementById('waterCount').textContent=water;}

// Активность (симуляция шагов)
let steps=0;
function simulateSteps(){steps+=1000;document.getElementById('stepsCount').textContent=steps;}
