import FileUploader from "@/components/atoms/FileUploader";
import Input from "@/components/atoms/Input";
import useAuthUser from "@/hooks/useAuthUser";
import useFileDrop from "@/hooks/useFileDrop";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormData from "form-data";
import httpClient from "@/apis";
import { toast } from "react-toastify";
import Button from "@/components/atoms/Button";
import styled from "styled-components";
import useModal from "@/hooks/useModal";
import CropModal from "../CropModal";

interface ProfileForm {
  nickname: string;
}

export default function ProfileEdit() {
  const { openModal } = useModal();
  const { user: userInfo } = useAuthUser({ authorizedPage: true });
  const { register, reset, handleSubmit } = useForm<ProfileForm>();
  const [profileImageSrc, setProfileImageSrc] = useState("");
  const [croppedProfileImageSrc, setCroppedProfileImageSrc] = useState("");
  const [profileFileList, setProfileFileList] = useState<FileList | File[]>([]);

  const {
    files: profileFiles,
    inputRef: profileInputRef,
    labelRef: profileLabelRef,
    isDragActive: profileIsDragActive,
  } = useFileDrop({
    accept: "image/*",
    isSingleFile: true,
  });

  const onValid: SubmitHandler<ProfileForm> = ({ nickname }) => {
    httpClient.memberSelf
      .nickname({ nickname })
      .then(() => {
        toast.success("닉네임 변경 성공 ww");
      })
      .catch((e) => toast.error(e.response.data.message));
  };

  const handleImageSrc = (fileList: FileList) => {
    if (fileList.length) {
      setProfileImageSrc(URL.createObjectURL(fileList[0]));
      setProfileFileList(fileList);
    }
  };

  function base64ToBlob(base64String: string, contentType?: string) {
    const binaryString = window.atob(base64String);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i += 1) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return new Blob([bytes], { type: contentType || "image/jpeg" });
  }

  const handleChangeProfile = () => {
    if (profileFileList) {
      const profileFormData = new FormData();
      console.log(
        "croppedProfileImageSrccroppedProfileImageSrccroppedProfileImageSrccroppedProfileImageSrc",
        croppedProfileImageSrc,
      );

      console.error(base64ToBlob(croppedProfileImageSrc));
      profileFormData.append("profile", base64ToBlob(croppedProfileImageSrc));
      httpClient.memberSelf
        .image(profileFormData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => toast.success("업로드에 성공했습니다."))
        .catch((e) => toast.error(e.response.data.message));
    }
  };

  useEffect(() => {
    if (profileFiles.length || profileFileList.length) {
      setProfileFileList(profileFiles.length ? profileFiles : profileFileList);
      setProfileImageSrc(
        URL.createObjectURL(
          profileFiles.length ? profileFiles[0] : profileFileList[0],
        ),
      );
      openModal({
        title: "프로필 자르기",
        content: (
          <CropModal
            profileImageSrc={profileImageSrc}
            setCroppedProfileImageSrc={setCroppedProfileImageSrc}
          />
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileFiles, profileFileList, openModal]);

  useEffect(() => {
    reset(userInfo);
    setProfileImageSrc(userInfo.picture);
  }, [userInfo, reset]);

  return (
    <ProfileEditWrapper onSubmit={handleSubmit(onValid)}>
      <Input registerReturn={register("nickname")} />
      <Button type="submit">닉네임 변경</Button>
      <FileUploader
        onChange={(event) => {
          handleImageSrc((event.target.files || []) as FileList);
          setProfileFileList((event.target.files || []) as FileList);
        }}
        src={croppedProfileImageSrc || profileImageSrc}
        inputRef={profileInputRef}
        labelRef={profileLabelRef}
        isDragActive={profileIsDragActive}
        style={{
          borderRadius: "9999px",
          width: "200px",
          height: "200px",
          overflow: "hidden",
          marginTop: "12px",
        }}
      />
      <Button onClick={handleChangeProfile}>프로필 변경</Button>
    </ProfileEditWrapper>
  );
}

const ProfileEditWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 1rem;
`;
