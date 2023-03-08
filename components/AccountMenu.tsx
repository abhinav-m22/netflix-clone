import React from 'react'
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {

    if(!visible) return null;

    const { data } = useCurrentUser();

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-4 flex-col border-gray-800 flex'>
        <div className='flex flex-col gap-3'>
            <div className='px-3 group/item flex flex-row gap-3 items-center w-full items-center justify-center'>
                <img className='w-8 rounded-md' src="/images/green-profile-img.png" alt="" />
                <p className='text-white text-sm group-hover/item:underline font-semibold'>
                    {data?.name}
                </p>
            </div>
            <hr className='bg-gray-600 border-0 h-px my-1'/>
            <button onClick={() => signOut()} className='m-auto px-3 items-center text-center text-white text-sm bg-red-600 py-2  rounded-md w-[50%] hover:bg-red-700 transition'>
                Sign Out
            </button>
        </div>
    </div>
  )
}

export default AccountMenu;