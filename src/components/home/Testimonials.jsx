import { useState } from "react";
import Slider from "react-slick";
import p1 from "../../assets/clients/p1.png"
import p2 from "../../assets/clients/p2.png"
import p3 from "../../assets/clients/p3.png"
import p4 from "../../assets/clients/p4.png"

const Testimonials = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: () => (
      <div className="w-2 h-2 mt-6 rounded-full bg-gray-400 transition-all duration-300"></div>
    ),
    appendDots: (dots) => (
      <div className="mt-6">
        <ul
          className="flex justify-center gap-2
          [&_.slick-active>div]:bg-blue-600 
          [&_.slick-active>div]:w-2 
          [&_.slick-active>div]:h-2 
          [&_.slick-active>div]:transition-all 
          [&_.slick-active>div]:duration-300"
        >
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // below 1024px → 1 card
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // below 1024px → 1 card
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      img: p1,
      title: "Amazing service!",
      reviewer: "John Partho",
      review:
        "eTechCompany was able to quickly assist Caremerge with Data Export needs from our back-end. BrighCodeLab identified our architecture, and understood the process that was needed, and proposed a plan and an associated budget. If I have any future needs for data export, manipulation or import services; eTechCompany is my first choice as a vendor to respond efficiently and effectively to my organizations' needs.",
    },
    {
      img: p2,
      title: "Expert Developers!",
      reviewer: "Mullar Sarth",
      review:
        "QA resources provided by eTechCompany are top-notch. Our QA engineer is meticulous to detail, manually tests each new Feature in all different environments, plus is always interested in learning about new technologies to help automate and improve our QA process. We are very happy with the QA services provided by eTechCompany and would recommend them to anyone looking for great QA resources.",
    },
    {
      img: p3,
      title: "Good Support!",
      reviewer: "Kolis Mullar",
      review:
        "eTechCompany worked on the Wysefit mobile app. They were attentive, dedicated, and processes-driven. They often worked on weekends and odd hours when we had deadlines. I felt that they had my back; acting not as an outsourced team but like a dedicated team whom I could rely upon. I enjoyed working with eTechCompany and would recommend them to anyone looking for a reliable development partner.",
    },
    {
      img: p4,
      title: "Nice Environment!",
      reviewer: "Partho Sarothi",
      review:
        "The eTechCompany team has been an extremely capable addition to our team, and they're truly a pleasure to work with. Highly recommend! I'm really impressed with their professionalism and dedication to quality. They're a pleasure to work with and I'm looking forward to working with them again in the future.Great team, great work, great people. Highly recommended!",
    },
  ];

  return (
    <section className="py-16 overflow-visible bg-dark-section">
      {/* Heading */}
        <div className='flex flex-col justify-center items-center text-center space-y-3 mb-10'>
          <h1 className='text-primary text-3xl md:text-4xl font-semibold'>TESTIMONIALS</h1>
          <h3 className='text-3xl md:text-5xl text-text font-semibold'>What People Say</h3>
        </div>

      {/* Slider */}
      <div className="container mx-auto px-4 sm:px-8 overflow-visible">
        <Slider {...settings}>
          {testimonials.map((test, index) => {
            const [showFull, setShowFull] = useState(false);

            return (
              <div key={index} className="px-4 pb-2">
                <div className="bg-white rounded-2xl shadow-lg relative pb-8 px-6 text-center flex flex-col overflow-visible mt-10">
                  {/* Profile Image */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                    <img
                      src={test.img || "/placeholder.svg"}
                      alt={test.reviewer}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Review text */}
                  <p
                    className={`text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-1 mt-20 ${
                      !showFull ? "line-clamp-3" : ""
                    }`}
                  >
                    {test.review}
                  </p>

                  {/* Toggle button */}
                  <button
                    onClick={() => setShowFull(!showFull)}
                    className="text-blue-600 text-sm font-medium hover:underline flex items-center justify-center gap-1 lg:hidden"
                  >
                    {showFull ? "Show Less ▲" : "Read More ▼"}
                  </button>

                  {/* Reviewer */}
                  <div className="flex flex-col items-center mt-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                      {test.reviewer}
                    </h4>
                    <span className="text-gray-500 text-xs sm:text-sm">
                      {test.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
