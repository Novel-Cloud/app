export default function useBrowserWidth() {
  return {
    browserWidth: typeof window !== "undefined" ? window.innerWidth : 0,
  };
}
