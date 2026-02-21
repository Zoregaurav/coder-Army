import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }

  console.log("render");

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label htmlFor="first">Name:</label>
        <input
          id="first"
          {...register("name", { required: "Name can't be empty" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>


      <div>
        <label htmlFor="second">Age:</label>
        <input
          id="second"
          {...register("age", { required: "Age is required" })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>


      <div>
        <label htmlFor="third">Password:</label>
        <input
          id="third"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
