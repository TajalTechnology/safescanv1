import { Pie } from '@ant-design/plots';
import React from 'react';

const FinesAmountChart = ({}) => {
    const data = [
        {
          type: '分类一',
          value: 55,
        },
        {
          type: '分类二',
          value: 45,
        }
        
      ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        // label: {
        //   type: 'inner',
        //   offset: '-50%',
        //   content: '{value}',
        //   style: {
        //     textAlign: 'center',
        //     fontSize: 14,
        //   },
        // },
        // interactions: [
        //   {
        //     type: 'element-selected',
        //   },
        //   {
        //     type: 'element-active',
        //   },
        // ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: '',
          },
        },
      };
    return (
        <div>
            <Pie {...config} />
        </div>
    );
};

export default FinesAmountChart;