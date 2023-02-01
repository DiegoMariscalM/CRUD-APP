import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FormUsers from "./assets/components/FormUsers";
import UserCard from "./assets/components/UserCard";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState();
  const [userUpdate, setUserUpdate] = useState();
  const [isShowForm, setIsShowForm] = useState(true);

  // Funcion q nos trae todos los usuarios
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`;
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const handleClickNewUSer = () => {
    handleChangeModal()
    setUserUpdate()
  }

  //  Funcion q crea un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`;
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        handleChangeModal();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        setUserUpdate();
        handleChangeModal();
      })
      .catch((err) => console.log(err));
  };

  const handleChangeModal = () => {
    setIsShowForm(!isShowForm);
  };

  // Se obtienen todos los usuarios cuando carga la app
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div className="header-conatiner">
        <h1 className="header-container__title">C R U D</h1>
        <button onClick={handleClickNewUSer} className="header__btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Create new User{" "}
          <i className="header__plus bx bx-message-square-add"></i>
        </button>
      </div>
      <FormUsers
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        isShowForm={isShowForm}
        handleChangeModal={handleChangeModal}
      />
      <div className="user-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            handleChangeModal={handleChangeModal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
