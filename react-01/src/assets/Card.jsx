//We can fetch an object like that, we can call the object by name and use it anywhere by its reference.
const Card = ({ object }) => {
  return (
    <div className="h-full w-full bg-gray-400 rounded overflow-hidden cursor-pointer">
      <div className="h-4/5 w-full ">
        <img
          src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          alt=""
          className="h-full"
        />
      </div>
      <div className="h-1/5 w-full flex items-center justify-center">
        {object.name}
      </div>
    </div>
  );
};

export default Card;
