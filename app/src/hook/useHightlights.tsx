import useStorageState, { createMemoryStorage } from "react-use-storage-state";
import { ListItem } from "../page/explore/main";

export function HighlightsItems() {
    const [highlightsItems, setHighlightsItems] = useStorageState("", false);


    const [isActive, setIsActive] = useStorageState<any>("blur", false);
  
    return {
      isActive,
      setIsActive,
    };
}