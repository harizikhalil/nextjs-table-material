import React,{useState} from 'react'
const listlevels=[{id:Math.random(),levelNme:"CEO",datalevels:[{id:Math.random(),name:"ceo1"},{id:Math.random(),name:"ceo2"},{id:Math.random(),name:"ceo3"}]},
{id:Math.random(),levelNme:"VP",datalevels:[{id:Math.random(),name:"vp1"},{id:Math.random(),name:"vp2"},{id:Math.random(),name:"vp3"}]},
{id:Math.random(),levelNme:"DR",datalevels:[{id:Math.random(),name:"dr1"},{id:Math.random(),name:"dr2"},{id:Math.random(),name:"dr3"}]}
];
const list = () => {
    const [listlevelsData,setlistlevelsData]=useState(listlevels)
    const [listDatalevels,setlistDatalevels]= useState([])
    const [count,setcount]=useState(1)
    const handlechange =(e)=>{
        console.log(e.target.value)
        if(count<listlevels.length){
            console.log(listlevelsData[count])
            setlistDatalevels([...listDatalevels,listlevelsData[count]])
            setcount(prevs=>prevs+1)
        }
    }
    const filterLevels=(idlevels)=>{
        const newArr= listDatalevels.filter((datlev)=>datlev.id!==idlevels)
        setlistDatalevels(newArr)
        if(listDatalevels.length===1){
            setcount(1)
        }
    }
    console.log("listDatalevels",listDatalevels)
  return (
    <div style={{width:"800px",margin:"30px auto"}}>
        <label  >{listlevelsData[0].levelNme}</label>

<select name="pets" id="pet-select" onChange={handlechange}>
    {listlevelsData[0].datalevels.map((level)=>{
        return <option value={level.name} key={level.id}>{level.name}</option>
    })}
    
</select>
        {
        listDatalevels.map((lev, i, arr) => {
            if (arr.length - 1 === i) {
                return <div>
                 <p onClick={()=>filterLevels(lev.id)}>x</p>
                <label  >{lev.levelNme}</label>
                <select name="pets" id="pet-select" onChange={handlechange}>
        {lev.datalevels.map((level)=>{
            return <option value={level.name} key={level.id}>{level.name}</option>
        })}
        
    </select>
                </div>
            } else {
                return <>
                <label  >{lev.levelNme}</label>
                <select name="pets" id="pet-select" onChange={handlechange}>
        {lev.datalevels.map((level)=>{
            return <option value={level.name} key={level.id}>{level.name}</option>
        })}
    </select>
                </>
            }
        })
        }
        </div>
  )
}

export default list