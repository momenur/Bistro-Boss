const Payment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-theme-secondary">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-theme-primary">
          Payment Page
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expirationDate" className="block text-gray-700">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cvc" className="block text-gray-700">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded bg-theme-primary hover:bg-opacity-90"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
