"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/solid";

function NavBar() {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-800 rounded mb-6">
      <div class="w-full flex items-center justify-between px-20 p-4 gap-20">
        <div class="flex md:order-2 relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="w-full h-14 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        <Menu as="div" className="flex items-center md:order-2">
          <div>
            <Menu.Button className="flex text-lg bg-gray-700 rounded-full p-2 justify-center items-center border-2 border-gray-600 hover:border-white  text-gray-400 hover:text-white">
              <UserIcon className="h-10 w-10 rounded-full" />
            </Menu.Button>
          </div>
          <Transition
            as={"div"}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div class="px-4 py-3">
                      <span class="block text-sm text-gray-900 dark:text-white">
                        Bonnie Green
                      </span>
                      <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                        name@flowbite.com
                      </span>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
                          : "dark:text-gray-200"
                      } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
                          : "dark:text-gray-200"
                      } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                    >
                      Duplicate
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
                          : "dark:text-gray-200"
                      } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                    >
                      Archive
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
                          : "dark:text-gray-200"
                      } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                    >
                      Move
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white"
                          : "dark:text-gray-200"
                      } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}

export default NavBar;
