import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { categories } from "../data/categories.ts";
import type { Activity } from "../types";
import { ActivityActions } from "../reducers/activity-reducer.ts";

type FormProps = {
    dispatch: Dispatch<ActivityActions>;
}

export function Form({ dispatch } : FormProps) {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    });

    const handleChange = (e:  ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField : boolean = ['category', 'calories'].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        });
    }

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== '' && calories > 0;
    }

    const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({
            type: "save-activity",
            payload: { newActivity: activity }
        });
    }

    return (
        <>
            <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handlerSubmit}>
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="category" className="font-bold">Categoría:</label>
                    <select name="" id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white" value={activity.category} onChange={ handleChange } >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="name" className="font-bold">Actividad:</label>
                    <input type="text" id="name" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de Naranjam Ensalada, Ejercicio, Pesas, Bicicletas" value={activity.name} onChange={ handleChange } />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="calories" className="font-bold">Calorias:</label>
                    <input type="number" id="calories" className="border border-slate-300 p-2 rounded-lg" placeholder="Calorias Ej. 300 o 500" value={activity.calories} onChange={ handleChange } />
                </div>

                <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10" value={ activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio' } disabled={!isValidActivity()} />
            </form>
        </>
    );
}
