import React,{useState} from 'react'
const listlevels=[{id:Math.random(),levelNme:"CEO",datalevels:[{id:Math.random(),name:"ceo1"},{id:Math.random(),name:"ceo2"},{id:Math.random(),name:"ceo3"}]},
{id:Math.random(),levelNme:"VP",datalevels:[{id:Math.random(),name:"vp1"},{id:Math.random(),name:"vp2"},{id:Math.random(),name:"vp3"}]},
{id:Math.random(),levelNme:"DR",datalevels:[{id:Math.random(),name:"dr1"},{id:Math.random(),name:"dr2"},{id:Math.random(),name:"dr3"}]}
];
const list = () => {
    const [listlevelsData,setlistlevelsData]=useState(listlevels)
    const [listDatalevels,setlistDatalevels]= useState([listlevelsData[0]])
    const [level,setlevel]=useState("")
    const [count,setcount]=useState(1)
    const handlechange =(e)=>{
        console.log(e.target.value)
        const filt= listlevelsData.filter((el)=>el.datalevels)
        console.log("count",count)
        setlevel(e.target.value)
        if(count<listlevelsData.length && e.target.value!=="0"){
            console.log(listlevelsData[count])
            setlistDatalevels([...listDatalevels,listlevelsData[count]])
            setcount(prevs=>prevs+1)
            console.log(count)
        }
    }
    const filterLevels=(idlevels)=>{
        console.log("filter",level)
        const newArr= listDatalevels.filter((datlev)=>datlev.id!==idlevels)
        setlistDatalevels(newArr)
        if(listDatalevels.length===1){
            setcount(1)
            setlevel("0")
        }
    }
    console.log("listDatalevels",listDatalevels)
  return (
    <div style={{width:"800px",margin:"30px auto"}}>

        {
        listDatalevels.map((lev, i, arr) => {
            if (arr.length-1  === i) {
                
                console.log("length",arr.length)
                return <div>
                {arr.length===1 ?"" :<p onClick={()=>filterLevels(lev.id)}>x</p>}
                <label  >{lev.levelNme}</label>
                <select name="pets" id="pet-select" onChange={handlechange}>
                <option value="0">select option</option>
        {lev.datalevels.map((level)=>{
            return <option value={level.id} key={level.id}>{level.name}</option>
        })}
        
    </select>
                </div>
            } else {
                return <>
                <label  >{lev.levelNme}</label>
                <select name="pets" id="pet-select" onChange={handlechange}>

        {lev.datalevels.map((level)=>{
            return <option value={level.id} key={level.id}>{level.name}</option>
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