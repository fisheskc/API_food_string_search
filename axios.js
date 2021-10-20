let searchMenu = document.forms['search-menu'].querySelector('input')
let div = document.createElement('div');

    searchMenu.addEventListener("keyup", async function(e) {
    e.preventDefault();
    const term = e.target.value.toLowerCase();

    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
        .then(res => {
        let apiRoute = res.data.meals
            apiRoute.map((item) => {
           if(item.strMeal.toLowerCase().indexOf(term) != -1) {
            div.innerHTML = `<h3>This is the results of your search: ${item.strMeal}</h3>`
            return item.strMeal; 
           }
        })
    })
        document.body.appendChild(div) 
    })
