const Footer = () => {
  return (
    <div
      className="lg:w-[300px] p-4 bg-gray-100 dark:bg-[#040b14] lg:fixed lg:left-0 lg:bottom-0 lg:z-[9997] w-full fixed bottom-0 text-gray-800 dark:text-white border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
      onClick={() => console.log("pressed")}
    >
      <p
        className="text-center transition-colors duration-300"
        onClick={() => console.log("pressed")}
      >
        Copyright <strong>Kondwani Padyera</strong> 2025
      </p>
    </div>
  );
};

export default Footer;
