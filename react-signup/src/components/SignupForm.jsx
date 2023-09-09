import { useForm } from "react-hook-form"
import axios from "axios";


export default function SignupForm(){
  const {register, handleSubmit } = useForm();

  function submitData(data) {
    // console.log(data)
    axios.post('/api/signup', {
     ...data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
    return (
      <div>
        <section className='flex justify-center w-full'>
          <form 
          onSubmit={handleSubmit(submitData)}
          className='m-5 w-full'>
            <section className="grid grid-cols-1 gap-3 max-w-[360px]">
              <input
              {...register("name")}
              className='p-3 w-full border-white rounded-md'
              type="text" placeholder='Name' />
              <input
              {...register("age", {valueAsNumber: true})}
              className='p-3 w-full border-white rounded-md'
              type="number" placeholder='Age' />
              <input
              {...register("email")}
              className='p-3 w-full border-white rounded-md'
              type="email" placeholder='Email' />
              <input
              {...register("password")}
              className='p-3 w-full border-white rounded-md'
              type="password" placeholder='Password' />
              <section>
              <button
              className='p-3 w-full border-white rounded-md bg-green-700 text-white'>
                Sign Up
              </button>
              </section>
            </section>
          </form>
         </section>
      </div>
    )
  }