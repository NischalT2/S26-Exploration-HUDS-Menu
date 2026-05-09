import HouseIcon from "../components/houseIcons";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function HousesPage() {
  return (
    <div className="bg-white min-h-screen">
        <Navbar />
        <div className="bg-white min-h-screen flex flex-col py-10">
        <h1 className="text-5xl ml-12 font-serif text-black mb-12">
            Harvard Undergraduate Dining
        </h1>

        <div className="grid grid-cols-5  text-black gap-y-12 gap-x-16">
            <Link href="/Adams">  <HouseIcon name="Adams" imageSrc="/Adams.png" /></Link>
            <Link href="/Berg">  <HouseIcon name="Berg" imageSrc="/Berg.png" /></Link>
            <Link href="/Cabot">  <HouseIcon name="Cabot" imageSrc="/Cabot.png" /></Link>
            <Link href="/Currier">  <HouseIcon name="Currier" imageSrc="/Currier.png" /></Link>
            <Link href="/Dunster">  <HouseIcon name="Dunster" imageSrc="/Dunster.png" /></Link>
            <Link href="/Eliot">  <HouseIcon name="Eliot" imageSrc="/Eliot.png" /></Link>
            <Link href="/Kirkland">  <HouseIcon name="Kirkland" imageSrc="/Krickland.png" /></Link>
            <Link href="/Leverett">  <HouseIcon name="Leverett" imageSrc="/Lev.png" /></Link>
            <Link href="/Lowell">  <HouseIcon name="Lowell" imageSrc="/Lowell.png" /></Link>
            <Link href="/Mather">  <HouseIcon name="Mather" imageSrc="/Mather.png" /></Link>
            <Link href="/Pfoho">  <HouseIcon name="Pfoho" imageSrc="/Pfoho.png" /></Link>
            <Link href="/Winthrop">  <HouseIcon name="Winthrop" imageSrc="/Winthrop.png" /></Link>
            <Link href="/Quincy">  <HouseIcon name="Quincy" imageSrc="/Quincy.png" /></Link>
        </div>
        </div>
    </div>
  );
}