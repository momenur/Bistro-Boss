import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="px-4 bg-orange-50">
        <footer className="max-w-screen-xl py-12 mx-auto bg-muted">
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start gap-4">
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <div>
                  <a className="text-xl text-orange-500 font-semibold tracking-[2px] cursor-pointer">
                    BISTRO BOSS
                    <span className="block text-sm tracking-[6px] text-center uppercase">
                      Restaurant
                    </span>
                  </a>
                </div>
              </Link>
              <div className="grid gap-2">
                <Link
                  href="#"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-sm hover:underline"
                  prefetch={false}
                >
                  Privacy
                </Link>
              </div>
            </div>
            <div className="col-span-2">
              <h3 className="text-lg font-bold">Get in touch</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we will get back to you as soon as
                possible.
              </p>
              <form className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                <div className="grid grid-cols-1 col-span-1 gap-0 sm:col-span-1">
                  <label htmlFor="name" className="font-semibold">
                    Name
                  </label>
                  <input
                    className="px-2"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 col-span-1 gap-0 sm:col-span-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    className="px-2"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid grid-cols-1 col-span-1 gap-0 sm:col-span-1">
                  <label htmlFor="message" className="font-semibold">
                    Message
                  </label>
                  <textarea
                    className="px-2 pt-2"
                    id="message"
                    rows={2}
                    placeholder="Enter your message"
                  />
                </div>
                <div className="col-span-1 sm:col-span-1 sm:col-start-2">
                  <button
                    type="submit"
                    className="w-full text-white bg-orange-400 btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </div>
      <div>
        <footer className="p-4 bg-orange-100 footer footer-center text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
