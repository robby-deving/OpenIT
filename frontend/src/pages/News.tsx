import readmore from "@/assets/read-more.svg";

export default function News() {
  return (
    <div className="p-8">
      <h1 className="pb-5 font-bold text-2xl">News</h1>

      <div className="w-full border border-gray-200 rounded-xl p-4 px-7 pt-5 mb-4 flex flex-col">
        {/* Headline */}
        <p className="font-bold text-lg mb-2">
          Phivolcs: Recent earthquakes not part of a single massive event
        </p>

        {/* Content */}
        <p className="text-gray-700 text-sm mb-2">
          Destroyed establishments and cracked roads at the Bogo City Port area along San Vicente Street, Barangay San Vicente, Bogo City, after a 6.9-magnitude earthquake.
        </p>

        {/* Date Posted */}
        <p className="text-gray-400 text-xs mb-4">
          Date Posted: Nov 8, 2025
        </p>

        {/* Read More Button */}
        <div className="flex justify-end">
          <a
            href="https://www.sunstar.com.ph/cebu/recent-earthquakes-not-part-of-a-single-massive-event#google_vignette"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Read More
            <img src={readmore} alt="Read More" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="w-full border border-gray-200 rounded-xl p-4 px-7 pt-5 mb-4 flex flex-col">
        {/* Headline */}
        <p className="font-bold text-lg mb-2">
          Magnitude 4.4 quake rocks Pangasinan
        </p>

        {/* Content */}
        <p className="text-gray-700 text-sm mb-2">
          A magnitude 4.7 earthquake jolted Dasol town, Pangasinan at 1:23 p.m. on Friday and it was followed by a series of smaller tremors. The first tremor's epicenter was traced 4 km. west of Dasol town.
        </p>

        {/* Date Posted */}
        <p className="text-gray-400 text-xs mb-4">
          Date Posted: Nov 7, 2025
        </p>

        {/* Read More Button */}
        <div className="flex justify-end">
          <a
            href="https://www.pna.gov.ph/articles/1262781"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Read More
            <img src={readmore} alt="Read More" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="w-full border border-gray-200 rounded-xl p-4 px-7 pt-5 mb-4 flex flex-col">
        {/* Headline */}
        <p className="font-bold text-lg mb-2">
          Magnitude 5.2 quake jolts Ilocos Norte town
        </p>

        {/* Content */}
        <p className="text-gray-700 text-sm mb-2">
          LAOAG CITY – A magnitude 5.2 earthquake jolted parts of Northern Luzon on Friday afternoon.
        </p>

        {/* Date Posted */}
        <p className="text-gray-400 text-xs mb-4">
          Date Posted: Nov 7, 2025
        </p>

        {/* Read More Button */}
        <div className="flex justify-end">
          <a
            href="https://www.pna.gov.ph/articles/1261241"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Read More
            <img src={readmore} alt="Read More" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}