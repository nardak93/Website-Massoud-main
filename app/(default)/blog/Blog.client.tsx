import React, { useState } from 'react';
import Image from 'next/image';

import img1 from '@/public/images/img1.jpg';
import img2 from '@/public/images/img2.jpg';
import img3 from '@/public/images/img3.jpg';

const BlogPage = () => {
    const [expandedStoryId, setExpandedStoryId] = useState(null);
  // Fictional stories data
  const stories = [
    {
      id: 1,
      title: 'Behind the Lens: A Look at Our 2022 Quality Inspection Success',
      content: `Last year marked a milestone for our quality inspection team at [Your Company Name]. With precision at the heart of our mission, we dedicated ourselves to elevating the standards of our factory's production line, ensuring every product not only met but exceeded our customers' expectations.

      Our journey of meticulous inspection began with the assembly of a diverse team of experts, each bringing a unique skill set to the table. United by a shared commitment to excellence, we navigated through the year with a clear vision — to ensure the integrity of our manufacturing process through rigorous quality checks.
      
      A pivotal moment captured in the accompanying photograph illustrates the crux of our operation — the microscopic analysis of product samples. The focus and attention to detail personified by our specialist, as seen in the image, reflect the granular level of scrutiny we applied throughout our inspections.
      
      Utilizing advanced equipment, including the high-powered microscope featured in our story, we dissected every facet of our products. From material durability to the perfection of the finish, no aspect was too small for our evaluation. The results were nothing short of transformative. By identifying and addressing even the most minute irregularities, we not only improved the quality of our products but also streamlined our manufacturing process, reducing waste and increasing efficiency.
      
      Our 2022 quality inspection initiative wasn't just about maintaining standards — it was about setting new benchmarks for quality. As we share this glimpse into our work, we celebrate the unwavering dedication of our team and the seamless collaboration that led to our success. We look forward to continuing this journey, pushing the boundaries of quality, and upholding the trust that our customers place in us.`,
      image: img1,
      author: 'John Doe',
      date: 'January 1, 2023',
    },
    {
      id: 2,
      title: 'Mysteries of the Ocean',
      content: `Last year marked a milestone for our quality inspection team at [Your Company Name]. With precision at the heart of our mission, we dedicated ourselves to elevating the standards of our factory's production line, ensuring every product not only met but exceeded our customers' expectations.

      Our journey of meticulous inspection began with the assembly of a diverse team of experts, each bringing a unique skill set to the table. United by a shared commitment to excellence, we navigated through the year with a clear vision — to ensure the integrity of our manufacturing process through rigorous quality checks.
      
      A pivotal moment captured in the accompanying photograph illustrates the crux of our operation — the microscopic analysis of product samples. The focus and attention to detail personified by our specialist, as seen in the image, reflect the granular level of scrutiny we applied throughout our inspections.
      
      Utilizing advanced equipment, including the high-powered microscope featured in our story, we dissected every facet of our products. From material durability to the perfection of the finish, no aspect was too small for our evaluation. The results were nothing short of transformative. By identifying and addressing even the most minute irregularities, we not only improved the quality of our products but also streamlined our manufacturing process, reducing waste and increasing efficiency.
      
      Our 2022 quality inspection initiative wasn't just about maintaining standards — it was about setting new benchmarks for quality. As we share this glimpse into our work, we celebrate the unwavering dedication of our team and the seamless collaboration that led to our success. We look forward to continuing this journey, pushing the boundaries of quality, and upholding the trust that our customers place in us.`,
      image: img2,
      author: 'Jane Smith',
      date: 'February 14, 2023',
    },
    {
      id: 3,
      title: 'Stars Above',
      content: `Last year marked a milestone for our quality inspection team at [Your Company Name]. With precision at the heart of our mission, we dedicated ourselves to elevating the standards of our factory's production line, ensuring every product not only met but exceeded our customers' expectations.

      Our journey of meticulous inspection began with the assembly of a diverse team of experts, each bringing a unique skill set to the table. United by a shared commitment to excellence, we navigated through the year with a clear vision — to ensure the integrity of our manufacturing process through rigorous quality checks.
      
      A pivotal moment captured in the accompanying photograph illustrates the crux of our operation — the microscopic analysis of product samples. The focus and attention to detail personified by our specialist, as seen in the image, reflect the granular level of scrutiny we applied throughout our inspections.
      
      Utilizing advanced equipment, including the high-powered microscope featured in our story, we dissected every facet of our products. From material durability to the perfection of the finish, no aspect was too small for our evaluation. The results were nothing short of transformative. By identifying and addressing even the most minute irregularities, we not only improved the quality of our products but also streamlined our manufacturing process, reducing waste and increasing efficiency.
      
      Our 2022 quality inspection initiative wasn't just about maintaining standards — it was about setting new benchmarks for quality. As we share this glimpse into our work, we celebrate the unwavering dedication of our team and the seamless collaboration that led to our success. We look forward to continuing this journey, pushing the boundaries of quality, and upholding the trust that our customers place in us.`,
      image: img3,
      author: 'Alex Johnson',
      date: 'March 29, 2023',
    },

  ];

  const toggleStory = (id) => {
    if (expandedStoryId === id) {
        setExpandedStoryId(null); // Close the expanded story
    } else {
        setExpandedStoryId(id); // Expand the new story
    }
};

return (
    <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

            {/* SVG background from Hero */}
            <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true">
                {/* SVG code goes here */}
            </div>

            {/* Content */}
            <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-semibold text-white-800">Our Blog</h1>
                </div>

                {/* Blog stories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map(story => (
                        <article key={story.id} className="bg-black overflow-hidden shadow rounded-lg transition-all duration-500 ease-in-out">
                            <div className="relative overflow-hidden pb-60">
                                <Image src={story.image} alt={story.title} layout="fill" objectFit="cover" className="transition duration-500 ease-in-out transform hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white-900 mb-2 cursor-pointer" onClick={() => toggleStory(story.id)}>
                                    {story.title}
                                </h2>
                                <p className={`text-base text-white-700 transition-all duration-500 ease-in-out ${expandedStoryId === story.id ? 'block' : 'line-clamp-3'}`}>
                                    {story.content}
                                </p>
                                <footer className="text-gray-500">
                                    <small>By {story.author} on {story.date}</small>
                                </footer>
                                <button
                                    className="text-sm text-blue-500 hover:text-blue-600 mt-2"
                                    onClick={() => toggleStory(story.id)}
                                >
                                    {expandedStoryId === story.id ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
};

export default BlogPage;