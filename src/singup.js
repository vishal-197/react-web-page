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
 
 


    
  };
   
  return (

    <section className="sing-from">

        <h1>Register Now</h1>

        <div className="sing-form">
    <form onSubmit={handleSubmit(onSubmit)}>

         <label htmlFor="firstName">first name</label>
         {errors.firstName && <p className="form-alert" role="alert">{errors.firstName?.message}</p>}
         <input placeholder="Enter your first name"  {...register("firstName", { required: "Enter your name required", maxLength: 20 })}  aria-invalid={errors.firstName ? "true" : "false"} />
         
         <label htmlFor="lastName">Last name  </label>
         {errors.lastName && <p className="form-alert" role="alert">{errors.lastName?.message}</p>}
         <input placeholder="Enter your last name" {...register("lastName", { required: "Enter your last Name  required", pattern: /^[A-Za-z]+$/i })}  aria-invalid={errors.lastName ? "true" : "false"} />
         
         <label htmlFor="mail">Emain </label>
         {errors.mail && <p className="form-alert" role="alert">{errors.mail?.message}</p>}
         <input placeholder="Enter your email"  {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} />

         <label htmlFor="userName">user name </label>
         {errors.userName && <p className="form-alert" role="alert">{errors.userName?.message}</p>}
         <input placeholder="Enter user name" autoComplete="firstName" {...register("userName", { required: "Enter your User Name  required", maxLength: 20 })}  aria-invalid={errors.userName ? "true" : "false"} />
         
         <label htmlFor="password">password  </label>
         {errors.password && <p className="form-alert" role="alert">{errors.password?.message}</p>}
         <input type="password" name="password"  autoComplete="current-password" placeholder="enter your password" {...register ("password", {required:"Enter your password"})} />

         <label>Age  </label>
         {errors.age && <p className="form-alert" role="alert">{errors.age?.message}</p>}
         <input placeholder="enter your age" type="number" {...register("age", {required:"Enter your age"}, { min: 18, max: 99 })} />
         <label> gender</label>
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