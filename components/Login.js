import Link from 'next/link'
import React from 'react'
import Feed from './Feed'

export default function Login() {
  return (
    <div className="w-5/6 ">
      <section className="h-screen ">
        <div className="h-full w-full text-gray-800">
          <div className="g-6 -mt-24 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
            <div className="mb-12  w-full md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
              <form className="w-full rounded-md  border-2 border-solid bg-slate-50 p-4">
                <h1 className="mb-5 text-center text-3xl font-semibold">
                  Authentification
                </h1>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>
                <div className="align-center  justify-center  text-center ">
                  <button
                    type="button"
                    className="rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    <Link href="/feed" title="login">
                      Login
                    </Link>
                  </button>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                    <p className="mx-4 mb-0 text-center font-semibold">Or</p>
                  </div>
                </div>{' '}
                <div className="align-center  justify-center  text-center ">
                  <button
                    type="button"
                    className="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
