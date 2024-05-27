import { Component } from "react";
import { getUsers, deleteUser } from "../Api/Users";
import { Link } from "react-router-dom";
class UsersPage extends Component {
  state = {
    users: [],
    tablepadding: "10px",
  };
  componentDidMount = () => {
    // console.log(this)
    getUsers()
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch(() => {
        alert("حدث خطأ غير معروف"); //example there is no internet
      });
  };
  DeletUser = (ind, id) => {
    // from server
    deleteUser(id)
      .then(() => {
        // from state
        let userr = this.state.users;
        userr.splice(ind, 1);
        this.setState({
          users: userr,
        });
      })
      .catch(() => {
        alert("حدث خطأ غير معروف"); //example there is no internet
      });
  };
  render() {
    return (
      <div>
        <h2>Users</h2>
        <table border=".5px">
          <thead>
            <tr>
              <td>Name</td>
              <td>More</td>
              <td>Edit</td>

              <td>Delet</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((ele, ind) => (
              <tr key={ind}>
                <td style={{ padding: `${this.state.tablepadding}` }}>
                  {ele.name}
                </td>
                <td
                  style={{
                    padding: `${this.state.tablepadding}`,
                    textAlign: "center",
                  }}
                >
                  <Link to={"/user/" + ele.id}>View</Link>
                </td>
                <td
                  style={{
                    padding: `${this.state.tablepadding}`,
                    textAlign: "center",
                  }}
                >
                  <Link to={"/user/edit/" + ele.id}>edit</Link>
                </td>
                <td style={{ padding: `${this.state.tablepadding}` }}>
                  <button onClick={() => this.DeletUser(ind, ele.id)}>
                    Delet
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UsersPage;
