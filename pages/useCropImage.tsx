import { useState, useRef, ChangeEvent } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";

export default function useCrop() {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [inputImage, setInputImage] = useState<string>("");
  const [croppedImage, setCroppedImage] = useState<string>("");

  const debouncedCroppedImage = useDebounce({
    value: croppedImage,
    delay: 300,
  });

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImage(cropper?.getCroppedCanvas().toDataURL() || "");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setInputImage(URL.createObjectURL(e.target.files[0] as Blob));
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onChange} />
      <Cropper src={inputImage} crop={onCrop} ref={cropperRef} />
      {debouncedCroppedImage && (
        <Image
          src={debouncedCroppedImage}
          alt="자른 이미지"
          width={400}
          height={400}
        />
      )}
    </div>
  );
}
