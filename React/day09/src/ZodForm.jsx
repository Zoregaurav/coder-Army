
//It is use for data validation:

import { useForm } from "react-hook-form";
import {email,z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


//sc hema Design:
const formSchema = z.object({
  name: z.string().min(3, "Minimum length should be 3").max(20, "Maximum length should be 20"),
  //Niche meine jo use kiya hein usme basically coerce ka ,matlab we converting string to number:
  age: z.coerce().number(10, "Minimum age should be 10").max(80, "Maximum age should be 80"),  
  password: z.string().min(5, "Minimum length should be 5").max(20, "Maximum length should be 20"),
  confirm:z.string(),
  email:z.email("Email is invalid")
}).refine((data=>data.password===data.confirm),{
    message:"password don't match",
    path:["confirm"],//path of error
}); //confirm password logic->logic to checking the password


//Zod-logic phase->connection:
function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  function submitForm(data) {
    console.log(data);
  }

  //React-hook: form creation phase
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input id="age" type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

     <div>
        <label htmlFor="Confirm password">Password:</label>
        <input id="fifth" type="password" {...register("confirm")} />
        {errors.confirm && <p>{errors.confirm.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="fourth" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>


      <button type="submit">Submit</button>
    </form>
  );
}

export default ZodForm;
