import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const geetImages = async() => {
        const newImage = await getGifs( category );
        setImages(newImage)
        setIsLoading(false)
    }
    
    useEffect( () => {
       geetImages();
    }, [ ])
  
    return {
    images,
    isLoading
  }
}
