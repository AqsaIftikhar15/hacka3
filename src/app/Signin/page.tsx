import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-6">
          <img
            src="/logo2.png" 
            alt="Nike Logo"
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">YOUR ACCOUNT</h1>
          <p className="text-2xl font-bold">FOR EVERYTHING NIKE</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-500">
              Keep me signed in
            </label>
          </div>

          <div className="mb-4 text-right">
            <a href="#" className="text-gray-500 hover:underline" aria-label="Forgotten your password?">
              Forgotten your password?
            </a>
          </div>

          <div className="text-center">
            <button className="bg-black text-white py-2 px-24 rounded w-full">
              SIGN IN
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            By logging in, you agree to Nike's{' '}
            <a href="#" className="text-blue-500 hover:underline" aria-label="Nike Privacy Policy">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:underline" aria-label="Nike Terms of Use">
              Terms of Use
            </a>.
          </p>
          <p className="text-gray-600">
            Not a Member?{' '}
            <Link href="../member" className="text-blue-500 hover:underline">
              Join Us.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
