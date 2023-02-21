
function countrycode(){
    let name=id_country.value
    fetch(`https://newsapi.org/v2/top-headlines?country=${name}&apiKey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>countrynews(data))
}
fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>countrynews(data))


function countrynews(data){
    let neswses=data.articles
    let newsdata=``

    for (let art of neswses){
        newsdata+=`
        <div class="col-6   " >
            <div class=" mb-3  border border-4 border-dark rounded-top rounded-bottom" style="height:950px ;">
                <!-- heder start -->
                <div class="card-header text-center    bg-dark text-white">
                     <h1 >${art.source.name}</h1>
                     <h4>${art.title}</h4>
                     <span>By:${art.author}</span>   
                </div>
                <!-- heder end -->
                <!-- image start -->
                <div class="text-center bg-white">
                    <img src="${art.urlToImage}" class="card-img-top m-3" alt="..." style="height:400px ;width: 600px;">
                </div>
                <!-- image end -->
                <!-- body start -->

                <div class="card-body bg-white p-3 ">
                  <h3 class="card-title">${art.description}</h3>
                  <p class="card-text">${art.content}</p>
                </div>
                <!-- body end -->
                
                <!-- footer start -->
                <div class="card-footer text-muted bg-white p-3 ">
                    <div class="row">
                        <div class="col">${art.publishedAt}</div>
                        <div class="col text-end">
                            <a class=" text-dark" href="${art.url}" style="text-decoration:none;">
                                <button type="button" class="btn btn-dark">Click To The News</button>
                            </a>
                        </div>
                    </div>
                    
                  </div>

                <!-- footer end -->
            </div>
        </div>


        `
    }

    id_shownews.innerHTML=newsdata
}



function checkcategorynews(){
    let category=id_category.value
    console.log(category);
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}



function sportsnews(){
    var ctgry1=id_ctgry1.value 
    console.log(ctgry1)
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${ctgry1}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}
function technologynews(){
    var ctgry2=id_ctgry2.value 
    console.log(ctgry2)
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${ctgry2}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}
function healthnews(){
    var ctgry3=id_ctgry3.value 
    console.log(ctgry3)
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${ctgry3}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}
function businessnews(){
    var ctgry4=id_ctgry4.value 
    console.log(ctgry4)
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${ctgry4}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}
function entertainmentnews(){
    var ctgry5=id_ctgry5.value 
    console.log(ctgry5)
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${ctgry5}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}
function generalnews(){
    var ctgry6=id_ctgry6.value 
    console.log(ctgry6)
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${ctgry6}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}
function sciencenews(){
    var ctgry7=id_ctgry7.value 
    console.log(ctgry7)
    fetch(`https://newsapi.org/v2/top-headlines/sources?category=${ctgry7}&apikey=fe4d28cef8204040991e9bdb89d769fc`).then(res=>res.json()).then(data=>displaynews(data))


}



function displaynews(data){
    let sp=data.sources
    console.log(sp);

    let newsreports=``
    for (let item of sp){

        newsreports+=`
        <div class="col-4 "  >
        <div class=" mb-3  border border-4 border-dark rounded-top rounded-bottom" style="height:500px ;" > 
            <!-- heder start -->
            <div class="card-header text-center    bg-dark text-white">
                 <h1 >${item.name}</h1>
                 <p>${item.category}</p> 
            </div>
            <!-- heder end -->
            <!-- image start -->
           
            <!-- image end -->
            <!-- body start -->

            <div class="card-body bg-white p-3 ">
              <h5 class="card-title">${item.description}</h5>
            
            </div>
            <!-- body end -->
            
            <!-- footer start -->
            <div class="card-footer text-muted bg-white p-3 ">
                <div class="row">
                    <div class="col">${item.language}</div>
                    <div class="col text-end">
                        <a class=" text-dark" href="${item.url}" style="text-decoration:none;">
                            <button type="button" class="btn btn-dark">Click To The News</button>
                        </a>
                    </div>
                </div>
                
              </div>

            <!-- footer end -->
        </div>
    </div>
        `
    }

    id_shownews.innerHTML=newsreports


}