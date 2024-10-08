import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { Table } from "reactstrap";
import moment from "moment";

const PreviousPatients = () => {
  const [patients, setPatients] = useState(null);
  useEffect(() => {
    // const getData = async () => {
    //   const { _id } = jwtDecode(localStorage.getItem("token"));
    //   const {
    //     data: { patients },
    //   } = await axiosInstance.get(`/doctor/previousPatients/${_id}`);
    //   setPatients(patients);
    // };
    // getData();
  }, []);
  if (!patients) {
    return <div></div>;
  }
  return (
    <div>
      <Table striped>
        <thead>
          <td>User_id</td>
          <td>User Name</td>
          <td>Age</td>
         <td>Gender</td>
         <td>Mobile No</td>
         <td>E-mail</td>


        </thead>
        {patients.map((patient, index) => (
          <tr>
            <td>{index + 1}</td>

            <td>{patient.patient_id.name}</td>
            <td>{moment(patient.admit_date).format("MM-DD-YYYY")}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};
export default PreviousPatients;
