import IsPlanningPage from "@/components/IsPlanningPage";
import plans from "../../../json/planning.json";
import IsPlanningHeader from "@/components/IsPlanningHeader";

export default function Isplanning() {
  return (
    <>
      <IsPlanningHeader />
      <IsPlanningPage plans={plans} />
    </>
  );
}
