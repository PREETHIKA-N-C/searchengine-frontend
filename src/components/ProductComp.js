import React , { useState }  from 'react'
import LightBoxSlider from './LightBoxSlider';
import { FiCodesandbox,FiCalendar,FiBookmark,FiFileText } from "react-icons/fi";
function ProductComp() {
    
  return (
   <div className='flex pl-[90px] pt-[70px] pr-[20px] pb-[20px] space-x-2  h-[650px] overflow-hidden' >
        
        <div className='flex flex-[0.3] border-[1px] border-[#303030] rounded-[10px] bg-[#242a30dc] flex-col items-center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Clash_app_logo.png' className='w-[130px] h-[130px] rounded-[10px] mt-16'/>
        <p className='text-white text-[30px] font-bold mt-8'>DigiverZ OCR</p>
        <p className='text-blue-300 text-base mt-2'>Kaar Inc</p>
        <button className='w-[150px] h-[35px] bg-blue-300 rounded-[5px] mt-10'>Get</button>
        <p className='text-white text-xs mt-2'>Free demo offered</p>
        <div className='h-[70px] w-[100%] flex justify-center space-x-6 mt-12'>
        <lord-icon
    src="https://cdn.lordicon.com/bewubbww.json"
    trigger="morph"
    colors="primary:#A6A5A5" style={{width:"40px",height:"40px"}}></lord-icon>
    <div className='h-[50px] border-l-[2px] border-[#A6A5A5]'></div>
    <div className='text-white text-xs h-[40px] flex flex-col items-center text-[#A6A5A5]'>
        <p className='text-lg text-white'>14 K</p>
        <p>Customers</p>
    </div>
        </div>
        <div className='fixed mt-[515px] ml-[315px] hover:bg-[#ffffff3a] w-8 h-8 p-1 rounded-[4px]'>
        <lord-icon src="https://cdn.lordicon.com/wxhtpnnk.json" trigger="morph" colors="primary:#A6A5A5" style={{width:"25px",height:"25px"}}></lord-icon>
        </div>
        </div>


        <div className='flex-[0.7] space-y-2 overflow-y-scroll overscroll-contain scroll-hide rounded-[10px]'>
           
           

           <div className=' h-[350px] border-[1px] border-[#303030] bg-[#242a30dc] rounded-[10px]'>
              <div className='h-[50px] border-b-[1px] border-[#a6a5a586]'><p className='text-lg font-semibold text-white pl-6 pt-[12px]'>Screenshots</p></div>
            <div className='flex p-6 space-x-6 overflow-x-scroll scroll-hide'>
            <LightBoxSlider/>
            </div>
           </div>



           <div className='pb-10 border-[1px] border-[#303030] bg-[#242a30dc] rounded-[10px]'>
           <div className='h-[50px] border-b-[1px] border-[#a6a5a586]'><p className='text-lg font-semibold text-white pl-6 pt-[12px]'>Application Information</p></div>
           <div className='grid grid-cols-3 gap-9 pt-10 pb-10 pl-6'>


                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%] p-1'>
                       <FiCodesandbox color='white' style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className='flex-[0.5]  text-sm p-1 text-white'>
                        <p>Published by</p>
                       </div>
                       <div className='flex-[0.5]  text-xs p-1 text-blue-300'>
                       <p>Kaar Inc.</p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiCalendar color='white' style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className='flex-[0.5]  text-sm p-1  text-white'>
                        <p>Release Date</p>
                       </div>
                       <div className='flex-[0.5]  text-xs p-1  text-white'>
                       <p>11/12/2022</p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiBookmark color='white' style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className='flex-[0.5]  text-sm p-1  text-white'>
                        <p>Category</p>
                       </div>
                       <div className='flex-[0.5]  text-xs p-1  text-white'>
                       <p>Data Science</p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiFileText color='white' style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className='flex-[0.5] text-sm p-1  text-white'>
                        <p>Additional Terms</p>
                       </div>
                       <div className='flex-[0.5] flex-col text-xs p-1 text-blue-300 space-y-2'>
                       <p>Kaar Privacy policy</p>
                       <p>Kaar licence terms</p>
                       <p>Kaar terms and condition</p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiCodesandbox color='white' style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className='flex-[0.5]  text-sm p-1  text-white'>
                        <p>Publisher Info</p>
                       </div>
                       <div className='flex-[0.5]  text-xs p-1  text-blue-300'>
                       <p>Contact Information</p>
                       </div>
                  </div>
                </div>

                </div>
           </div>




           <div className=' border-[1px] border-[#303030] bg-[#242a30dc] rounded-[10px]'>
           <div className='h-[50px] border-b-[1px] border-[#a6a5a586]'><p className='text-lg font-semibold text-white pl-6 pt-[12px]'>Description</p></div>
           <div className='p-6 text-white text-sm'>
           <p>
           Want a superweapon to ignite your customer’s interest in a product? It’s right under your nose: Take your product’s unique features and turn them into benefits.
What are features and benefits? Think about what gets you excited about your product that makes it different from your competitors’ products. 
<br/>
<br/>
It might be careful construction, ethically sourced materials, or all the bells and whistles you dreamed up over drinks one night. Those are features.
Now, think about what those things do for your customer. Does careful construction mean that your product is safe for children? Do ethically sourced materials make the buyer feel good about purchasing your product? Do those bells and whistles make everyone who sees your customer with your product weep with envy? Those are benefits.
In product descriptions, it’s easy to fall into the trap of only describing the features of your products. But when you just list the features, you’re not actually helping your buyer understand how your product will help them.
           </p>
           </div>
           </div>


        </div>  
    </div>
  )
}

export default ProductComp