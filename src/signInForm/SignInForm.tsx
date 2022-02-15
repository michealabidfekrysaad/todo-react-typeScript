import React from "react";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields, isDirty },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data: object) => {
    console.log(data);
    // saved= data to local Storage
  };

  return (
    <div className="row mt-5">
      <div className="col-6 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-2 box-input">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`normal-input ${errors?.email && "errors-input"}`}
              id="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors?.email && errors?.email?.type === "required" && (
              <div className="text-danger">Email is required</div>
            )}
            {errors?.email && errors?.email?.type === "pattern" && (
              <div className="text-danger">
                Entered value does not match email format
              </div>
            )}
          </div>
          <div className="mb-2 box-input">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`normal-input ${errors?.password && "errors-input"}`}
              id="password"
              {...register("password", {
                required: true,
                min: 10,
              })}
            />
            {errors?.password && errors?.password?.type === "required" && (
              <span className="text-danger">Password is required</span>
            )}
            {errors?.password && errors?.password?.type === "minLength" && (
              <span className="text-danger">
                Password is minimum 10 charachters
              </span>
            )}
          </div>
          <div className="mb-2 text-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
