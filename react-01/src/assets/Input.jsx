import { useId } from "react";

const Input = ({
  label,
  // Amount entered by the user
  amount,
  // Handler for when amount changes
  onAmountChange,
  // Handler for when currency changes
  onCurrencyChange,
  // List of all available currencies
  currencyOptions = [],
  // Currently selected currency
  selectCurrency = "usd",
  // Disable the amount input field
  amountDisable = false,
  // Disable the currency dropdown
  currencyDisable = false,
  // Custom CSS classes (optional)
  className = "",
}) => {
  // React hook to generate a unique id (useful for accessibility)
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Amount input field */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency selector */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
