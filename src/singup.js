import { useForm } from "react-hook-form";
import './login.css'

export default function App() {
  const { register,  formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    localStorage.setItem(data.email, JSON.stringify({
      email: data.mail,
      password: data.password
    }))

    console.log(JSON.parse(localStorage.getItem(data.email)));
 
 
    //  const userdetails = {
  //   userName: data.mail,
  //   password: data.password
    // }
    // localStorage.setItem ("userName", data.mail);
    // localStorage.setItem ("password", data.password);

    // const userdetails = {
    //   userName: data.mail,
    //   password: data.password
    // };

    
  };
   
  return (

    <section className="sing-from">

        <h1>Register Now</h1>

        <div className="sing-form">
    <form onSubmit={handleSubmit(onSubmit)}>

         <lable for="firstName">first name</lable>
         {errors.firstName && <p className="form-alert" role="alert">{errors.firstName?.message}</p>}
         <input placeholder="Enter your first name" {...register("firstName", { required: "Enter your name required", maxLength: 20 })}  aria-invalid={errors.firstName ? "true" : "false"} />
         
         <lable for="lastName">Last name  </lable>
         {errors.lastName && <p className="form-alert" role="alert">{errors.lastName?.message}</p>}
         <input placeholder="Enter your last name" {...register("lastName", { required: "Enter your last Name  required", pattern: /^[A-Za-z]+$/i })}  aria-invalid={errors.lastName ? "true" : "false"} />
         
         <lable for="mail">Emain </lable>
         {errors.mail && <p className="form-alert" role="alert">{errors.mail?.message}</p>}
         <input placeholder="Enter your email"  {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} />

         <lable for="userName">user name </lable>
         {errors.userName && <p className="form-alert" role="alert">{errors.userName?.message}</p>}
         <input placeholder="Enter user name" {...register("userName", { required: "Enter your User Name  required", maxLength: 20 })}  aria-invalid={errors.userName ? "true" : "false"} />
         
         <lable for="password">password  </lable>
         {errors.password && <p className="form-alert" role="alert">{errors.password?.message}</p>}
         <input type="password"  placeholder="enter your password" {...register ("password", {required:"Enter your password"})} />

         <lable>Age  </lable>
         {errors.age && <p className="form-alert" role="alert">{errors.age?.message}</p>}
         <input placeholder="enter your age" type="number" {...register("age", {required:"Enter your age"}, { min: 18, max: 99 })} />
         <lable> gender</lable>
      <select {...register("gender")}>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
      <button type="submit"> Submit</button>
    </form>
    </div>
    </section>
  );
}