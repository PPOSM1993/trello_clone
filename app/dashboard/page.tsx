"use client";
import Navbar from "@/components/navbar";
import { useUser } from "@clerk/nextjs";
import { userAgent } from "next/server";

export default function DashboardPage() {

    const { user } = useUser();

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />

                <main className="container mx-auto px-4 py-6 sm:py-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Welcome back, {user?.firstName ?? user?.emailAddresses[0].emailAddress}!
                    </h1>
                    <p className="text-gray-600 py-2">Here's what's happening  with your boards today</p>
                </main>
            </div>
        </>
    )
}