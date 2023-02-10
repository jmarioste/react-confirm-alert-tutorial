import type { NextPage } from "next";
import { useConfirmAlert } from "../components/alert/AlertProvider";

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const Home: NextPage = () => {
  const { showAlert } = useConfirmAlert();
  const handleClick = () => {
    showAlert({
      title: "Confirm Deletion",
      confirmMessage: "Are you sure you want to delete this ?",
      async onConfirm() {
        //simulates asynchronous API calls
        await sleep(1000);
        console.log("Stuff has been deleted");
      },
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">NextJS + TailwindCSS Starter </h1>
      <button onClick={handleClick}>Show alert</button>
    </div>
  );
};

export default Home;
