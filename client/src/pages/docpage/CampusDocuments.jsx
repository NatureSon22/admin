import { listDocuments } from "@/service/rag";
import useFolderStore from "@/state/folder";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import TableDocument from "@/components/TableDocument";
import formatDate from "@/lib/dateFormat";

const CampusDocuments = () => {
  const folder = useFolderStore((state) => state.folder);
  const { data: dataDocs } = useQuery({
    queryKey: ["docs", folder.id],
    queryFn: () => listDocuments(folder.id),
  });
  const documents = dataDocs?.map((doc) => ({
    ...doc,
    created_at: formatDate(new Date(doc.created_at * 1000)),
    updated_at: formatDate(new Date(doc.created_at * 1000)),
  }));

  return (
    <div className="space-y-8">
      <div>
        <p className=" font-semibold text-[1.2rem] text-base-300">
          Recently Added
        </p>
        <p className="text-[0.85rem] text-secondary-100">
          This section lists the most recent documents uploaded to the system.
          You can review, edit, or manage these files to ensure they are
          properly prepared for use.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-5">
          <div className="flex border rounded-lg flex-1">
            <Input
              placeholder="Search"
              className="px-3 py-2 bg-white border-none rounded-l-lg focus-visible:ring-[none]"
            />

            <Button variant="outline" className="border-none">
              <Search />
            </Button>
          </div>

          <Button variant="outline">Show All Documents</Button>
        </div>
      </div>

      <TableDocument data={documents} />
    </div>
  );
};

export default CampusDocuments;
