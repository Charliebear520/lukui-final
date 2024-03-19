"use client"

import RankDetailList from "../../components/RankDetailList"
// import { useParams } from "next/navigation"
import RankHeader from "@/components/RankHeader"
import ranks from "../../json/rank.json"

export default function RankPage(){
     return(
        <>
        <RankHeader/>
        <RankDetailList ranks={ranks}/>
        </>
        
    )
}