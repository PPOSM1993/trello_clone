"use client";
import Navbar from "@/components/navbar";
import { useBoards } from "@/lib/hooks/useBoards";
import { useParams } from "next/navigation";


export default function BoardPage() {

    //const { id } = useParams<{ id: string }>();
    const params = useParams();
    const id = params.id;

    const { board } = useBoards(id);

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar  />
            </div>
        </>
    )
}