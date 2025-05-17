import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"


function Signup() {
  
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost ml-72">
                ✕
              </Link>
            <h3 className="font-bold text-lg px-1">Login</h3>

            <div className="mt-4 space-y-2">
              <span className="px-1">Name</span>
              <input
                type="Name"
                placeholder="Enter your Full Name"
                className=" w-80 flex flex-col px-2 outline-none border rounded-md"
                                {...register("name", { required: true })}

              />
               <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span className="px-1">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-80 flex flex-col px-2 outline-none border rounded-md"
                                {...register("email", { required: true })}

              />

              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span className="px-1">Password</span>
              <input
                type="text"
                placeholder="Enter your Password"
                className=" w-80 flex flex-col px-2 outline-none border rounded-md"
                                {...register("password", { required: true })}

              />

               <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 px-3 border rounded-md text-white hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Already have Account?{" "}
                <button className="text-pink-500 cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login/>
              </p>
            </div>
                        </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
