import { useState } from "react";
import { Server } from "lucide-react";

export default function ProductVisual({ seed = "product", image, alt = "", manufacturer = false, compact = false }) {
  const [failedImage, setFailedImage] = useState(null);
  const available = image && failedImage !== image;
  return <div className={`w-full overflow-hidden bg-[color-mix(in_srgb,var(--primary)_4%,white)] ${compact ? "h-[105px] max-[480px]:h-[85px]" : "h-[210px]"}`}>
    {available ? <img className="h-full w-full object-cover" src={image} alt={alt} loading="lazy" decoding="async" onError={() => setFailedImage(image)}/> : <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-secondary"><Server size={56} strokeWidth={1}/><span className="text-[10px] tracking-[.04em]">{manufacturer ? "Configuration overview" : "Infrastructure solution"}</span></div>}
  </div>;
}
