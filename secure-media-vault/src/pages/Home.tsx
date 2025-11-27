import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AssetCard from "../components/AssetCard";
import API from "../api/api";
import UploadIcon from "../assets/upload.png";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("assets");
  const [assets, setAssets] = useState([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // File choose click
  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  // Handle Upload
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await API.post("/assets/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // UI me add karo
    const newAsset = {
      name: res.data.name,
      thumbnail: "http://localhost:8000/" + res.data.path,
      status: "Ready",
      size: `${(res.data.size / 1024).toFixed(1)} KB`,
    };

    setAssets((prev) => [...prev, newAsset]);
    setActiveMenu("assets"); // Auto redirect to Assets section
  };

  // Fetch My Assets
  useEffect(() => {
    if (activeMenu === "assets") {
      API.get("/assets/my-assets").then((res) => {
        const formatted = res.data.map((a: any) => ({
          name: a.name,
          thumbnail: "http://localhost:8000/" + a.path,
          status: "Ready",
          size: `${(a.size / 1024).toFixed(1)} KB`,
        }));
        setAssets(formatted);
      });
    }
  }, [activeMenu]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex p-5">
        <Sidebar onSelect={(menu) => setActiveMenu(menu)} />

        <div className="w-full p-6">
          {/* ---------- UPLOAD VIEW ---------- */}
          {activeMenu === "upload" && (
            <div className="flex flex-col items-center mt-10">
              <img
                src={UploadIcon}
                alt="Upload"
                className="h-48 cursor-pointer opacity-80 hover:opacity-100 transition"
                onClick={openFileDialog}
              />

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
              />

              <p className="mt-4 text-gray-600 text-lg">
                Click the icon to upload a file
              </p>
            </div>
          )}

          {/* ---------- MY ASSETS VIEW ---------- */}
          {activeMenu === "assets" && (
            <>
              <h2 className="text-2xl font-semibold mb-6">My Assets</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assets.map((asset, index) => (
                  <AssetCard key={index} {...asset} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
