
import React, { useState } from 'react'
import 'milligram/dist/milligram.min.css';
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";



const App = () => {
  const [listDescri,setListDescri] =useState([])
  const [listItem,setItem] =useState([])
  const [descriptionData,setDiscriptionData] =useState('')
  const [inputItem,setItems] =useState('')
  const [isvisiable,setVisiable] =useState(false)
  const [edititem,setEditItem] =useState(null)
 
  
 

  const inputDescription =(()=>{

    if( !isNaN(descriptionData) || descriptionData.trim() ===""){
      alert("Please Enter Valid Description")
      return
    }else if(isNaN(inputItem) || inputItem.trim() ===""){
      alert("Enter Number Input")
    }else{
     

    if(edititem !==null){
      let updateDescription =[...listDescri];
      updateDescription[edititem] =descriptionData;
      let updateItem =[...listItem];
      updateItem[edititem] =inputItem;
      setListDescri(updateDescription)
      setItem(updateItem)
      setEditItem(null)
    }else{
      setListDescri([...listDescri,descriptionData])
      setItem([...listItem,inputItem])
     

      
    }
      
    setItems("")
    setDiscriptionData("")
    setVisiable(!false)
  
    }

    })

   const DeleteItem =((index)=>{
 const itemIndex= listDescri.filter((_,i)=> i !==index);
 setListDescri(itemIndex)

 const updatedIndex =listItem.filter((_,i)=> i !==index)
 setItem(updatedIndex)
 if(itemIndex.length ===0){
  setVisiable(false)
 }


   })


   const EditItem =((index)=>{
    setDiscriptionData(listDescri[index])
    setItems(listItem[index])
    setEditItem(index)
   })

   const totalAmount =listItem.reduce((acculamater,value)=>acculamater +Number(value),0);


  return (
    <div>

      <div className='bg-[#afc1f7] w-[50%] p-5 mx-auto mt-[40px] rounded-2xl '>
        <div className='bg-[#f7d3df] p-4 rounded-tl-2xl rounded-tr-2xl'>
        <h2 className='text-center mt-5 text-[#1e4977] text-[40px] font-[600] font-["Bungee"]'>Expense Tracker</h2>
        <p className='text-center text-[#513d3d]'>MOHAMMAD RAMJAN MIA</p>
        </div>

        <div className='bg-[#314862] p-20'>
      
          <p className='bg-[#476c82] text-white p-5 rounded-[16px] text-[26px] font-[500] text-center font-["Tint"]'>
            {

         


              listItem !=="0" ?`Total Cost:৳ ${totalAmount.toFixed(2)}`:"Total Cost:$0.00"
            }
            </p>
         

         <div className='bg-white p-20 rounded-br-[30px] rounded-tl-[6px] rounded-tr-[6px] rounded-bl-[30px] mb-[20px]'>
         <input  value={descriptionData} onChange={(e)=>setDiscriptionData(e.target.value)}  type="text" placeholder='Enter Description'  />
         <input value={inputItem} onChange={(e)=>setItems(e.target.value)}  type="text" placeholder='Enter Amount'  />
         </div>
          <div className='w-[100%] my-10'>
          <button className='w-full p-[25px] leading-[6px] text-[16px] rounded-[10px] font-["Poppins"]' onClick={()=>inputDescription()} >{edititem !==null ? "Update Transaction" :"Add Transaction "}</button>
          </div>


          {
            isvisiable &&

            <div className='bg-slate-300 p-10 text-orange-700 text-[18px] mt-5'>
     
         <div className='overflow-y-auto  max-h-[300px] '>
         <table>
            {
             listDescri.map((item,index)=>(
              <tr key={index} className='bg-[#f3f7f9] p-[10px] rounded-[16px] overflow-auto'>
                <td className='bg-[#4e5e60] text-[16px] text-white font-[700] p-[10px] text-center capitalize font-["Bungee"]'>{item}</td>
                <td className='text-blue-700 bg-[#95d9bf] text-[20px] p-[10px] font-[700] text-center font-["Bungee"]'>{listItem[index]}</td>
                <td className='flex items-center justify-center gap-x-4 mt-5'>
                  <button className='bg-red-600 w-[30%] text-center border-none font-["Bungee"] ' onClick={()=>DeleteItem(index)}><span className='flex items-center justify-center gap-x-4'><MdDeleteForever className='text-[18px] font-[700]' /> Delete</span></button>
                  <button className=' w-[30%] font-["Bungee"]' onClick={()=>EditItem(index)}><span className='flex items-center justify-center gap-x-4'><CiEdit className='text-[18px] font-[700]' />Edit</span></button>
                </td>
              </tr>
             ))
            }
          </table>
         </div>
        </div>
          }

          
        </div>
       
      </div>
    </div>
  )
}

export default App