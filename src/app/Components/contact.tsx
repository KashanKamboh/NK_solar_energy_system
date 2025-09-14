// "use client";

// import AnimateIn from "./AnimateIn";

// export default function Contact() {
//   return (
//     <section id="contact" className=" bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <AnimateIn>
//           <h2 className="text-4xl font-bold text-black-900 text-center">Contact Us</h2>
//         </AnimateIn>
//         <AnimateIn delay={150}>
//           <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
//             Have questions or need a quote? Send us a message and we’ll get back to you.
//           </p>
//         </AnimateIn>

//         {/* Joined container: form (left) + map (right) */}
//         <AnimateIn delay={200}>
//           <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 bg-white">
//             <div className="p-6 lg:p-8">
//               <form className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Name</label>
//                     <input className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 py-3" placeholder="Your name" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Phone</label>
//                     <input className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 py-3" placeholder="0300 0000000" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input type="email" className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 py-3" placeholder="you@example.com" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Message</label>
//                   <textarea rows={5} className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 p-3" placeholder="How can we help?" />
//                 </div>
//                 <button type="submit" className="inline-flex items-center justify-center rounded bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2">
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             <div className="min-h-[380px] w-full lg:border-l lg:border-gray-200">
//               <iframe
//                 title="Map"
//                 className="h-full w-full"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13290.738!2d74.343!3d31.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z31.520!5e0!3m2!1sen!2s!4v1710000000000"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </AnimateIn>
//       </div>
//       <div className="h-1 w-full bg-yellow-500 mt-10" />
//     </section>
//   );
// }

"use client";

import AnimateIn from "./AnimateIn";
import { useState } from "react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.querySelector('input[placeholder="Your name"]') as HTMLInputElement)?.value;
    const phone = (form.querySelector('input[placeholder="0300 0000000"]') as HTMLInputElement)?.value;
    const email = (form.querySelector('input[type="email"]') as HTMLInputElement)?.value;
    const message = (form.querySelector('textarea') as HTMLTextAreaElement)?.value;

    const whatsappNumber = "923141263066";
    const text = `Hello, I am ${name}. My phone: ${phone}, Email: ${email}. Message: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // ✅ Show popup after opening WhatsApp
    setShowPopup(true);

    // Hide popup automatically after 3 sec
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="contact" className=" bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="text-4xl font-bold text-black-900 text-center">Contact Us</h2>
        </AnimateIn>
        <AnimateIn delay={150}>
          <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
            Have questions or need a quote? Send us a message and we’ll get back to you.
          </p>
        </AnimateIn>

        {/* Joined container: form (left) + map (right) */}
        <AnimateIn delay={200}>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 bg-white">
            <div className="p-6 lg:p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 py-3"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 py-3"
                      placeholder="0300 0000000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 py-3"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    className="mt-1 w-full rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 p-3"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="min-h-[380px] w-full lg:border-l lg:border-gray-200">
              <iframe
                title="Map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13290.738!2d74.343!3d31.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z31.520!5e0!3m2!1sen!2s!4v1710000000000"
                allowFullScreen
              />
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-bounce">
          🙏 Thank you for connecting with us!
        </div>
      )}

      <div className="h-1 w-full bg-yellow-500 mt-10" />
    </section>
  );
}

