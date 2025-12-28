import { TbDownload } from "react-icons/tb";

export default function Resume() {
  return (
    <div className="min-h-[84vh] bg-[#0f172a] font-sans text-white flex flex-col items-center justify-start">
      <div className="mt-32">
        <h2 className="text-3xl text-center mb-5">Resume</h2>
        <div className="bg-gray-700 w-5xl rounded-lg py-10 flex flex-col items-center gap-2">
          <h3 className="text-lg">Resume Unavailable</h3>
          <p className="text-base pb-3">The resume PDF could not be loaded.</p>
          <p className="text-sm">
            Please ensure the PDF file exists at the specified path.
          </p>

          <button className="px-5 py-2.5 mt-3 cursor-pointer text-sm border border-[#f97316] rounded-full font-medium text-[#f97316] hover:bg-[#f97316] hover:text-[#0f172a] transition-colors">
            Contact Me
          </button>
          <button className="px-5 flex items-center gap-1 py-2.5 mt-12 cursor-pointer text-sm border border-[#f97316] rounded-full font-medium text-[#f97316] hover:bg-[#f97316] hover:text-[#0f172a] transition-colors">
            <TbDownload className="text-lg" /> Download Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
