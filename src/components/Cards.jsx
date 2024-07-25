import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt="Single card"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">Send up to 2 </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trials
          </button>
        </div>

        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt="Double card"
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$250</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">2 TB Storage</p>
            <p className="py-2 border-b mx-8">Send up to 5 </p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black">
            Start Trials
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt="Triple card"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$400</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">4 TB Storage</p>
            <p className="py-2 border-b mx-8">Send up to 10 </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
