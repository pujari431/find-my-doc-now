
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-medical-secondary text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FindMyDoc</h3>
            <p className="text-gray-300">
              Find the best doctors in your area and book appointments online.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Search Doctors</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Online Consultations</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Health Articles</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Doctors</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Join FindMyDoc</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">FindMyDoc Pro</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">contact@findmydoc.com</li>
              <li className="text-gray-300">+91 123 456 7890</li>
              <li className="text-gray-300">Chennai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FindMyDoc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
