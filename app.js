const KEY="target-list-v1";
let state=JSON.parse(localStorage.getItem(KEY)||'null')||{name:"My Target Run",items:[],filter:"all",category:"All"};
let editingId=null;
const $=s=>document.querySelector(s);
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
function addItem(name,category="Grocery",qty=1){name=name.trim();if(!name)return;state.items.push({id:crypto.randomUUID(),name,category,qty:Number(qty)||1,done:false});save();render();}
function render(){
  $('#listName').value=state.name;
  const filters=state.items.filter(x=>(state.filter==="all"||state.filter==="open"&&!x.done||state.filter==="done"&&x.done)&&(state.category==="All"||x.category===state.category));
  const list=$('#list');list.innerHTML="";
  filters.forEach(x=>{const el=$('#itemTemplate').content.cloneNode(true),a=el.querySelector('.item');a.classList.toggle('done',x.done);
    a.querySelector('.item-name').textContent=x.name;a.querySelector('.category').textContent=x.category;a.querySelector('.qty').textContent="×"+x.qty;
    a.querySelector('.check').onclick=()=>{x.done=!x.done;save();render()};
    a.querySelector('.target-btn').onclick=()=>window.open("https://www.target.com/s?searchTerm="+encodeURIComponent(x.name),"_blank");
    a.querySelector('.more-btn').onclick=()=>openEdit(x.id);list.appendChild(el)});
  const done=state.items.filter(x=>x.done).length,total=state.items.length;
  $('#progressText').textContent=`${done} of ${total} items`;$('#progressBar').style.width=total?`${done/total*100}%`:"0%";
}
function openEdit(id){editingId=id;const x=state.items.find(i=>i.id===id);$('#editName').value=x.name;$('#editCategory').value=x.category;$('#editQty').value=x.qty;$('#editDialog').showModal();}
$('#addBtn').onclick=()=>{addItem($('#itemInput').value);$('#itemInput').value=""};
$('#itemInput').addEventListener('keydown',e=>{if(e.key==="Enter"){$('#addBtn').click()}});
document.querySelectorAll('[data-quick]').forEach(b=>b.onclick=()=>addItem(b.dataset.quick));
document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});
$('#categoryFilter').onchange=e=>{state.category=e.target.value;render()};
$('#listName').onchange=e=>{state.name=e.target.value.trim()||"My Target Run";save()};
$('#clearDoneBtn').onclick=()=>{state.items=state.items.filter(x=>!x.done);save();render()};
$('#newListBtn').onclick=()=>{if(confirm("Start a new empty list?")){state={name:"My Target Run",items:[],filter:"all",category:"All"};save();render()}};
$('#saveBtn').onclick=()=>{const x=state.items.find(i=>i.id===editingId);if(x){x.name=$('#editName').value.trim()||x.name;x.category=$('#editCategory').value;x.qty=Math.max(1,Number($('#editQty').value)||1);save();render()}};
$('#deleteBtn').onclick=()=>{state.items=state.items.filter(i=>i.id!==editingId);save();render()};
$('#shareBtn').onclick=async()=>{const text=state.name+"\n\n"+state.items.map(x=>`${x.done?"☑":"☐"} ${x.name} ×${x.qty}`).join("\n");if(navigator.share)await navigator.share({title:state.name,text});else await navigator.clipboard.writeText(text)};
if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js");
render();
