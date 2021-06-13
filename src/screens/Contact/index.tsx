import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { useState } from "react";
import "./Contact.module.css";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactInfo);
  };

  return (
    <div className="m-auto mb-10 w-full mw-1000 text-lg md:text-xl">
      <h1 className="text-center font-black text-2xl md:text-4xl">Contact Us</h1>
      <p>
        <DotsHorizontalIcon className="w-16 h-16 m-auto font-black text-gray-300" />
      </p>
      <form className="grid" onSubmit={(e) => handleSubmit(e)}>
        <label className="text-center mt-8 mb-3 font-thin">Your name</label>
        <input
          required
          name="name"
          className="focus:outline-none hover:bg-gray-200"
          type="text"
          onChange={(e) => handleInputOnChange(e)}
        />

        <label className="text-center mt-8 mb-3 font-thin">Your email address</label>
        <input
          required
          name="email"
          className="focus:outline-none hover:bg-gray-200"
          type="email"
          onChange={(e) => handleInputOnChange(e)}
        />

        <label className="text-center mt-8 mb-3 font-thin">Your message</label>
        <textarea
          required
          name="message"
          onChange={(e) => handleAreaOnChange(e)}
        />

        <button className="text-xl lg:text-2xl" type="submit">Send message</button>
      </form>
    </div>
  );
}

export { Contact };
