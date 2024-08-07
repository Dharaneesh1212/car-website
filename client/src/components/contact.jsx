import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <main
      id="contact"
      className="bg-black flex items-center justify-center flex-col"
    >
      <div
        id="contact-box"
        className="flex items-center justify-center flex-col gap-4 h-auto bg-zinc-900 p-12 rounded-xl mt-[6rem] text-lg m-4"
      >
        <div
          id="box-one"
          className="flex items-start justify-center h-auto bg-zinc-900 text-red-600 text-3xl p-4 rounded-xl gap-8"
        >
          <div
            id="social"
            className="flex items-center justify-center gap-8 bg-zinc-700 h-[7rem] w-[20rem] rounded-md"
          >
            <div
              id="phone"
              className="phone flex items-center justify-center p-2 bg-zinc-900 rounded-full animate__animated animate__zoomIn"
            >
              <a href="tel:+919566375213">
                <i>
                  <IoIosPhonePortrait />
                </i>
              </a>
            </div>
            <div
              id="whatsapp"
              className="whatsapp flex items-center justify-center p-2 bg-zinc-900 rounded-full animate__animated animate__zoomIn"
            >
              <a href="https://wa.me/919566375213?text=Hi viewed yor Autoworks Website">
                <i>
                  <FaWhatsapp />
                </i>
              </a>
            </div>
            <div
              id="instagram"
              className="instagram flex items-center justify-center p-2 bg-zinc-900 rounded-full animate__animated animate__zoomIn"
            >
              <a href="http://instagram.com/_u/_dharaneesh_s_/">
                <i>
                  <FaInstagram />
                </i>
              </a>
            </div>
          </div>
          <div
            id="mail"
            className="flex items-center justify-center gap-8 bg-zinc-700 h-[7rem] w-[33rem] rounded-md"
          >
            <div
              id="box-two"
              className="email flex items-center justify-center flex-row gap-4 p-3 bg-zinc-900 rounded-full animate__animated animate__zoomIn"
            >
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
                <i>
                  <MdOutlineEmail />
                </i>
              </a>
              <span>dharun12122002@gmail.com</span>
            </div>
          </div>
        </div>
        <div id="box-three" className="flex items-center justify-center gap-4">
          <input
            id="contact-name"
            type="text"
            placeholder="Your Name"
            className="capitalize animate__animated animate__zoomIn bg-zinc-700 text-white outline-none p-2 rounded-md h-[3rem] w-[27rem]"
          />
          <input
            id="contact-email"
            type="text"
            placeholder="Your Email"
            className="animate__animated animate__zoomIn bg-zinc-700 text-white outline-none p-2 rounded-md h-[3rem] w-[27rem]"
          />
        </div>
        <input
          id="contact-subject"
          type="text"
          placeholder="Subject"
          className="animate__animated animate__zoomIn bg-zinc-700 text-white outline-none p-2 rounded-md h-[3rem] w-[55rem]"
        />
        <textarea
          id="contact-message"
          placeholder="Message"
          className="animate__animated animate__zoomIn bg-zinc-700 text-white outline-none p-2 rounded-md h-[15rem] w-[55rem]"
        ></textarea>
        <button
          id="send"
          className="animate__animated animate__zoomIn bg-red-700 text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
        >
          Send Message
        </button>
      </div>
    </main>
  );
};

export default Contact;
