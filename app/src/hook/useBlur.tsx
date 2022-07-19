import useStorageState, { createMemoryStorage } from "react-use-storage-state";

export function BlurMenu() {
  const [isActive, setIsActive] = useStorageState<any>("blur", false);

  return {
    isActive,
    setIsActive,
  };
}