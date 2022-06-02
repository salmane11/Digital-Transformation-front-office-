import Link from 'next/link'
import React from 'react'
import Feed from '../components/Feed'

export default function register() {
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <section className="h-screen">
        <div className="h-full w-full  text-gray-800">
          <div className="g-6 -mt-24 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
            <div className="shrink-1 mb-12 hidden  grow-0 basis-auto md:mb-0  md:block md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full "
                alt="Sample image"
              />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
              <form>
                <h1 className="mt-20 mb-5 text-center  text-xl font-semibold">
                  Create Account
                </h1>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="email"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="align-center  justify-center  text-center ">
                  <button
                    type="button"
                    className="w-40 rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    {/* <Link href="/" title="login"> */}
                    Register
                    {/* </Link> */}
                  </button>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                    <p className="mx-4 mb-0 text-center font-semibold">
                      Already have account?
                    </p>
                  </div>
                </div>
              </form>
              <div className="align-center  justify-center  text-center ">
                <button
                  type="button"
                  className="inline-block w-32 rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  <Link href="/" title="login">
                    Login
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
