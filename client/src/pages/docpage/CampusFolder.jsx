import { useNavigate } from "react-router-dom";
import logo from "../../assets/urslogo.png";
import useFolderStore from "@/state/folder";

const CampusFolder = ({ folder }) => {
  const navigate = useNavigate();
  const setFolder = useFolderStore((state) => state.setFolder);

  const handleClick = () => {
    setFolder(folder);
    navigate(`/create-documents/${folder.name}`);
  };

  return (
    <div
      className="flex-1 flex items-center border border-secondary-100/20 gap-5 py-5 px-7 rounded-xl cursor-pointer select-none"
      onClick={handleClick}
    >
      <img className="w-[2.5em]" src={logo} />
      <div className="text-base-300">
        <p className="font-semibold">University of Rizal System</p>
        <p className="text-[0.9rem]">{folder.name}</p>
      </div>
    </div>
  );
};

// filename published by date and time created contributor date last time modified status
// id name status content folder created

export default CampusFolder;
