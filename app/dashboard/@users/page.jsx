import Link from "next/link";

export default async function Userspage() {
  const response = await fetch("https://fakestoreapi.com/users");
  const users = await response.json();

  return (
    <div className="bg-indigo-300 mr-12  w-[700px] p-12">
      <div className="">
        {users.map((us) => (
          <div
            className="" key={us.id}>
            <Link href={`/${us.id}`}>
              <p className="text-2xl mt-8 ml-72 font-bold text-white">{us.name.firstname}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
