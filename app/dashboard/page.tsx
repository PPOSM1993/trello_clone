"use client";
import Navbar from "@/components/navbar";
import { useUser } from "@clerk/nextjs";
import { userAgent } from "next/server";
import {Button} from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {

    const { user } = useUser();
    const {  createBoard } = useBoards();

    const handleCreateBoard = async () => {
        await createBoard()
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />

                <main className="container mx-auto px-4 py-6 sm:py-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Welcome back, {user?.firstName ?? user?.emailAddresses[0].emailAddress}!
                    </h1>
                    <p className="text-gray-600 py-2">Here's what's happening  with your boards today</p>
                    <Button className="w-full sm:w-auto" onClick={handleCreateBoard}>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Board
                    </Button>
                </main>
            </div>
        </>
    )
}