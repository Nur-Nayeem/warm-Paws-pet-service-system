import { FaPaw, FaHeart, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="my-container py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary">About Warmpaws</h1>
        <p className="mt-4 text-neutral max-w-2xl mx-auto">
          Warmpaws is dedicated to helping animals find loving homes while
          raising awareness about animal care and welfare. We believe every paw
          deserves warmth, safety, and love.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="p-8 rounded-xl shadow bg-base-100 hover:shadow-lg transition-all">
          <div className="text-primary/90 text-5xl mb-4">
            <FaPaw />
          </div>
          <h2 className="text-xl font-semibold text-neutral mb-2">
            Our Mission
          </h2>
          <p className="text-accent">
            We work to rescue, protect, and improve the lives of animals in need
            by connecting them with caring families.
          </p>
        </div>

        {/* card 2 */}
        <div className="p-8 rounded-xl shadow bg-base-100 hover:shadow-lg transition-all">
          <div className="text-primary/90 text-5xl mb-4">
            <FaHeart />
          </div>
          <h2 className="text-xl font-semibold text-neutral mb-2">
            What We Believe
          </h2>
          <p className="text-accent">
            Every animal deserves kindness, compassion, and a safe home where
            they feel loved and protected.
          </p>
        </div>

        {/* card 3 */}
        <div className="p-8 rounded-xl shadow bg-base-100 hover:shadow-lg transition-all">
          <div className="text-primary/90 text-5xl mb-4">
            <FaHandshake />
          </div>
          <h2 className="text-xl font-semibold text-neutral mb-2">
            Community Support
          </h2>
          <p className="text-accent">
            We collaborate with volunteers, shelters, and donors to make a
            positive impact on animal welfare across communities.
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="text-center mt-16">
        <p className="text-neutral max-w-xl mx-auto">
          Together, we can build a world where every animal is safe, healthy,
          and loved. Thank you for supporting our mission and being a part of
          the Warmpaws family.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
