import SuggestList from "@/components/SuggestList";
import arts from "../../json/art.json";
import seasides from "../../json/seaside.json";
import hikings from "../../json/hiking.json";
import HikingList from "@/components/HikingList";
import SeasideList from "@/components/SeasideList";
import SuggestHeader from "@/components/SuggestHeader";

export default function Suggest() {
  return (
    <>
      <SuggestHeader />
      <SuggestList arts={arts} />
      <HikingList hikings={hikings} />
      <SeasideList seasides={seasides} />
    </>
  );
}
