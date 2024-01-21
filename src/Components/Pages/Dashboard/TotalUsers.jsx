import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../Shared/SectionWrapper';
import TimePickerButton from '../../Shared/TimePickerButton';
import TotalUserChart from './TotalUserChart';

const TotalUsers = () => {
    const [selected, setSelected] = useState('Monthly');
    const dataDay = ["Weekly", "Monthly"];
    const monthlyData = [
        { day: "Jan 2023 ", name: "Admin", value: 25, },
        { day: "Feb 2023", name: "Admin", value: 30, },
        { day: "Mar 2023", name: "Admin", value: 25, },
        { day: "Apr 2023", name: "Admin", value: 30, },
        { day: "May 2023", name: "Admin", value: 25, },
        { day: "Jun 2023", name: "Admin", value: 30, },
        { day: "Jul 2023", name: "Admin", value: 25, },
        { day: "Aug 2023", name: "Admin", value: 29, },
        { day: "Sep 2023", name: "Admin", value: 30, },
        { day: "Oct 2023", name: "Admin", value: 25, },
        { day: "Nov 2023", name: "Admin", value: 30, },
        { day: "Dec 2023", name: "Admin", value: 20 },
        { day: "Jan 2023", name: "Workers", value: 20 },
        { day: "Feb 2023", name: "Workers", value: 30 },
        { day: "Mar 2023", name: "Workers", value: 25 },
        { day: "Apr 2023", name: "Workers", value: 22 },
        { day: "May 2023", name: "Workers", value: 30 },
        { day: "Jun 2023", name: "Workers", value: 40 },
        { day: "Jul 2023", name: "Workers", value: 20 },
        { day: "Aug 2023", name: "Workers", value: 30 },
        { day: "Sep 2023", name: "Workers", value: 40 },
        { day: "Oct 2023", name: "Workers", value: 25 },
        { day: "Nov 2023", name: "Workers", value: 28 },
        { day: "Dec 2023", name: "Workers", value: 20 },
    ]
    const weeklyData = [
        { day: "sun", name: "Admin", value: 5, },
        { day: "Mon", name: "Admin", value: 6, },
        { day: "Tue", name: "Admin", value: 7, },
        { day: "Wed", name: "Admin", value: 8, },
        { day: "Thu", name: "Admin", value: 4, },
        { day: "Fri", name: "Admin", value: 2, },
        { day: "sat", name: "Admin", value: 7, },
        { day: "sun", name: "Workers", value: 8 },
        { day: "Mon", name: "Workers", value: 4 },
        { day: "Tue", name: "Workers", value: 5 },
        { day: "Wed", name: "Workers", value: 8 },
        { day: "Thu", name: "Workers", value: 6 },
        { day: "Fri", name: "Workers", value: 8 },
        { day: "sat", name: "Workers", value: 7 }
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
        <div className='w-full'>
            <SectionWrapper>
                <div className='py-7 px-[25px]'>
                    <div className='mb-10 flex items-center gap-5 justify-between flex-wrap'>
                        <div >
                            <p className={`text-sm text-info`}>Total Users</p>
                            <h1 className={`text-[28px] font-bold text-dark-gray`}>136</h1>
                        </div>
                        <TimePickerButton
                            className="font-bold"
                            selected={selected}
                            setSelected={setSelected}
                            data={dataDay}
                        />
                    </div>
                    <div >
                        <TotalUserChart data={data} />
                    </div>
                </div>

            </SectionWrapper>
        </div>
    );
};

export default TotalUsers;