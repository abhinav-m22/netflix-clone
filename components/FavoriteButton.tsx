import axios from "axios";
import React, { useCallback, useMemo } from 'react'
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface FavoriteButtonProps{
    movieId: string,
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) => {

    const{ mutate: mutateFavorites } = useFavorites();
    const{ data: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(movieId);
    }, [currentUser, movieId]);

    const toggleFavs = useCallback(async() =>{
        let response;
        if(isFavorite){
            response = await axios.delete('/api/favorite', {data: {movieId}});
        }
        else{
            response = await axios.post('/api/favorite', {movieId});
        }

        const updatedFavIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updatedFavIds
        });

        mutateFavorites();
    }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

    const ToggleIcon = isFavorite ? AiOutlineMinus : AiOutlinePlus;
    const toggleTitle = isFavorite ? "Remove from Favorites" : "Add to favorites"

  return (
    <div className="
    cursor-pointer
    group/item
    w-6
    h-6
    lg:w-10
    lg:h-10
    border-white
    border-2
    rounded-full
    flex
    justify-center
    items-center
    transition
    hover:border-neutral-300
    ml-auto
    "
    
    onClick={toggleFavs}
    >
        <ToggleIcon 
        className="text-white" 
        size={25}
        title={toggleTitle}
        />
    </div>
  )
}

export default FavoriteButton;