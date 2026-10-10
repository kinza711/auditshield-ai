import UploadHeader from "../../components/upload-scan/UploadHeader";
import UploadWorkspace from "../../components/upload-scan/UploadWorkspace";

export default function UploadScanPage() {
  return (
    <div className="relative w-full max-w-5xl mx-auto space-y-space-xl">
      {/* Ambient atmospheric glows */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-80 h-80 bg-secondary-fixed/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <UploadHeader />
      <UploadWorkspace />
    </div>
  );
}
