document.addEventListener("keyup" , e=>{
    if (e.target.matches("#buscador")){


        document.querySelectorAll(".argentina").forEach(movie =>{

            movie.textContent.toLowerCase().includes(e.target.value.toLowerCase())
             ?movie.classList.remove("filtro")
             :movie.classList.add("filtro")
        })
    }
})
