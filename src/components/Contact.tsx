import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

interface SectionProps {
  id: string;
}

const Contact = ({id}: SectionProps) => {
  const [state, handleSubmit] = useForm("xqaqvgpp");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id={id} className="pb-32 pt-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="t mb-12">
          <h2 className="text-3xl font-bold text-gray-800  mb-4 relative pb-4">
            Contact
            <span className="absolute bottom-0 left-1 transform -translate-x-1 w-12 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-600 ">
            Feel free to reach out to me for any collaboration, project
            inquiries, or questions. I'm always open to discussing new
            opportunities and ideas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
                  <FiMapPin className="text-xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    Location:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Area 36, Lilongwe, Malawi
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
                  <FiMail className="text-xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    Email:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    kondwanipadyera@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
                  <FiPhone className="text-xl" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    Phone:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +265 887 107 311
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12 mt-8 lg:mt-0">
            {showSuccess ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-md text-center font-semibold">
                Your message has been sent successfully!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
