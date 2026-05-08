type FoodButtonProps = {
  label: string;
};

export default function FoodButton({ label }: FoodButtonProps) {
  return (
    <button type="button" className="rounded-full bg-stone-200 px-6 py-4 font-bold text-slate-800">
      {label}
    </button>
  );
}
