import { useParams } from "wouter";

export const Detail = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Detail</h2>
    </>
  );
};
