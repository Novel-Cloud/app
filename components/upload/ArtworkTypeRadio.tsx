import { ArtworkForm } from "@/types/artwork.interface";
import { UseFormRegister } from "react-hook-form";
import Radio from "../atoms/Radio";

export default function ArtworkTypeRadio({
  register,
}: {
  register: UseFormRegister<ArtworkForm>;
}) {
  return (
    <>
      <Radio
        id="novel"
        label="Novel"
        registerReturn={register("artworkType")}
        description="Light Novel, Fanfiction, Delusion or Everythings"
      />
      <Radio
        id="artwork"
        label="Artwork"
        registerReturn={register("artworkType")}
        description="A picture you drew [not ai picture]"
      />
    </>
  );
}
