import type { FC } from "react";

interface AssetProps {
  name: string;
  thumbnail: string;
  status: string;
  size?: string;
}

const AssetCard: FC<AssetProps> = ({ name, thumbnail, status, size }) => {
  return (
    <div className="bg-white shadow rounded-xl p-3 flex flex-col gap-2">
      
      <img
        src={thumbnail}
        alt={name}
        className="h-32 w-full object-cover rounded-lg"
      />

      <h3 className="font-medium">{name}</h3>

      <div className="flex items-center justify-between">
        {size && (
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
            {size}
          </span>
        )}

        <span
          className={`text-xs px-2 py-1 rounded ${
            status === "Ready"
              ? "bg-green-100 text-green-700"
              : status === "Error"
              ? "bg-red-100 text-red-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {status}
        </span>
      </div>

    </div>
  );
};

export default AssetCard;
