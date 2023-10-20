import React, {  useState,useEffect  } from "react";

const Page1 = () =>{

  const [companyData,setCompanyData] = useState([]);
  const [currentCompanyData,setCurrentCompanyData] =   useState({cmpName:"",cmpMail:"",cmpemps:"",cmpDesc:"",errors:true,dataSet:[]});

  const handleCompanyName = (event) =>{ setCurrentCompanyData({...currentCompanyData,cmpName:event.target.value}) }
  const handleCompanyMail = (event) =>{ setCurrentCompanyData({...currentCompanyData,cmpMail:event.target.value}) }
  const handleCompanyEmps = (event) =>{ setCurrentCompanyData({...currentCompanyData,cmpemps:event.target.value}) }
  const handleCompanyDesc = (event) =>{ setCurrentCompanyData({...currentCompanyData,cmpDesc:event.target.value}) }

  const formValidator = () =>{
      setCurrentCompanyData({...currentCompanyData,errors:
        (
          currentCompanyData.cmpName.length === 0 
          || currentCompanyData.cmpMail.length === 0
          || currentCompanyData.cmpemps.length === 0
          || currentCompanyData.cmpDesc.length === 0
        )
      })
  }

 
  const handleSubmit = (event) =>{ 
    event.preventDefault();

    let companyClone = currentCompanyData.dataSet;

 
    for(var i=0;i<currentCompanyData.cmpemps; i++){

        let empData = {
        cmpName:currentCompanyData.cmpName,
        cmpMail:currentCompanyData.cmpMail,
        cmpDesc:currentCompanyData.cmpDesc,
        username:"",email:"",age:"",jobCode:"",file:""}

        companyClone.push(empData);

    }

     setCurrentCompanyData({...currentCompanyData,dataSet:companyClone})
  }





  return (
    <div>
      {/* Company form*/ }
      <form style={{border:"1px solid black",padding:20, borderRadius:10 }}>
        <div>
          <input placeholder="Company name" onChange={handleCompanyName} onKeyUp={formValidator}/>
        </div>
        <div>
          <input placeholder="Company Email Address" onChange={handleCompanyMail} onKeyUp={formValidator}/>
        </div>
        <div>
          <input placeholder="Number of employees" type="number" onChange={handleCompanyEmps} onKeyUp={formValidator}/>
        </div>
        <div>
          <textarea placeholder="Description" onChange={handleCompanyDesc} onKeyUp={formValidator}/>
        </div>
        <button onClick={handleSubmit} disabled={currentCompanyData.errors}>Upload</button>
      </form>

<div>
    {JSON.stringify(currentCompanyData) }

</div>

   
  <table>
    <thead>
      <tr>
        <th>Employee name</th>
        <th>Employee Email Address</th>
        <th>Employee age</th>
        <th>Job description</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
{
currentCompanyData.dataSet.map((item,index)=>{
return(
<tr key={index}>
  <td><input defaultValue={item.userName}/></td>
  <td><input defaultValue={item.email}/></td>
  <td><input defaultValue={item.age}/></td>
  <td><input defaultValue={item.jobCode}/></td>
  <td><input defaultValue={item.cmpName}/></td>

</tr>
)

})

}  

      </tbody>
  </table>

    </div>
  );
}

export default Page1;