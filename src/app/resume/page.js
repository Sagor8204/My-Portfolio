import { TbDownload } from "react-icons/tb";

export default function Resume() {
  return (
    <div className="min-h-[84vh] bg-[#0f172a] text-white flex flex-col items-center pb-7">
      <div className="mt-28 w-full flex flex-col items-center">
        <h2 className="text-3xl mb-6">Resume</h2>

        {/* PDF Preview */}
        <div className="w-full max-w-3xl h-[65vh]">
          <iframe
            src="https://drive.google.com/file/d/1qK_y0k3whP4TxRAoMAOZx4fhGD8bmjKW/preview"
            className="border-none"
            width="100%"
            height="100%"
            title="Resume PDF"
            allow="autoplay"
          />
        </div>

        {/* Download Button */}
        <a
          href="https://drive.google.com/uc?export=download&id=1iklBbZyayvFhskgHZ0dL83UZyFHkTnZO"
          className="mt-8 flex items-center gap-2 px-8 py-3 bg-linear-to-r from-(--primary) to-(--primary-hover) rounded-md font-medium text-white hover:from-(--primary-hover) hover:to-(--primary) transition-all duration-500"
        >
          <TbDownload className="text-lg" />
          Download Resume
        </a>
      </div>
    </div>
  );
}
