export const getGifts = async (category) => {
    const limit = 10
    const api_key = "bPPvoq4YCDvshI9RgkffB7yOs8VIAstc";
    const search = category.trim().replace(' ','+');


    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limit}&api_key=${api_key}` ;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifts;
}