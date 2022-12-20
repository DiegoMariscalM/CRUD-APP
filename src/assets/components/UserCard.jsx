import React from "react";

const UserCard = ({ user, deleteUser, setUserUpdate, handleChangeModal }) => {
  const handleChangeModalUpdate = () => {
    setUserUpdate(user);
    handleChangeModal();
  };

  return (
    <article className="user">
      <h2 className="user_title">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="user_list">
        <li className="user_item">
          <span>E-mail: </span>
          {user.email}
        </li>
        <li className="user_item">
          <span>
            {" "}
            <i className="bx bx-gift"></i>
            Birthday:{" "}
          </span>
          <div className="user__bth">{user.birthday}</div>
        </li>
      </ul>
      <div className="user_container-btn">
        <button className="user_button" onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="user_button" onClick={handleChangeModalUpdate}>
          <i className="bx bx-pencil"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
