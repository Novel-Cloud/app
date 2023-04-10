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

interface ProfileForm {
  nickname: string;
}

export default function ProfileEdit() {
  const { user: userInfo } = useAuthUser();
  const { register, reset, handleSubmit } = useForm<ProfileForm>();
  const [profileImageSrc, setProfileImageSrc] = useState("");
  const [profileFileList, setProfileFileList] = useState<FileList | File[]>();

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
    httpClient.memberSelf.nickname({ nickname }).then(() => {
      toast("닉네임 변경 성공 ww");
    });
  };

  const handleImageSrc = (fileList: FileList) => {
    if (fileList.length) {
      setProfileImageSrc(URL.createObjectURL(fileList[0]));
      setProfileFileList(fileList);
    }
  };

  const handleChangeProfile = () => {
    if (profileFileList) {
      const profileFormData = new FormData();
      profileFormData.append("profile", profileFileList[0]);
      httpClient.memberSelf
        .image(profileFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          toast("업로드에 성공했습니다.");
        });
    }
  };

  useEffect(() => {
    if (profileFiles.length) {
      setProfileImageSrc(URL.createObjectURL(profileFiles[0]));
      setProfileFileList(profileFiles);
    }
  }, [profileFiles]);

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
        src={profileImageSrc}
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
