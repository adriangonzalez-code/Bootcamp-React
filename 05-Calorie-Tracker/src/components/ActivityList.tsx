import type { Activity } from "../types";
import  { categories } from "../data/categories";
import { useMemo } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

type ActivityListProps = {
    activities: Activity[];
}

export const ActivityList = ({ activities } : ActivityListProps) => {

    const categoryName = useMemo(() => (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [activities]);

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

            { activities.map(activity => (
                <div key={activity.id} className="bg-white shadow p-5 rounded-lg flex justify-between items-center mt-5">
                    <div className="space-y-3 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>{ categoryName(+activity.category) }</p>
                        <p className="font-bold text-2xl">{activity.name}</p>
                        <p className="font-black text-lime-400">{activity.calories} {''} <span>Calorias</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button>
                            <PencilSquareIcon className="h-8 w-8 text-gray-800" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};
