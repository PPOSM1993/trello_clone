import { createClient } from "@/lib/supabase/client";
import { Board, Column, Task } from "./supabase/models";
import { SupabaseClient } from "@supabase/supabase-js";


const supabase = createClient();

export const boardServices = {

    async getBoard(supabase: SupabaseClient, boardId: string): Promise<Board> {
        const { data, error } = await supabase
            .from("boards")
            .select("*")
            .eq("id", boardId)
            .single();

        if (error) throw error;

        return data;
    },

    async getBoards(supabase: SupabaseClient, userId: string): Promise<Board[]> {
        const { data, error } = await supabase
            .from("boards")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) throw error;

        return data || [];
    },


    async createBoard(
        supabase: SupabaseClient,
        board: Omit<Board, "id" | "created_at" | "updated_at">
    ): Promise<Board> {
        const { data, error } = await supabase
            .from("boards")
            .insert(board)
            .select()
            .single();

        if (error) throw error;

        return data || [];
    },

};

