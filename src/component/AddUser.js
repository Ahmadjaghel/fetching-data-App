// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { AddUser } from "../Api/Users";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatUser() {
  const [user, setuser] = useState({ name: "", email: "", id: "" });
  //   const params = useParams();
  const navigate = useNavigate();
  function Adduser(values) {
    AddUser(values)
      .then(() => {
        navigate("/users"); //redirct to the father page
        alert(`Successfully add`);
      })
      .catch(() => {
        alert("حدث خطأ غير معروف"); //example there is no internet
      });
  }
  // unstable_usePrompt({
  //   message: "Are you sure?",
  //   when: ({ currentlocation, nextlocation }) =>
  //     (user.name !== "" || user.email !== "" || user.id !== "") &&
  //     currentlocation.pathname !== nextlocation.pathname,
  // });
  return (
    <div>
      <h3>Add User</h3>
      <div>
        <Formik
          enableReinitialize={true}
          initialValues={{ name: user.name, email: user.email, id: user.id }}
          onSubmit={(e) => Adduser(e)}
        >
          {
            // this.form
            <Form>
              name: <Field name="name" />
              <br />
              Email: <Field name="email" />
              <br />
              ID: <Field name="id" />
              <br />
              <button type="submit">submit</button>
            </Form>
          }
        </Formik>
      </div>
    </div>
  );
}
export default CreatUser;
