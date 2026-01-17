import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
// Remove EmailJS import, add Firebase imports
import { addDoc, collection, db, serverTimestamp } from "../firebase";

// 1. IMPORT ICONS HERE
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        message: form.message,
        timestamp: serverTimestamp(), // Server-side timestamp
        createdAt: new Date().toISOString(), // Client-side timestamp
        status: "new" // To track message status
      });

      setLoading(false);
      alert("Thank you! Your message has been saved. I will get back to you soon.");

      // Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error("Error saving message to Firebase: ", error);
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  // Social Media Links Configuration
  const socialLinks = [
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ezz-aldeen-alshalfi-905538256/", // REPLACE WITH YOUR URL
    },
    {
      id: "twitter",
      icon: <FaXTwitter />, // Note: Using standard FA icon. Update import to FaXTwitter from 'react-icons/fa6' if you have the latest version
      url: "https://x.com/y_on_2", // REPLACE WITH YOUR URL
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/y_on.2", // REPLACE WITH YOUR URL
    },
  ];

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Keep</p>
        <h3 className={styles.sectionHeadText}>In Touch.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='An honor to write your message.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          {/* WRAPPER FOR BUTTON AND SOCIAL ICONS */}
          <div className="flex flex-row items-center justify-between">
            
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              disabled={loading}
            >
              {loading ? "Saving..." : "Send"}
            </button>

            {/* SOCIAL MEDIA ICONS CONTAINER */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[24px]"
                  whileHover={{ scale: 1.2, color: "#915eff" }} // Scale up and change color on hover
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");