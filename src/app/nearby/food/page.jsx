import NearbyFoodList from "@/components/NearbyFoodList"
import NearbyFoodHeader from "@/components/NearbyFoodHeader"
import nearbyfoods from "../../../json/nearbyfood.json"

export default function NearbyFood(){
    return(
        <>
        <NearbyFoodHeader/>
        <NearbyFoodList nearbyfoods={nearbyfoods}/>
        </>
    )
}