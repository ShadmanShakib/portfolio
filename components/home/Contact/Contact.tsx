import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Heading } from "components/ui";
function Contact() {
  const { register } = useForm();

  return (
    <div className="py-10">
      <div className=" ">
        <Heading>Get in Touch</Heading>
        <p className="text-center text-white">
          Im interested in freelance opportunities - especially ambitious ones.
          However, if you have any other request or question, dont hesitate to
          use the form.
        </p>
        <div className="grid py-6 xl:grid-cols-2">
          <Image
            layout="responsive"
            src="/images/mailbox.svg"
            alt="contact"
            width={100}
            height={50}
          />
          <form className=" bg-gray-500 px-20 py-6">
            <div>
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
            </div>
            <textarea
              id="message"
              className="mb-2 w-full bg-gray-700 p-2 "
              placeholder="Message"
              {...register("message", { required: true })}
            />

            <button
              type="submit"
              className="rounded-sm bg-gray-900 p-2 text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
