let snippets = JSON.parse(localStorage.getItem("snippets")) || [];

function addSnippet() {

const title = document.getElementById("title").value;
const code = document.getElementById("code").value;

if(!title || !code) return;

snippets.push({title, code});

localStorage.setItem("snippets", JSON.stringify(snippets));

document.getElementById("title").value = "";
document.getElementById("code").value = "";

renderSnippets();
}

function renderSnippets(){

const search = document.getElementById("search").value.toLowerCase();
const container = document.getElementById("snippetList");

container.innerHTML = "";

snippets
.filter(s => s.title.toLowerCase().includes(search))
.forEach((snippet,index)=>{

container.innerHTML += `
<div class="bg-white p-4 rounded shadow">
<h2 class="font-bold mb-2">${snippet.title}</h2>

<pre class="bg-gray-200 p-2 text-sm overflow-x-auto">
${snippet.code}
</pre>

<button onclick="copyCode(${index})"
class="mt-2 bg-green-500 text-white px-3 py-1 rounded">
Copy
</button>

<button onclick="deleteSnippet(${index})"
class="mt-2 bg-red-500 text-white px-3 py-1 rounded ml-2">
Delete
</button>
</div>
`;
});
}

function copyCode(index){

navigator.clipboard.writeText(snippets[index].code);

alert("Code copied");
}

function deleteSnippet(index){

snippets.splice(index,1);

localStorage.setItem("snippets", JSON.stringify(snippets));

renderSnippets();
}

renderSnippets();