import { user } from "@/data/user"
import { RecomendationItem, RecomendationItemSkeleton } from "./recomendation-item"



export const RecomendationArea = () => {
    return(
        <div className="bg-gray-700 rounded-3xl shadow-lg overflow-hidden mt-6"> 
            <h2 className="text-xl font-semibold text-white p-6 border-b border-gray-600">Quem seguir</h2>
            <div className="flex flex-col gap-4 p-6 bg-gray-800">
              <RecomendationItem user={user}/>
              <RecomendationItemSkeleton/>
            </div>
        </div>
    )
}
