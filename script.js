document.addEventListener("DOMContentLoaded", function(e){
     phones.forEach(tel=>{
    let div = document.createElement("div")
    div.classList.add("col-3", "mt-2")
    div.innerHTML =`
    <div class="card" style="width: 18rem;">
    <img src="${tel.rasmi}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${tel.nomi}</h5>
    <p class="card-text">Brend: ${tel.brend}</p>
    <a href="productDetail.html?id=${tel.id}" class="btn btn-primary">Info</a>
    </div>
  </div>`
  document.querySelector(".row").append(div)
  })
  
  let login = localStorage.getItem("login")
  if(login){
    document.querySelector("#checkLogin").innerHTML = `
    <b style="color: white">${login}</b>
    <svg xmlns="http://www.w3.org/2000/svg" id="exit" width="25" height="25" style="color:white; margin-left:15px" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
    `
    let li = document.createElement("li")  
    li.classList.add("nav-item")
    li.innerHTML = `
    <a class="nav-link" href="./addProduct.html">add product</a>
    `

    document.querySelector("#menuList").append(li)
  }


  document.body.addEventListener("click", function(e){
    if(e.target.closest("#exit")){
      localStorage.clear()
      location.reload()
    }
   })
   
 })
