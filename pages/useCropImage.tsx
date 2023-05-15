import { useState, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import Image from "next/image";
import "cropperjs/dist/cropper.css";
import useDebounce from "@/hooks/useDebounce";

function Example() {
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

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            setInputImage(URL.createObjectURL(e.target.files[0] as Blob));
          }
        }}
      />
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

export default Example;
