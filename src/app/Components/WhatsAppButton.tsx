import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      <span className="bg-white text-gray-700 text-sm font-medium px-3 py-2 rounded-lg shadow-md">
        Chat with us
      </span>
      <Link
        href="https://wa.me/923091129240"
        target="_blank"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={28} color="white" /> {/* ✅ No TypeScript error */}
      </Link>
    </div>
  );
}
