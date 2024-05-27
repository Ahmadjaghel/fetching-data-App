import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUser, UpdateUser } from "../Api/Users";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const [user, setuser] = useState({});
  const [button, setbutton] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(params.id).then((response) => {
      setuser(response.data);
    });
  }, []);
  function Updateuser(values) {
    console.log(values);
    const id = user.id;
    UpdateUser(id, values).then(() => {
      alert(`Successfully`);
      navigate("/users"); //redirct to the father page
    });
    setuser({ name: values.name, email: values.email });
  }
  return (
    <div>
      <h2>User {user.id} </h2>
      <div>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <button
          onClick={() => {
            setbutton(!button);
          }}
        >
          Edit
        </button>
        {button ? (
          <div>
            <Formik
              enableReinitialize={true}
              initialValues={{ name: user.name, email: user.email }}
              onSubmit={(e) => Updateuser(e)}
            >
              {
                // this.form
                <Form>
                  name: <Field name="name" />
                  <br />
                  Email: <Field name="email" />
                  <br />
                  <button type="submit">submit</button>
                </Form>
              }
            </Formik>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default UserPage;
