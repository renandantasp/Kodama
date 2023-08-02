import type { ReactElement } from 'react'
import { IGameStore } from 'types/generalTypes'

interface Props {
  stores : IGameStore[]
}

function StoreButtons({stores}:Props): ReactElement {
  return (
  
    <div className='flex flex-wrap flex-row justify-start mx-6'>
      {stores.map(s => 
        <a 
        href={`https://${s.store.domain}`} 
        target="_blank" 
        className='bg-neutral-700 hover:bg-neutral-100 text-sm text-neutral-400 hover:text-neutral-900 duration-500 ease-in-out mx-2 mb-2 text-center py-3 rounded w-full lg:w-[45%]'>
          {s.store.name}
        </a>
        )}
    </div>
    
  )}


export default StoreButtons