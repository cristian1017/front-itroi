"use client";
import { BtnCreate } from "@/components/BtnCreate";
import { Header } from "@/components/Header";
import { TableInfo } from "@/components/TableInfo";
import { useFetchUserQuery } from "@/services/user.service";

export default function Home() {
  const { data, isLoading } = useFetchUserQuery();
  return (
    <div>
      <Header />
      <BtnCreate />
      <TableInfo data={data} />
    </div>
  );
}
