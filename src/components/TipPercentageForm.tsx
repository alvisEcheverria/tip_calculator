import type { Dispatch, SetStateAction } from "react";

type TipPecentageFormProp = {
    tip: number;
    setTip: Dispatch<SetStateAction<number>>;
};

export const TipPercentageForm = ({ tip, setTip } : TipPecentageFormProp) => {

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
    ];

    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                {
                    tipOptions.map(tipOption =>(
                        <div key={tipOption.id}
                            className="flex gap-2">
                            <label htmlFor={tipOption.id}>{tipOption.label} </label>
                            <input 
                                type="radio" 
                                id={tipOption.id}
                                name="tipOption"
                                value={tipOption.value}
                                onChange={e => setTip(Number(e.target.value))}
                                checked={tipOption.value === tip}
                            />
                        </div>
                    ))
                }
            </form>
        </div>
    )
};
