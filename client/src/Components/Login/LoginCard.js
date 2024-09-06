import { Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";
import admin from "../../assets/admin.png";
import Hospital from "../../assets/doctor_new.png";
import Patient from "../../assets/patient.jpg";
export default function LoginCard({ role }) {
  let contain= null;
  if(role==="admin"){
    contain= <CardImg top width="10%" src={admin} alt="Card image cap" />
  }
  else if(role==="hospital"){
    contain= <CardImg top width="10%" src={Hospital} alt="Card image cap" />
  }
   else {
contain=<CardImg top width="10%" src={Patient} alt="Card image cap" />
   }
  return (
    <Col sm="12" md="4">
      <Card style={{ "box-shadow": "4px 4px 4px 4px #CCCCCC" }}>
        {contain}
        {/* <CardImg top width="10%" src={Hospital} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle tag="h1">Hello!! {role.toUpperCase()}</CardTitle>
        </CardBody>
      </Card> 
    </Col>
  );
}
