import React from "react";
import { useForm } from "react-hook-form";
function Contact() {
  const { register } = useForm();

  return (
    <div className="">
      <h2 style={{ color: "#08fdd8" }} className="text-4xl font-semibold">
        Contact
      </h2>
      <p>
        Im interested in freelance opportunities - especially ambitious ones.
        However, if you have any other request or question, dont hesitate to use
        the form.
      </p>
      <form>
        <div className="flex flex-col px-2">
          <input
            type="text"
            id="name"
            className="w-full p-2 bg-gray-700 mb-2"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-gray-700 mb-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            id="subject"
            className="w-full p-2 bg-gray-700 mb-2"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
          <textarea
            id="message"
            className="w-full p-2 bg-gray-700 mb-2 "
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className="w-full p-2 bg-gray-900 text-white rounded-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
