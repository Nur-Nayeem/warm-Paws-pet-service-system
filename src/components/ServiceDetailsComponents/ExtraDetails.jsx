import React from "react";

const ExtraDetails = () => {
  return (
    <>
      <p className="text-accent text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        nesciunt adipisci blanditiis enim? A inventore expedita quod vitae nisi
        aspernatur aperiam labore nulla necessitatibus, ipsum totam modi
        provident, consectetur odit.
      </p>
      <hr className="my-6 text-gray-300" />
      <div>
        <h2 className="text-neutral text-2xl font-semibold mb-2.5">
          Provider Information
        </h2>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <h3 className="text-neutral font-semibold text-lg">Provider:</h3>
            <p className="text-accent text-lg">Paws & Claws Grooming</p>
          </div>
          <div className="col-span-3">
            <h3 className="text-neutral font-semibold text-lg">Contact:</h3>
            <p className="text-accent text-lg">contact@pawsandclaws.com</p>
          </div>
          <div className="col-span-1 mt-2.5">
            <h3 className="text-neutral font-semibold text-lg">Service ID:</h3>
            <p className="text-accent text-lg">WCG-001</p>
          </div>

          <div className="col-span-3 mt-2.5">
            <h3 className="text-neutral font-semibold text-lg">Category:</h3>
            <p className="text-accent text-lg">Specialized Grooming</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraDetails;
