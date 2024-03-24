import IsPlanningHistory from "@/components/IsPlanningHistory";
import historys from "../../../json/history.json"
import HistoryHeader from "@/components/HistoryHeader";

export default function History(){
    return(
        <>
        <HistoryHeader/>
        <IsPlanningHistory historys={historys}/>
        </>
    )
}