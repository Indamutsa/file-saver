import React from "react";
import { Container } from "react-bootstrap";
import AddFolderButton from "../components/AddFolderButton";
import { useFolder } from "../components/hooks/UseFolder";
import Navbar from "../components/Navbar";
import Folder from "../components/Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "../components/FolderBreadcrumbs";
import AddFileButton from "../components/AddFileButton";
import File from "../components/File";

export default function Dashboard() {
  const { folderId } = useParams();
  // This state  will keep current location.
  // We passing in the array of current path, but sliced to make
  // navigation easier and quick
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );
  console.log(childFolders);
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>

        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}

        {childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
