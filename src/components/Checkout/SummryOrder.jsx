const orderItems = [
    {
      id: 1,
      name: "Gym Coords Set (Brown)",
      price: 15.0,
      quantity: 1,
      image: "https://themes.pixelstrap.com/multikart/assets/images/marijuana/banner/1.png",
    },
    {
      id: 2,
      name: "Tan Cargo Shorts",
      price: 12.0,
      quantity: 1,
      image: "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    },
  ];
  
  export default function SummaryOrder() {
    return (
      <div className="bg-secondary p-6 rounded-lg shadow ">
        <h3 className=" tracking-primary text-heading">Summary Order</h3>
        <p className=" text-paragraph mb-4">
          For a better experience, verify your goods and choose your shipping option.
        </p>
        <hr className="border-gray-200 mb-4" />
  
        <div className="space-y-4">
          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                <div>
                  <h4 className="text-heading">{item.name}</h4>
                  <h5 className="text-paragraph">
                    ${item.price.toFixed(2)} X {item.quantity}
                  </h5>
                </div>
              </div>
              <p className="text-mainText font-bold">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  