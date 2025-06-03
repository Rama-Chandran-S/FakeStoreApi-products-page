let fetchData = fetch("https://fakestoreapi.com/products")
// console.log(fetchData); //promise

fetchData.then((data)=>{
    // console.log(data); //response
    
    let jsonData = data.json()
    // console.log(jsonData); //promise

    jsonData.then((d)=>{
    
        let outer = document.querySelector(".outer") 
        d.map((m)=>{
            // console.log(m);
            let box=document.createElement("div")
            outer.append(box)
            box.classList.add("box")
            box.innerHTML=`<h3>Title: ${m.title}</h3>
                            <h3>Price: ${m.price}</h3>
                            <h3>Catagory: ${m.category}</h3>
                            <img src="${m.image}" height=100px width=100px>
                            <h3>Rating: ${m.rating.rate}</h3>
                            <h3>Rating Count: ${m.rating.count}</h3>`
                            
        })

                    
    }).catch((e)=>{
        console.log(e);        
    })    
}).catch((err)=>{
    console.log(err);
    
})


