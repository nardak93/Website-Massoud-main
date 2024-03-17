import Image from "next/image";

import FeatImage01 from "@/public/images/inspection.png";
import FeatImage02 from "@/public/images/inspection02.png";
import FeatImage03 from "@/public/images/Stars.png";
import CMM from "@/public/images/CMM.jpg";
import hardness from "@/public/images/Hardness test.jpg";
import roughness from "@/public/images/photo_33_2023-11-27_16-16-54.jpg";
import salt from "@/public/images/Salt contamination check.jpg";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 mt-28">
              EXPLORING PRECISION: YOUR GUIDE TO QUALITY INSPECTION
            </h1>
            <p className="text-xl text-gray-400">
              At Inspection with Us, we specialize in comprehensive quality
              inspection services, including mechanical, dimensional, painting,
              and coating assessments, ensuring your products meet the highest
              standards. With our expertise, your manufacturing processes are
              optimized for precision and excellence. Trust Inspection with Us
              to elevate your quality control to the next level.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center mt-28">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={CMM}
                  width={840}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">
                    {" "}
                    Unveiling the Role of CMM in Quality Inspection
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    In this captivating snapshot, we witness the essence of
                    precision encapsulated within the realm of quality
                    inspection. Behold the Coordinate Measuring Machine (CMM), a
                    marvel of engineering sophistication. As a seasoned quality
                    inspector, I stand beside this technological masterpiece,
                    its probing system delicately poised to capture the
                    intricacies of a meticulously crafted component. With each
                    precise movement, the CMM meticulously maps the dimensional
                    accuracy and geometric intricacies, ensuring flawless
                    adherence to stringent quality standards. This image
                    epitomizes the pivotal role of CMMs in guaranteeing the
                    excellence of manufactured products across diverse
                    industries, from automotive to aerospace, fostering a
                    culture of uncompromising quality and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={hardness}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Sectors</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    We have a multidisciplinary team formed by well-educated and
                    experienced engineers and technicians whom are located
                    throughout Europe, enabling us to act as your independent
                    eyes and ears, wherever your suppliers are based in. This
                    extended experience in the mentioned fields shows our team
                    experience and the quality of their service, which we were
                    able to gain customer trust and satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={roughness}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={salt}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Sectors</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    We have a multidisciplinary team formed by well-educated and
                    experienced engineers and technicians whom are located
                    throughout Europe, enabling us to act as your independent
                    eyes and ears, wherever your suppliers are based in. This
                    extended experience in the mentioned fields shows our team
                    experience and the quality of their service, which we were
                    able to gain customer trust and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
