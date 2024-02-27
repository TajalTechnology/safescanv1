import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../Shared/SectionWrapper';
import TimePickerButton from '../../Shared/TimePickerButton';
import SectionHeading from '../../Shared/SectionHeading';
import FinesAmountChart from './FinesAmountChart';

const FinesAmount = ({counters}) => {
    const [selected, setSelected] = useState('This Month');
    const dataDay = ["This Week", "This Month"];

    const counter=counters?.Items[0]
    
    const monthlyData = [
        { type: "Due", value: 30, amount:'$5,626.22' },
        { type: "Collected ", value: 70, amount:'$732.00' },

    ]
    const weeklyData = [

        { type: "Due", value: 20, amount:'$6,626.22' },
        { type: "Collected ", value: 80, amount:'$532.00' },

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