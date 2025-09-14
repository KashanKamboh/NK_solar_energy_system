"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    text: "NK Solar provided exceptional service from start to finish. The installation was smooth, the team was professional, and I am extremely happy with the results.",
    name: "The Kids Schooling System",
  },
  {
    text: "Truly impressed with their professionalism and attention to detail. Everything was explained clearly, and the system works perfectly as promised.",
    name: "from DHA Commercial area Client",
  },
  {
    text: "ین کے سولر کی سروس واقعی کمال کی تھی۔ ٹیم نے نہایت محنت اور ایمانداری سے کام کیا اور نتیجہ میری توقعات سے بڑھ کر نکلا۔ میں بہت خوش ہوں۔",
    name: "Ali Nawaz Sodo",
  },
  {
    text: "The support team was outstanding! They guided me through every step and answered all my questions with patience. Highly trustworthy service.",
    name: "Delighted Customer 3",
    },
    {
    text: "From consultation to installation, everything was handled perfectly. I appreciate their commitment to quality and customer satisfaction.",
    name: "Content Client 4",
    },
];

export default function ReviewsPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        What People Say About Our Work
      </h2>
      <p className="text-gray-600 max-w-2xl text-center mb-10">
        We value the trust our clients place in us. Here’s what they have to say about their experience with NK Solar:
      </p>

      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-8 text-center"
          >
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              “{reviews[index].text}”
            </p>
            <h4 className="text-orange-500 font-semibold">— {reviews[index].name}</h4>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}