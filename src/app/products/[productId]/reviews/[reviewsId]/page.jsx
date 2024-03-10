import { notFound } from "next/navigation";

export default function ReviewDetail({ params }) {
  if(parseInt(params.reviewsId)>1000){
    notFound();
  }
  return (
    <h1>
      Review {params.reviewsId} for product {params.productId}
    </h1>
  );
}
