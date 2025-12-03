import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="my-container py-32">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary">Contact Us</h1>
        <p className="mt-4 text-neutral max-w-2xl mx-auto">
          We’re here to help! Have questions, suggestions, or need support?
          Reach out to us anytime — our team will respond as quickly as
          possible.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* contact info */}
        <section className="space-y-16">
          {/* email */}
          <div className="bg-base-100 p-8 shadow rounded-xl hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary/90 text-3xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-neutral">Email Us</h2>
                <p className="text-accent mt-1">support@warmpaws.com</p>
              </div>
            </div>
          </div>

          {/* phone */}
          <div className="bg-base-100 p-8 shadow rounded-xl hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary/90 text-3xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-neutral">Call Us</h2>
                <p className="text-accent mt-1">+880 1234 567890</p>
              </div>
            </div>
          </div>

          {/* location */}
          <div className="bg-base-100 p-8 shadow rounded-xl hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary/90 text-3xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-neutral">Visit Us</h2>
                <p className="text-accent mt-1">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </section>

        {/* contact form */}
        <section className="bg-base-100 backdrop-blur-sm p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold text-neutral mb-6 text-center">
            Send Us a Message
          </h2>

          <form className="grid gap-6">
            <div>
              <label className="block text-neutral font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 p-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 p-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                className="w-full h-32 p-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-primary/90 text-white hover:bg-primary w-full shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-101 rounded-full"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
