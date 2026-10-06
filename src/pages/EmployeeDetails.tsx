import {useParams} from "react-router-dom"

const EmployeeDetails = () => {
    const {id} = useParams();
    console.log(id);
  return (
    <div>
      
    </div>
  )
}

export default EmployeeDetails
