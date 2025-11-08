import nineoneone from "@/assets/911.svg";
import copy from "@/assets/copy.svg";

export default function EmergencyHotlines() {
  const hotlines = [
    { label: "All Emergencies (Nationwide)", number: "911" },
    { label: "PNP (Police)", number: "0917 135 7907" },
    { label: "BFP (Fire/Rescue)", number: "0920 960 6844" },
    { label: "Disaster Response (NDRRMC/OCD)", number: "0998 546 9453" },
    { label: "Philippine Red Cross", number: "0918 947 2018" },
    { label: "MMDA (Metro Manila)", number: "0917 700 2950" }
  ];

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`${number} copied to clipboard!`);
      })
      .catch(() => {
        alert("Failed to copy the number.");
      });
  };

  return (
    <div className="p-8">
      <h1 className="pb-5 font-bold text-2xl">Emergency Hotlines</h1>

      {/* 911 Hotline */}
      <div className="w-full border-orange-400 border-4 rounded-xl p-4 mb-10 flex items-center gap-4">
        <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
          <img
            src={nineoneone}
            alt="911"
            className="h-9 w-9 object-contain"
          />
        </div>

        <div className="flex-1 flex items-center justify-between pr-2">
          <div className="flex flex-col">
            <p className="font-bold">
              {hotlines[0].label} {hotlines[0].number}
            </p>
            <p className="text-red-600 font-bold text-2xl">
              {hotlines[0].number}
            </p>
          </div>

          <button
            onClick={() => handleCopy(hotlines[0].number)}
            className="flex-shrink-0"
            title="Copy number"
          >
            <img src={copy} alt="Copy" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Other Hotlines */}
      <p className="pb-5">You may also contact the following hotlines:</p>

      <div className="w-full border border-gray-200 rounded-xl p-4 mb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold">BFP (Fire/Rescue)</p>
          <p className="text-gray-700">{hotlines[2].number}</p>
        </div>
        <button
          onClick={() => handleCopy(hotlines[2].number)}
          className="flex-shrink-0"
          title="Copy number"
        >
          <img src={copy} alt="Copy" className="h-6 w-6" />
        </button>
      </div>

      <div className="w-full border border-gray-200 rounded-xl p-4 mb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold">Disaster Response (NDRRMC/OCD)</p>
          <p className="text-gray-700">{hotlines[3].number}</p>
        </div>
        <button
          onClick={() => handleCopy(hotlines[3].number)}
          className="flex-shrink-0"
          title="Copy number"
        >
          <img src={copy} alt="Copy" className="h-6 w-6" />
        </button>
      </div>

      <div className="w-full border border-gray-200 rounded-xl p-4 mb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold">MMDA (Metro Manila)</p>
          <p className="text-gray-700">{hotlines[5].number}</p>
        </div>
        <button
          onClick={() => handleCopy(hotlines[5].number)}
          className="flex-shrink-0"
          title="Copy number"
        >
          <img src={copy} alt="Copy" className="h-6 w-6" />
        </button>
      </div>

      <div className="w-full border border-gray-200 rounded-xl p-4 mb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold">Philippine Red Cross</p>
          <p className="text-gray-700">{hotlines[4].number}</p>
        </div>
        <button
          onClick={() => handleCopy(hotlines[4].number)}
          className="flex-shrink-0"
          title="Copy number"
        >
          <img src={copy} alt="Copy" className="h-6 w-6" />
        </button>
      </div>

      <div className="w-full border border-gray-200 rounded-xl p-4 mb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold">PNP (Police)</p>
          <p className="text-gray-700">{hotlines[1].number}</p>
        </div>
        <button
          onClick={() => handleCopy(hotlines[1].number)}
          className="flex-shrink-0"
          title="Copy number"
        >
          <img src={copy} alt="Copy" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}