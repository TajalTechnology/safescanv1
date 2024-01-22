import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../Shared/SectionWrapper';
import TimePickerButton from '../../Shared/TimePickerButton';
import SectionHeading from '../../Shared/SectionHeading';
import FinesAmountChart from './FinesAmountChart';

const FinesAmount = () => {
    const [selected, setSelected] = useState('This Month');
    const dataDay = ["This Week", "This Month"];
    const monthlyData = [
        { day: "Jan 2023 ", value: 25 },
        { day: "Feb 2023", value: 30 },
        { day: "Mar 2023", value: 25 },
        { day: "Apr 2023", value: 30 },
        { day: "May 2023", value: 25 },
        { day: "Jun 2023", value: 30 },
        { day: "Jul 2023", value: 25 },
        { day: "Aug 2023", value: 29 },
        { day: "Sep 2023", value: 30 },
        { day: "Oct 2023", value: 25 },
        { day: "Nov 2023", value: 30 },
        { day: "Dec 2023", value: 25 },
    ]
    const weeklyData = [
        { day: "sun", value: 5, },
        { day: "Mon", value: 6 },
        { day: "Tue", value: 7 },
        { day: "Wed", value: 8 },
        { day: "Thu", value: 4 },
        { day: "Fri", value: 2 },
        { day: "sat", value: 7 }
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
                    <div >
                        <FinesAmountChart data={data}/>
                    </div>
                </div>

            </SectionWrapper>
        </>
    );
};

export default FinesAmount;