import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';


export function GiftGrid({category}) {

    const {loading, data} = useFetchGif(category);
    

    return (
        <>
        <h1> {category} </h1>
        <p className='animate__flash'>
            { loading && 'loading'}
        </p>

        { <div className='grid-card'>
            {
                data.map((img) => {
                    return(
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    );
                })
            }
        </div> }
        </>   
    )
}
