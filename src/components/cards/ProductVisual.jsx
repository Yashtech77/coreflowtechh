import { useState } from "react";
import { Server } from "lucide-react";

export default function ProductVisual({ seed = "product", image, alt = "", manufacturer = false }) {
  const [failedImage, setFailedImage] = useState(null);
  const available = image && failedImage !== image;
  return <div className={`product-visual ${manufacturer ? "product-visual-manufacturer" : ""}`}>
    {available ? <img src={image} alt={alt} loading="lazy" decoding="async" onError={() => setFailedImage(image)}/> : <div className="product-visual-placeholder"><Server size={56} strokeWidth={1}/><span>{manufacturer ? "Configuration overview" : "Infrastructure solution"}</span></div>}
  </div>;
}
