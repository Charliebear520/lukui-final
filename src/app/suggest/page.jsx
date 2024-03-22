import SuggestList from "@/components/SuggestList";
import arts from "../../json/art.json";

export default function Suggest() {
  return (
    <>
      <SuggestList arts={arts} />
    </>
  );
}
