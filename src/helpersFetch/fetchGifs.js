export const getGifs = async (category, offset=0) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=GomHNdKsdOkFsrNwAZ5JOh2Vqvl7eIWj&q=${category}&limit=10&offset=${offset}`

    const resp = await fetch(url);
    const {data} = await resp.json();
    // console.log(resp)
    //console.log(data)

    const gifs = data.map(gif=>{
        return(
            {
                id:gif.id,
                title:gif.title,
                url:gif.images.downsized_medium.url
            }
        )
    })

    // console.log(gifs)

    return(gifs)
    
}