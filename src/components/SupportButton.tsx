import { MessageCircle } from 'lucide-react';

export default function SupportButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-800 transition flex items-center gap-2 group">
        <span className="font-semibold">Ask Alisha</span>
        <div className="bg-teal-800 p-2 rounded-lg group-hover:bg-teal-900 transition">
          <MessageCircle className="w-5 h-5" />
        </div>
      </button>
      <div className="absolute -top-3 -right-3 flex gap-1">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
}
