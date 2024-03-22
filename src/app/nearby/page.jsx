import NearbyList from "@/components/NearbyList";
import nearbys from "../../json/nearbys.json"
import NearbyHeader from "@/components/NearbyHeader";

export default function Nearby(){
    return(
        <>
        <NearbyHeader/>
        <NearbyList nearbys={nearbys}/>
        </>
    )
}