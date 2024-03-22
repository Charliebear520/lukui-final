import Image from "next/image";

export default function SuggestItem({ art }) {
  <div>
    <Image src={art.image} width={120} height={120} alt="Suggest of art" />
    <h1>{art.name}</h1>
    <h1>world</h1>
  </div>;
}
