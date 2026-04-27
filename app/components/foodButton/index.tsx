type FoodButtonProps = {
  label: string;
};

export default function FoodButton({ label }: FoodButtonProps) {
  return (
    <button className="bg-stone-200 rounded-full px-6 py-4 font-bold text-slate-800">
      {label}
    </button>
  );
}