function newsApi() {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2a6063ec6cad4fbd831994c3beb2184d`;
    axios
    .get(url)
    .then(function (response){
        var dynamic = document.querySelector('.container');
        for(let i=0;i<response.data.articles.length;i++){
        var fetch = document.querySelector('.container').innerHTML;
        dynamic.innerHTML = ` <div class="boxes">
        <div class="box-content">
          <h2>${response.data.articles[i].author}</h2>
          <p>
          ${response.data.articles[i].description}
          </p>
          <h3>${response.data.articles[i].title}</h3>
          <p>
          ${response.data.articles[i].content}
          </p>
          <p>${response.data.articles[i].url}</p>
        </div>
        </div>` + fetch ;
        }
       });
} 
 
