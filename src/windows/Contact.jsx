import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-5 space-y-5">
        <div className="grid grid-cols-[80px_1fr] gap-4 items-center">
          <img
            src="/images/adrian.jpg"
            alt="Adrian"
            className="w-16 h-16 rounded-full"
          />
          <div className="space-y-1 text-left">
            <h3>Let's Connect</h3>
            <p className="text-sm text-gray-600">
              Got an idea or just want to say hi? Feel free to reach out!
            </p>
            <p className="text-sm text-gray-600">anh.nguyenanh1114@gmail.com</p>
          </div>
        </div>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
