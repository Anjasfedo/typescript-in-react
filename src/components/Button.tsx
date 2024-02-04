import React from "react";

// let url = "https://www.google.com";

// url = 5;

// console.log(url);

function convertCurrency(amount: number, currency: string): number {
  console.log(currency);
  return amount;
}

console.log(convertCurrency(100, "USD"));

export default function Button() {
  return (
    <button
      className="bg-blue-600 text-white rounded-md py-2 px-1"
      type="button"
    >
      Button
    </button>
  );
}
