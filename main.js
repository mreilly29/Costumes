console.log("hello");
fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> { 
        const title = document.querySelector('#category-label');
        title.innerHTML=  data.CostumeType + ' ' + data.Year;

        const section = document.querySelector('#costumes');
        
        
        for (const costume of data.Costumes) {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const image = document.createElement('img');
            image.src=costume.ImageUrl;
            section.appendChild(article);
            article.appendChild(image);
            article.appendChild(h3).innerHTML = costume.Name;
            article.appendChild(p).innerHTML = costume.IsMovieRelated ? 'Is Movie Related' : 'Is NOT Movie Related';;

            
        

            console.log(costume.Name);
            console.log(costume.IsMovieRelated);
        }
    });