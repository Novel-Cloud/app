import httpClient from "@/apis";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import KEY from "@/key";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface ShortCutForm {
  content: string;
}

export default function CreateShortCut() {
  const { register, handleSubmit, reset } = useForm<ShortCutForm>();
  const queryClient = useQueryClient();
  const onValid: SubmitHandler<ShortCutForm> = ({ content }) => {
    httpClient.shortcut.post({ content }).then(() => {
      toast("추가가 완료되었습니다.");
      queryClient.invalidateQueries([KEY.SHORTCUTLIST]);
      reset();
    });
  };

  const onInValid: SubmitErrorHandler<ShortCutForm> = ({ content }) => {
    toast(content?.message || "빈 문자열일 수 없습니다.");
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <Input
        registerReturn={register("content", {
          required: "빈 문자열일 수 없습니다.",
        })}
      />
      <Button type="submit">추가요</Button>
    </form>
  );
}
