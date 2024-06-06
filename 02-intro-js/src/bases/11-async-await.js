



const getImage = async() =>{
    try {
        const apiKey = 'I7uo342cRNZT5wi9UMBh9fuCZvsYdkqm';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await response.json();
        const {url} = data.images.original;
        const image = document.createElement("img");
        image.src = url;
        document.body.appendChild(image);
    } catch (err){
        console.error(err);
    }


}

getImage();

// const apiKey = 'I7uo342cRNZT5wi9UMBh9fuCZvsYdkqm';
//
// const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//
// request.then(response => response.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.appendChild(img);
//
//     })
//     .catch(console.warn)
