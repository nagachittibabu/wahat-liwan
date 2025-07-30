import React from 'react';
import Image from 'next/image';
import { commitment, commitmentcards } from '../export';
import CommitmentCard from '../cards/commitmentCard';

const Commitment: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center text-black mb-12">
          Commitment To Quality
        </h2>

        <div className="flex flex-col gap-20">
          {commitment.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10 xl:gap-16`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-gray-800">
                  {item.about1}
                </h3>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-700">
                  {item.para1}
                </p>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-700">
                  {item.para2}
                </p>

                <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-gray-800">
                  {item.about2}
                </h3>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-700">
                  {item.para3}
                </p>

                <ul className="list-disc list-outside space-y-2 text-sm sm:text-base md:text-lg xl:text-xl text-gray-700 pl-5">
                  {item.points.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {item.image && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
                    <Image
                      src={item.image}
                      alt={item.about1}
                      width={600}
                      height={400}
                      className="rounded-xl object-contain w-full h-auto max-h-[400px]"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {commitmentcards.map((item, index) => (
            <CommitmentCard key={index} description={item.para} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;