import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center">
        
      <div class="flex justify-end">
        <div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div>
            <div>
                    <form>
                        <div>
                            <span className="text-sm text-gray-900">Welcome back</span>
                            <h1 class="text-2xl font-bold">Login to your account</h1>
                        </div>
                        <div className="mt-5">
                            <label className="block text-md mb-2" for="password">Password</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password"/>
                        </div>
                        <div className="my-3">
                            <label className="block text-md mb-2" for="email">Email</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email"/>
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <input class="cursor-pointer"  type="radio" name="rememberme"/>
                                <span class="text-sm">Remember Me</span>
                            </div>
							<span class="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
						</div>
                        <div>
                            <button class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
                        </div>
                        
                    </form>
                    <p class="mt-8"> Dont have an account? <span class="cursor-pointer text-sm text-blue-600"> Register</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

};

export default Login;


