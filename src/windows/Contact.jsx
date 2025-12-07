import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="/images/anhanh.jpg"
              alt="AnhAnh"
              className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100 shadow-md"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-gray-800">
              Let's Connect
            </h3>
            <p className="text-sm text-gray-500">
              Got an idea or just want to say hi? Feel free to reach out!
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-3">
          <a
            href="mailto:anh.nguyenanh1114@gmail.com"
            className="flex items-center gap-4 p-4 bg-linear-to-r from-blue-50 to-blue-100/50 rounded-xl hover:from-blue-100 hover:to-blue-200/50 transition-all duration-300 group"
          >
            <div className="p-2.5 bg-blue-500 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">Email</p>
              <p className="text-sm text-gray-700 font-medium">
                anh.nguyenanh1114@gmail.com
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="tel:+84327665176"
            className="flex items-center gap-4 p-4 bg-linear-to-r from-green-50 to-green-100/50 rounded-xl hover:from-green-100 hover:to-green-200/50 transition-all duration-300 group"
          >
            <div className="p-2.5 bg-green-500 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">Phone</p>
              <p className="text-sm text-gray-700 font-medium">0327 665 176</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="flex items-center gap-4 p-4 bg-linear-to-r from-orange-50 to-orange-100/50 rounded-xl">
            <div className="p-2.5 bg-orange-500 rounded-lg shadow-sm">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">Location</p>
              <p className="text-sm text-gray-700 font-medium">
                Di An city, Binh Duong province
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            Connect on Social
          </p>
          <ul className="flex items-center gap-3">
            {socials
              .filter(({ text }) => text !== "Email" && text !== "Phone")
              .map(({ id, bg, link, icon, text }) => (
                <li
                  key={id}
                  className="flex-1 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: bg }}
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={text}
                    className="flex flex-col items-center gap-2 p-4"
                  >
                    <img
                      src={icon}
                      alt={text}
                      className="w-6 h-6 brightness-0 invert"
                    />
                    <p className="font-semibold text-sm text-white">{text}</p>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
