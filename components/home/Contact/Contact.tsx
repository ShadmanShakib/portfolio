import React from "react";
import { useForm } from "react-hook-form";
function Contact() {
  const { register } = useForm();

  return (
    <div className="flex py-10">
      <div className=" xl:w-1/2">
        <h2 style={{ color: "#08fdd8" }} className="text-4xl font-semibold">
          I would love hear form you
        </h2>
        <p className="text-white">
          Im interested in freelance opportunities - especially ambitious ones.
          However, if you have any other request or question, dont hesitate to
          use the form.
        </p>
      </div>
      <form className="w-1/2 bg-white">
        <div className="flex flex-col px-2">
          <input
            type="text"
            id="name"
            className="mb-2 w-full  p-2"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            id="email"
            className="mb-2 w-full bg-gray-700 p-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            id="subject"
            className="mb-2 w-full bg-gray-700 p-2"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
          <textarea
            id="message"
            className="mb-2 w-full bg-gray-700 p-2 "
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className="w-full rounded-sm bg-gray-900 p-2 text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
