import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //load data
    //router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>The porject given client</h1>
      <button onClick={loadProjectHandler}>Load project a</button>
    </div>
  );
}

export default ClientProjectsPage;
