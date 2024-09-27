import type { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer.ts";

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentajeFormProps = {
    dispatch: Dispatch<OrderActions>,
    tip: number,
}

export function TipPercentajeForm({ dispatch, tip }: TipPercentajeFormProps) {
    return (
        <>
            <h3 className="font-black text-2xl">Propina</h3>
            <form>
                { tipOptions.map(tipOption => (
                    <div className="flex gap-2" key={tipOption.id}>
                        <label htmlFor="{tipOption.id}">{tipOption.label}</label>
                        <input id={tipOption.id} type="radio" name="tipOption" value={tipOption.value} onChange={(e) => dispatch({ type : 'add-tip', payload : { value : +e.target.value }})} checked={tipOption.value === tip}/>
                    </div>
                ))}
                <div></div>
            </form>
        </>
    );
}