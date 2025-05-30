import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_irg47v4",
        "template_hlos548",
        {
          from_name: form.name,
          to_name: "Bill",
          from_email: form.email,
          to_email: "billsusanto01@gmail.com",
          message: form.message,
        },
        "lQgRj9ZyE7KvismHf"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-visible">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.85] p-8 rounded-2xl holographic-card relative mx-2 my-4 w-full max-w-4xl"
        style={{ overflow: "visible" }}
      >
        <div className="card-inner">
          <h3 className="text-white font-bold md:text-[40px] sm:text-[30px] xs:text-30px] text-[30px] text-shadow-sm">
            Recruit Me!
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="py-4 px-6 placeholder:text-gray-500 rounded-lg outlined-none border-none font-medium bg-white/20 backdrop-blur-sm text-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="py-4 px-6 placeholder:text-gray-500 rounded-lg outlined-none border-none font-medium bg-white/20 backdrop-blur-sm text-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="py-4 px-6 placeholder:text-gray-500 rounded-lg outlined-none border-none font-medium bg-white/20 backdrop-blur-sm text-white"
              />
            </label>

            <button type="submit" className="holographic-button w-fit">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div className="card-light-effect"></div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
