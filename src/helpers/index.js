export const getGifs = async (category) => {
    const apiKey = "F5fk1Osi2MngFXq4uyOQdUa7O76mjymk";

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=30`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(( { id, title, images } ) => ({
        id,
        title,
        url: images.downsized_medium.url,
        width: +images.downsized_medium.width,
        height: +images.downsized_medium.height,
    })).filter(gif => gif.width >= 400 && gif.height <= 350);;

    return gifs;
}