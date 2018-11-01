console.log("hello");

fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> { 
        const title = document.querySelector('#category-label');
        const {CostumeType,Costumes,Year}=data;
        title.innerHTML=  `${CostumeType} ${Year}`;

        const section = document.querySelector('#costumes');        
        
        for (const costume of Costumes) {
            const {Name, ImageUrl, IsMovieRelated} = costume
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            const image = document.createElement('img');
            image.src=ImageUrl;

            section.appendChild(article);
            article.appendChild(image);

            article.appendChild(h3).innerHTML = Name;
            article.appendChild(p).innerHTML = IsMovieRelated ? 
                'Is Movie Related' : 
                'Is NOT Movie Related';
        }
    });