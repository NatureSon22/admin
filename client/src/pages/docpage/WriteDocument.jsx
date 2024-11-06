import { Input } from "@/components/ui/input";
import PanelLayout from "../layouts/PanelLayout";
import TipTapEditor from "@/components/TipTapEditor";

const WriteDocument = () => {
  return (
    <PanelLayout>
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="text">
            <p className="font-medium">Title</p>
            <p className="text-[0.9rem] font-light">
              Enter a clear, descriptive title for the document. This will help
              in organizing and retrieving documents.
            </p>
          </div>
          <Input placeholder="Enter the title of the document" />
        </div>
        <div>
          <TipTapEditor />
        </div>
        <div></div>
      </div>
    </PanelLayout>
  );
};

export default WriteDocument;
