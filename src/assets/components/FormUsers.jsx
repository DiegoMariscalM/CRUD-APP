import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

const validationEMail ={
  required: "Email is required",
  minLength : {
    message: "Email is too Short",
    value: 3
  },
  maxLength :{
    message: "Email is too Long",
    value: 50
  },
}

const FormUsers = ({
  createUser,
  userUpdate,
  updateUser,
  isShowForm,
  handleChangeModal,
}) => {
  const { handleSubmit, register, reset, formState: {errors} } = useForm();

  const submitForm = (data) => {
    if (userUpdate) {
      updateUser(userUpdate.id, data);
    } else {
      createUser(data);
    }
    reset(defaultValues);
  };

  useEffect(() => {
    if (userUpdate) {
      reset(userUpdate);
    }
  }, [userUpdate]);

  return (
    <div className={`container-form ${isShowForm && "disable-form"}`}>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <i onClick={handleChangeModal} class="form__X bx bx-x"></i>
        <h2 className="form__title">{userUpdate ? "Edit User" : "New User"}</h2>

        <div className="form__div">
          <label className="form__label" htmlFor="">
            Email
          </label>
          <input
            placeholder="Enter Youre Name"
            className="form__inpt"
            type="email"
            {...register("email", validationEMail)}
          />
          {
            errors.email && <p>{errors.email.message}</p>
          }
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="">
            Password
          </label>
          <input
            placeholder="Enter Youre Password"
            className="form__inpt"
            type="password"
            {...register("password")}
          />
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="">
            First Name
          </label>
          <input
            placeholder="Enter Youre First Name"
            className="form__inpt"
            type="text"
            {...register("first_name")}
          />
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="">
            Last Name
          </label>
          <input
            placeholder="Enter Youre Last Name"
            className="form__inpt"
            type="text"
            {...register("last_name")}
          />
        </div>

        <div className="form__div">
          <label className="form__label" htmlFor="">
            Birthday
          </label>
          <input className="form__inpt" type="date" {...register("birthday")} />
        </div>
        <button className="form__btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {userUpdate ? "Edit User" : "New User"}
        </button>
      </form>
    </div>
  );
};

export default FormUsers;
