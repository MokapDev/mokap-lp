export const FooterSection = () => {
  return (
    <footer className="bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-8 p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
          <a
            href="#home"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
                className="h-8 w-auto"
                src="./logowithtext.svg"
                alt=""
              />
          </a>
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#home" className="hover:underline">
            Mokap
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
