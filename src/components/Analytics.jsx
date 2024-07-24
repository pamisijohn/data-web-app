import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            recusandae eligendi. Totam hic repellendus, culpa eaque est
            temporibus quae iure ipsam, modi officiis quaerat accusantium.
            Pariatur voluptas praesentium dolorem ipsa!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
