import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../Shared/SectionWrapper';
import SectionHeading from '../../Shared/SectionHeading';
import TimePickerButton from '../../Shared/TimePickerButton';
import FinesOverViewChart from './FinesOverViewChart';
import { useGetFinesQuery } from '../../../redux/features/admin/adminApi';

const FinesOverview = () => {
    const [selected, setSelected] = useState('Monthly');
    const dataDay = ["Weekly", "Monthly"];
    const today = new Date()

    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);
    if (today.getMonth() === 0) {
        oneMonthAgo.setFullYear(today.getFullYear() - 1);
        oneMonthAgo.setMonth(11);
    }
    const [endDate, setEndDate] = useState(oneMonthAgo.getTime());
    if (selected === 'Weekly') {
        setEndDate(oneWeekAgo.getTime())
    }

    // console.log(today,oneWeekAgo,oneMonthAgo)
   
    const { data: finesData, isLoading, refetch } = useGetFinesQuery(`start_date=${today.getTime()}&end_date=${endDate}`);
    console.log("finesData",finesData?.Items)
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
        if (selected === "Weekly") {
            setData(weeklyData)
        }
        if (selected === "Monthly") {
            setData(monthlyData)
        }
    }, [selected])

    return (
        <div className=''>
            <SectionWrapper>
                <div className='py-7 px-[25px]'>
                    <div className='mb-8 flex items-center gap-5 justify-between flex-wrap'>
                        <SectionHeading><p>Fines Overview</p></SectionHeading>
                        <TimePickerButton
                            className="font-bold"
                            selected={selected}
                            setSelected={setSelected}
                            data={dataDay}
                        />
                    </div>
                    <div >
                        <FinesOverViewChart chartData={data} />
                    </div>
                </div>

            </SectionWrapper>
        </div>
    );
};

export default FinesOverview;