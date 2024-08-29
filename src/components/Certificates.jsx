import React from 'react';

// Import any certificate images if you have them
import certificate1 from '../assets/certificates/certificate1.PNG';
import certificate2 from '../assets/certificates/certificate2.PNG';
import certificate3 from '../assets/certificates/certificate3.PNG';

const Certificates = () => {
  return (
    <div name="certificates" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Certificates
          </p>
          <p className="text-xl mt-4">Check out some of my certifications and achievements</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Certificate Item 1 */}
          <div className="shadow-md shadow-gray-600 rounded-lg bg-gradient-to-b from-gray-800 to-black">
            <img
              src={certificate1}
              alt="Certificate 1"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                Certificate 1
              </button>
            </div>
          </div>
          {/* Certificate Item 2 */}
          <div className="shadow-md shadow-gray-600 rounded-lg bg-gradient-to-b from-gray-800 to-black">
            <img
              src={certificate2}
              alt="Certificate 2"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                Certificate 2
              </button>
            </div>
          </div>
          {/* Certificate Item 3 */}
          <div className="shadow-md shadow-gray-600 rounded-lg bg-gradient-to-b from-gray-800 to-black">
            <img
              src={certificate3}
              alt="Certificate 3"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                Certificate 3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
