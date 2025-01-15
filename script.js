document.addEventListener("DOMContentLoaded",(e)=>{
    let row=document.querySelector(".row")
    phones.forEach(tel=>{
let div=document.createElement("div")
div.classList.add("col-4","mt-2")
div.innerHTML=`
<div class="card" ">
<img src="${tel.rasmi}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${tel.nomi}</h5>
  <p class="card-text">${tel.narxi}$</p>
  <a href="productDetail.html?id=${tel.id}" class="btn btn-primary">buy</a>
</div>
`
row.append(div)
    })

document.querySelector("#searchInp").addEventListener("keyup",(e)=>{
  row.innerHTML=""
  let inpVal=document.querySelector("#searchInp").value.trim()
  phones.forEach(tel=>{
    if(tel.nomi. toLowerCase().includes(inpVal.toLowerCase())){
      let div=document.createElement("div")
      div.classList.add("col-3","mt-2")
      div.innerHTML=`
      <div class="card" ">
<img src="${tel.rasmi}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${tel.nomi}</h5>
  <p class="card-text">${tel.narxi}$</p>
  <a href="productDetail.html?id=${tel.id}" class="btn btn-primary">buy</a>
</div>
      `
      row.append(div)
    }
  })
})
})
