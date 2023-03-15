export default function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-[#3333332f]">
      <div className="w-20 h-20 flex justify-center items-center rounded-full animate-spin bg-primary-500 opacity-75">
        <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="fill-current opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 7.962 0 016 12H2c0 3.042 1.135 5.824 3 7.938l-.707.707A9.917 9.917 0 010 12H0c0 5.522 4.477 10 10 10v-4c-3.314 0-6-2.686-6-6z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
