import { useRouter } from "next/router";

function SelectClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>selected client projects</h1>
    </div>
  );
}

export default SelectClientProjectPage;
