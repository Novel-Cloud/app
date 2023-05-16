import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

interface CropModalProps {
  profileImageSrc: string;
  setCroppedProfileImageSrc: Dispatch<SetStateAction<string>>;
}

export default function CropModal({
  profileImageSrc,
  setCroppedProfileImageSrc,
}: CropModalProps) {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [croppedImage, setCroppedImage] = useState<string>("");

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setCroppedImage(cropper?.getCroppedCanvas().toDataURL() || "");
  };

  useEffect(() => {
    setCroppedProfileImageSrc(croppedImage);
  }, [croppedImage, setCroppedProfileImageSrc]);

  return <Cropper src={profileImageSrc} crop={onCrop} ref={cropperRef} />;
}
