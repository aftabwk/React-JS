import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData(); //useLoaderData hook helps to get loaded data from loader which is defined in navLink
  return (
    <div className="h-1/2 w-full flex flex-col items-center text-4xl font-bold p-5 gap-5">
      Git-Hub Followers: {data.followers}
      <img src={data.avatar_url} alt="" width="500px" />
    </div>
  );
};

export default Github;
