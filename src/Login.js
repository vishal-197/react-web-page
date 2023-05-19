import React from 'react'

function Login() {
  const { register,  formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    localStorage.setItem ("userName", data.mail);
    localStorage.setItem ("password", data.password);
  };
  return (
    <section className='login-page'>
<div className='login-page-form'>
<form onSubmit={handleSubmit(onSubmit)}>

<lable for="mail">Emain </lable>
{errors.mail && <p className="form-alert" role="alert">{errors.mail?.message}</p>}
<input placeholder="Enter your email"  {...register("mail", { required: "Email Address is required" })} 
aria-invalid={errors.mail ? "true" : "false"} />


<lable for="password">password  </lable>
{errors.password && <p className="form-alert" role="alert">{errors.password?.message}</p>}
<input type="password"  placeholder="enter your password" {...register ("password", {required:"Enter your password"})} />

<button type="submit"> Submit</button>
</form>
</div>
</section>

  
  )
}

export default Login