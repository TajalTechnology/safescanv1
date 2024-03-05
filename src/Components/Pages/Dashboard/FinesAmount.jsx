import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../Shared/SectionWrapper';
import TimePickerButton from '../../Shared/TimePickerButton';
import SectionHeading from '../../Shared/SectionHeading';
import FinesAmountChart from './FinesAmountChart';

const FinesAmount = ({counters}) => {
    const [selected, setSelected] = useState('This Month');
    const dataDay = ["This Week", "This Month"];

    const counter=counters?.Items[0]

    console.log("====count====",counter)
    
    const monthlyData = [
        { type: "Due", value: counter?.fines_due ? counter?.fines_due : 1060, amount:counter?.fines_due ? counter?.fines_due : 1060 },
        { type: "Collected ", value: counter?.outstanding_fines ? counter?.outstanding_fines : 360, amount:counter?.outstanding_fines ? counter?.outstanding_fines : 360 },
    ]
    const weeklyData = [

        { type: "Due", value: counter?.fines_due ? counter?.fines_due : 1060, amount:counter?.fines_due ? counter?.fines_due : 1060 },
        { type: "Collected ", value: counter?.outstanding_fines ? counter?.outstanding_fines : 360, amount:counter?.outstanding_fines ? counter?.outstanding_fines : 360 },

    ]

    const [data, setData] = useState(weeklyData);
    useEffect(() => {
        if (selected === "This Week") {
            setData(weeklyData)
        }
        if (selected === "This Month") {
            setData(monthlyData)
        }
    }, [selected])
    return (
        <>
            <SectionWrapper>
                <div className='py-7 px-[25px]'>
                    <div className='mb-8 flex items-center gap-5 justify-between flex-wrap'>
                        <SectionHeading><p>Fines Amount</p></SectionHeading>
                        <TimePickerButton
                            className="font-bold w-[120px]"
                            selected={selected}
                            setSelected={setSelected}
                            data={dataDay}
                        />
                    </div>
                    <div className='flex items-center' >
                        <FinesAmountChart data={data} />
                    </div>
                </div>

            </SectionWrapper>
        </>
    );
};

export default FinesAmount;