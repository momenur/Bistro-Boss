const ContractNumber = () => {
  function CoffeeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2v2" />
        <path d="M14 2v2" />
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
        <path d="M6 2v2" />
      </svg>
    );
  }

  function DownloadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    );
  }

  function HandPlatterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3V2" />
        <path d="M5 10a7.1 7.1 0 0 1 14 0" />
        <path d="M4 10h16" />
        <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
        <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
        <path d="M5 14v7H2" />
      </svg>
    );
  }

  function UtensilsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    );
  }

  function CakeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
        <path d="M2 21h20" />
        <path d="M7 8v3" />
        <path d="M12 8v3" />
        <path d="M17 8v3" />
        <path d="M7 4h0.01" />
        <path d="M12 4h0.01" />
        <path d="M17 4h0.01" />
      </svg>
    );
  }
  return (
    <section className="w-full py-12 pt-12 bg-[#B6C7AA] md:pt-10 lg:pt-16">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Key Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From fine dining to catering, we offer a wide range of services to
            cater to your every need.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col items-center gap-4 p-6 transition-all border rounded-lg hover:shadow-lg">
            <div className="p-3 text-yellow-500 bg-gray-700 rounded-md">
              <HandPlatterIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Fine Dining</h3>
            <p className="text-muted-foreground">
              Experience our exquisite fine dining menu crafted by our
              award-winning chefs.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 transition-all border rounded-lg hover:shadow-lg">
            <div className="p-3 text-yellow-500 bg-gray-700 rounded-md ">
              <UtensilsIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Catering</h3>
            <p className="text-muted-foreground">
              Let us handle the catering for your next event, from intimate
              gatherings to large celebrations.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 transition-all border rounded-lg hover:shadow-lg">
            <div className="p-3 text-yellow-500 bg-gray-700 rounded-md bg-muted text-muted-foreground">
              <DownloadIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Delivery</h3>
            <p className="text-muted-foreground">
              Enjoy our delicious meals in the comfort of your own home with our
              fast and reliable delivery service.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 transition-all border rounded-lg hover:shadow-lg">
            <div className="p-3 text-yellow-500 bg-gray-700 rounded-md ">
              <CoffeeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Cocktail Bar</h3>
            <p className="text-muted-foreground">
              Sip on our expertly crafted cocktails and enjoy the vibrant
              atmosphere of our lounge.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 transition-all border rounded-lg hover:shadow-lg">
            <div className="p-3 text-yellow-500 bg-gray-700 rounded-md ">
              <CakeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Desserts</h3>
            <p className="text-muted-foreground">
              Indulge in our decadent desserts, crafted with the finest
              ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractNumber;
