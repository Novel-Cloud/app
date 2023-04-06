import httpClient from "@/apis";
import KEY from "@/key";
import { ShortCut } from "@/types/editor.interface";
import { useQuery } from "@tanstack/react-query";

export const useShortCutList = () => {
  const { data, isError } = useQuery<{ list: ShortCut[] }>(
    [KEY.SHORTCUTLIST],
    () => httpClient.shortcut.get().then((r) => r.data),
  );
  return { data: data?.list || [], isError };
};
