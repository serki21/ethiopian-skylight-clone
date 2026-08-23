import React from 'react';
import { Mail, Phone, HelpCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 pt-16 pb-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-300">
        
        {/* Column 1: BOOK ONLINE OR CALL */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900 tracking-wide">BOOK ONLINE OR CALL</h4>
          <div className="space-y-4 text-sm text-gray-700">
            <a href="mailto:reservation@ethiopianskylighthotel.com" className="flex items-start gap-2 hover:text-skylight-blue transition">
              <Mail size={18} className="text-gray-900 flex-shrink-0 mt-0.5" />
              <span className="break-all">reservation@ethiopianskylighthotel.com</span>
            </a>
            <a href="tel:+251116818181" className="flex items-center gap-2 hover:text-skylight-blue transition">
              <Phone size={18} className="text-gray-900 flex-shrink-0" />
              <span>+251 11681 8181</span>
            </a>
            <a href="/faq" className="flex items-center gap-2 hover:text-skylight-blue transition">
              <HelpCircle size={18} className="text-gray-900 flex-shrink-0" />
              <span>FAQ</span>
            </a>
          </div>
        </div>


        

        {/* Column 2: ABOUT US */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900 tracking-wide">ABOUT US</h4>
          <ul className="space-y-2.5 text-sm text-gray-900">
            <li><a href="/careers" className="hover:text-skylight-blue transition">Careers</a></li>
            <li><a href="/about" className="hover:text-skylight-blue transition">About us</a></li>
            <li><a href="/media" className="hover:text-skylight-blue transition">Media</a></li>
            <li><a href="/tender-documents" className="hover:text-skylight-blue transition">Tender documents</a></li>
          </ul>
        </div>

        {/* Column 3: ETHIOPIAN GROUP */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900 tracking-wide">ETHIOPIAN GROUP</h4>
          <ul className="space-y-2.5 text-sm text-gray-900">
            <li><a href="https://www.ethiopianairlines.com" target="_blank" rel="noopener noreferrer" className="hover:text-skylight-blue transition">Ethiopian Airlines</a></li>
            <li><a href="https://www.ethiopianholidays.com" target="_blank" rel="noopener noreferrer" className="hover:text-skylight-blue transition">Ethiopian Holidays</a></li>
            <li><a href="#" className="hover:text-skylight-blue transition">Ethiopian Airports</a></li>
            <li><a href="#" className="hover:text-skylight-blue transition">In-flight Catering</a></li>
            <li><a href="#" className="hover:text-skylight-blue transition">Ground Services</a></li>
            <li><a href="#" className="hover:text-skylight-blue transition">Maintenance, Repair and Overhaul</a></li>
            <li><a href="#" className="hover:text-skylight-blue transition">Aviation Academy</a></li>
            <li><a href="#" className="hover:text-skylight-blue transition">Cargo</a></li>
          </ul>
        </div>

        {/* Column 4: SOCIAL MEDIA */}
        <div>
          <h4 className="font-semibold text-lg mb-4 text-gray-900 tracking-wide">SOCIAL MEDIA</h4>
          <p className="text-sm text-gray-900 mb-4">Connect with us on social media</p>
          <div className="flex items-center gap-3 text-gray-900 flex-wrap">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-8 bg-gray-300  text-xl rounded-full flex items-center justify-center hover:bg-skylight-blue hover:text-white transition font-bold text-sm">
              f
            </a>
            {/* X / Twitter */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-skylight-blue hover:text-white transition font-bold text-xs">
              𝕏
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-300 text-xl text-bold rounded-full flex items-center justify-center hover:bg-skylight-blue hover:text-white transition text-xs">
              ▶
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 text-xl bg-gray-300 rounded-full flex items-center justify-center hover:bg-skylight-blue hover:text-white transition text-xs">
              📷
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-skylight-blue hover:text-white transition font-bold text-xs">
              in
            </a>
            {/* Pinterest */}
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-skylight-blue hover:text-white transition font-bold text-xs">
              ℗
            </a>
          </div>
          <div className="text-bold mb-4 space-y-2.5 flex item-center justifay-center text-grat-900 ">
            <p> Subscribe</p>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex justify-center items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Ethiopian Skylight Hotel</p>
      </div>
    </footer>
  );
};