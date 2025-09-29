function App() {
  return (
    <>
      <ul className="h-10 flex items-center justify-around w-full bg-cyan-600 ">
        <li>This is My first React website</li>
        <li>
          <ul className="flex gap-5 text-white">
            <li className="cursor-pointer">Counter</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Password</li>
            <li className="cursor-pointer">Currency</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default App;
