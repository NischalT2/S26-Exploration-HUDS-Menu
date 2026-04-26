import HouseIcon from "../components/houseIcons";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col py-10">
      <h1 className="text-5xl ml-12 font-serif text-black mb-12">
        Harvard Undergraduate Dining
      </h1>

      <div className="grid grid-cols-5  text-black gap-y-12 gap-x-16">
        <HouseIcon name="Adams" imageSrc="/Adams.png" />
        <HouseIcon name="Berg" imageSrc="/Berg.png" />
        <HouseIcon name="Cabot" imageSrc="/Cabot.png" />
        <HouseIcon name="Currier" imageSrc="/Currier.png" />
        <HouseIcon name="Dunster" imageSrc="/Dunster.png" />
        <HouseIcon name="Eliot" imageSrc="/Eliot.png" />
        <HouseIcon name="Krickland" imageSrc="/Krickland.png" />
        <HouseIcon name="Leverett" imageSrc="/Lev.png" />
        <HouseIcon name="Lowell" imageSrc="/Lowell.png" />
        <HouseIcon name="Mather" imageSrc="/Mather.png" />
        <HouseIcon name="Pfoho" imageSrc="/Pfoho.png" />
        <HouseIcon name="Winthrop" imageSrc="/Winthrop.png" />
        <HouseIcon name="Quincy" imageSrc="/Quincy.png" />
      </div>
    </div>
  );
}