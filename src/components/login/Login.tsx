// import { useEffect } from "react";
// import { useSignInMutation } from "../../redux/api/auth";
// import { signIn } from "../../redux/slice/auth";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../redux/store";
// import { User } from "../../types/auth";

// const Login = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [signInRequest, { data, isSuccess }] = useSignInMutation();
//   const user : User = {
//     email: "john@mail.com",
//     password: "changeme",
//   };
//   const handleSignIn = () => {
//     signInRequest(user);
//   };

//   useEffect(() => {
//     if(isSuccess && data?.accessToken){
//       dispatch(signIn({token: data.accessToken}))
//     }
//   }, [isSuccess, data?.accessToken])
//   return (
//     <div>
//       <button onClick={handleSignIn}>Click</button>
//     </div>
//   );
// };

// export default Login;



import { useEffect } from "react";
import { useSignInMutation } from "../../redux/api/auth";
import { signIn } from "../../redux/slice/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { User } from "../../types/auth";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [signInRequest, { data, isSuccess, isLoading }] = useSignInMutation();
  const user: User = {
    email: "john@mail.com",
    password: "changeme",
  };

  const handleSignIn = () => {
    signInRequest(user);
  };

  useEffect(() => {
    if (isSuccess && data?.accessToken) {
      dispatch(signIn({ token: data.accessToken }));
    }
  }, [isSuccess, data?.accessToken]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              onClick={handleSignIn}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isLoading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              } transition duration-150 ease-in-out`}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className={`h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150 ${
                    isLoading ? "animate-spin" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-500 font-medium transition duration-150 ease-in-out"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
