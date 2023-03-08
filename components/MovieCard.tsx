import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/router';

interface MovieCardProps {
    data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {

    const router = useRouter();

    return (
        <div className='group bg-zinc-900 col-span relative h-[12vw]'>
            <img
                className='
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
        '
                src={data.thumbnailUrl}
                alt="thumbnail" />

            <div className='
            opacity-0
            absolute
            top-0
            transition
            duration-200
            z-10
            invisible
            sm:visible
            delay-300
            w-full
            scale-0
            group-hover:scale-110
            group-hover:-translate-y-[6vw]
            group-hover:translate-x-[2vw]
            group-hover:opacity-100
        '>
                <img
                    className='
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
            '
                    src={data.thumbnailUrl}
                    alt="thumbnail" />
                <div className='
            
            bg-zinc-800
            z-10
            p-2
            lg:p-4
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
        '>
                    <div className='flex flex-row items-center gap-3'>
                        <div
                            className='
                    cursor-pointer
                    w-6
                    h-6
                    lg:w-10
                    lg:h-10
                    bg-white
                    rounded-full
                    flex
                    justify-center
                    items-center
                    transition
                    hover:bg-neutral-300
                '
                onClick={() => router.push(`/watch/${data?.id}`)}
                        >
                            < BsFillPlayFill size={30} />
                        </div>
                        <FavoriteButton movieId={data?.id}/>
                    </div>

                    <div className='font-semibold text-red-400 text-center'><p className='m-auto'>{data.title}</p></div>

                    <p className='text-green-400 font-semibold mt-3 flex flex-row gap-2 items-center justify-center'>
                        New <span className='text-white'>2023</span><span className='ml-auto'><p className='text-white font-normal text-[10px] md:text-[14px]'>{data.duration}</p></span>
                    </p>
                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default MovieCard;