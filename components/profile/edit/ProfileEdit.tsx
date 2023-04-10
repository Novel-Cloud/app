import Avatar from "@/components/atoms/Avatar";
import Input from "@/components/atoms/Input";
import useAuthUser from "@/hooks/useAuthUser";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ProfileEdit() {
  const { user: userInfo } = useAuthUser();
  const { register, reset, handleSubmit } = useForm();
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    reset(userInfo);
    setProfileImage(userInfo.picture);
  }, [userInfo, reset]);

  const onValid = () => {};

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Input registerReturn={register("nickname")} />
      <Avatar
        src={profileImage}
        alt=""
        width={200}
        height={200}
        onError={() => setProfileImage("/assets/NoImageGirl.png")}
      />
    </form>
  );
}
