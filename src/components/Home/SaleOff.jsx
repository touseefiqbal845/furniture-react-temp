const ThreeSectionGrid = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-6 md:px-12 py-12 bg-secondary text-mainText">
            <div className="flex justify-center md:col-span-4">
                <img
                    src="/assets/newprod1.png"
                    alt="Left Section"
                    className="w-full max-w-sm rounded-xl shadow-lg"
                />
            </div>

            <div className="text-center space-y-4 md:col-span-4">
                <h5 className="text-mainText font-normal leading-secondary ">New Products</h5>
                <h2 className="font-bold  text-heading">ZIPPER STORAGE BAG</h2>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md transition-colors hover:bg-mainText/90 hover:text-white">
                    -80% OFF
                </button>
            </div>
        
            <div className="flex justify-center md:col-span-4">
                <img
                    src="/assets/newprod2.png"
                    alt="Right Section"
                    className="w-full max-w-sm rounded-xl shadow-lg"
                />
            </div>
        </section>
    );
};

export default ThreeSectionGrid;
