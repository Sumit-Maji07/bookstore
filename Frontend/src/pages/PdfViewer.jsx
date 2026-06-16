import React from "react";
import { useParams } from "react-router-dom";
import list from "../../public/list.json";

function PdfViewer() {
  const { id } = useParams();

  const book = list.find(
    (item) => item.id === Number(id)
  );

  if (!book) {
    return <h1>Book Not Found</h1>;
  }

  return (
    <div className="w-full h-screen">
      <iframe
        src={book.pdf}
        title={book.name}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default PdfViewer;