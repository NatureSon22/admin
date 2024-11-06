import PanelLayout from "../layouts/PanelLayout";
import UploadContainer from "./UploadContainer";
import CampusDocuments from "./CampusDocuments";

const CreateDocuments = () => {

  // mode
  // use mutation
  return (
    <PanelLayout>
      <div className="space-y-8">
        <div>
          <div>
            <p className="font-semibold text-[1.2rem] text-base-300">
              Create Documents
            </p>
            <p className="text-[0.85rem] text-secondary-100">
              Create a new document by writing, uploading an existing document
              or importing a webpage.
            </p>
          </div>
        </div>
        <UploadContainer />
      </div>

      <div>
        <CampusDocuments />
      </div>
    </PanelLayout>
  );
};

export default CreateDocuments;
