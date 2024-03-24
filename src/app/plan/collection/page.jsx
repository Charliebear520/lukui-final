import IsPlanningCollection from "@/components/IsPlanningCollection";
import collections from "../../../json/mycollection.json";
import CollectionHeader from "@/components/CollectionHeader";


export default function Collection(){
    return(
        <>
        <CollectionHeader/>
        <IsPlanningCollection collections={collections}/>
        </>
    )
}