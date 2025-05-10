import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-violet-500 to-purple-500">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Your Name
            </label>

            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="John Doe"
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Your Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="you@example.com"
              />
            </div>
          </div>
          {/* Message */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Your Message
            </label>

            <div className="relative">
              <MessageSquare
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />

              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Send Message
          </button>
        </form>
        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          Or reach us at{" - "}
          <a
            href="mailto:likethisonly12@gmail.com"
            className="text-blue-600 hover:underline"
          >
            likethisonly12@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
