import { useField } from "formik";
import React, { Fragment } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { Transition } from "@headlessui/react";

export const Textfield = ({ label, hint, ...props }) => {
  const [field, meta] = useField(props as never);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 mb-2 relative rounded-md shadow-sm">
        <input
          {...field}
          {...props}
          className={classNames("w-full sm:text-sm rounded-md", {
            "focus:ring-indigo-500 focus:border-indigo-500 block border-gray-300":
              !meta.touched || !meta.error,
            "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 pr-10":
              meta.touched && meta.error,
          })}
        />
        <Transition
          show={meta.touched && !!meta.error}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        </Transition>
      </div>
      <Transition
        show={meta.touched && !!meta.error}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <p className="text-sm text-red-600" id="email-error">
          {meta.error}
        </p>
      </Transition>
    </div>
  );
};
