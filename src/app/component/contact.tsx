
const Contact = () => {
  return (
    <div id="contact">
      <section className="text-gray-600 body-font relative bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">
            Contact <span className="text-blue-500">Us</span>
          </h1>
        </div>
        <div className="container px-5 py-5 mx-auto flex justify-center items-center">
          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-lg p-8">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Contact Form
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Feel Free to Contact for Any Help
            </p>
            <form 
             action="https://formspree.io/f/xeojbrbb" method="POST"
            >
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
            
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               required
               />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                 
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                 maxLength={500}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
               
              >
               Send Message
              </button>
            </form>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
