interface CheckProps {
  id: string;
  label?: string;
  [key: string]: unknown;
}
export const Check = ({ id, label, ...rest }: CheckProps) => {
  return (
    <div className="flex gap-2 group">
      <input
        id={id}
        type="checkbox"
        className="relative w-4 h-4 mt-1 transition-colors bg-white border-2 border-blue-500 rounded-sm appearance-none group-hover:border-yellow-600 peer shrink-0 checked:bg-blue-600 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
        {...rest}
      />
      <svg
        className="absolute hidden w-4 h-4 mt-1 text-white transition-colors pointer-events-none peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      {label && (
        <label
          htmlFor={id}
          className="transition-colors group-hover:text-yellow-600"
        >
          {label}
        </label>
      )}
    </div>
  );
};
