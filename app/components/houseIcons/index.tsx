import Image from "next/image";

type HouseIconProps = {
  name: string;
  imageSrc: string;
};

export default function HouseIcon({ name, imageSrc }: HouseIconProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={imageSrc}
        alt={name}
        width={96}
        height={112}
        className="object-contain"
      />

      <p className="mt-4 text-xl underline">{name}</p>
    </div>
  );
}