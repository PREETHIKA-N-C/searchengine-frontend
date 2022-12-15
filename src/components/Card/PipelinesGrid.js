import React from 'react'
import PipelineCard from './PipelineCard';

// import IMAGE_NOT_FOUND from '../../assets/not-found.png'
import data from '../sample/dummy'
function PipelinesGrid({result}) {
    return (
        <div className='grid grid-cols-4 gap-16 p-[70px]'>
        {
            data.map((detail,index)=> <PipelineCard  id = {index}
            name = {detail.name}
            image = {detail.imgUrl}
            summary = {detail.summary}
            />)
        }
        </div>
   );
}

export default PipelinesGrid
