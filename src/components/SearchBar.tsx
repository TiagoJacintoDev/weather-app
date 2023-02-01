import { useState } from "react";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { AiOutlineExclamation as ExclamationIcon } from "react-icons/ai";
import { AiOutlineClose as CleanInputIcon } from "react-icons/ai";

interface Props {
  changeCity: (city: string) => void;
  isCityValid: boolean;
}

export const SearchBar = ({ changeCity, isCityValid }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    changeCity(input);
    setInput("");
  };

  return (
    <div className="absolute top-5 right-5 z-10">
      <form className="text-xl" onSubmit={handleSubmit}>
        <button>
          <SearchIcon
            className="absolute left-4 top-1/2 -translate-y-1/2 hover:text-gray-500 hover:cursor-pointer"
            size={23}
          />
        </button>
        <input
          className="py-4 px-14 rounded-md outline-none"
          placeholder="Search for a city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input && (
          <CleanInputIcon
            size={25}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-gray-500 hover:cursor-pointer"
            onClick={(e) => {
              setInput("");
              const inputElement = e.currentTarget
                .previousSibling as HTMLInputElement;
              inputElement.focus();
            }}
          />
        )}
      </form>
      {!isCityValid && (
        <div className="bg-red-500 absolute top-full flex items-center gap-1.5 rounded-md w-full text-white px-4 py-4">
          <ExclamationIcon size={30} />
          <span className="text-lg">Please enter a valid city name...</span>
        </div>
      )}
    </div>
  );
};
