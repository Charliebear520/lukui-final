"use client"

import RankDetailList from "../../components/RankDetailList"
// import { useParams } from "next/navigation"
import ranks from "../../json/rank.json"

export default function RankPage(){
     return(
        <RankDetailList ranks={ranks}/>
    )
}