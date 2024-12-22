"use client"

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
    user: User;
}

export const RecomendationItem = ({ user }: Props) => {
    const [following, setFollowing] = useState(false);


   const handleFollowButton = () => {
        setFollowing(true);
    }

    return (
        <div className="flex items-center">
            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <img src={user.avatar} alt={user.name} className="size-full" />
                </Link>
            </div>

            <div className="flex-1 overflow-hidden">
                <Link href={`/${user.slug}`} className="block truncate">{user.name}</Link>
                <div className="truncate text-gray-400">@{user.slug}</div>
            </div>
            <div className="pl-2 w-20">
                {!following &&
                <Button
                label="Seguir"
                onClick={handleFollowButton}
                size={3}
                />
                }
                
            </div>
            
        </div>
    );
};

export const RecomendationItemSkeleton = () => {
    return (
        <div className="animate-pulse flex items-center space-x-4 p-4 bg-gray-700 rounded-3xl shadow-md">
           
            <div className="bg-gray-600 w-14 h-14 rounded-full"></div>

          
            <div className="flex-1 flex flex-col gap-2">
                <div className="bg-gray-600 w-3/4 h-4 rounded-md"></div>
                <div className="bg-gray-600 w-1/4 h-4 rounded-md"></div>
            </div>
        </div>
    );
};
