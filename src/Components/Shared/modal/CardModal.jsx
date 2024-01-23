import { Icon } from '@iconify/react';
import { Modal, Tooltip } from 'antd';
import React, { useState } from 'react';
import CustomButton from '../CustomButton';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import DeleteModal from './DeleteModal';

const CardModal = ({ row, date, dateTitle }) => {
    const [modalOPen, setModalOpen] = useState(false);
    const [imgIndex, setImageIndex] = useState(0);
    const [deletModal, setDeleteModal] = useState(false);
    return (
        <>
            <Tooltip placement="topLeft" title="View Images">
                <button onClick={() => setModalOpen(true)} className=" text-[14px] font-normal text-info flex items-center gap-1 ">
                    <Icon icon="lucide:image" className=" text-[20px]" />
                    0{row?.cartImage}
                </button>
            </Tooltip>
            <Modal
                centered
                cancelText
                cancelButtonProps
                footer={null}
                open={modalOPen}
                closeIcon={null}
                styles={{ borderRadius: 30 }}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                width={1005}
                className={` bg-red-500 pt-3 rounded-[30px]`}
            >
                <div className="p-7">
                    <div className=" flex items-center justify-between">
                        <h2 className=" text-[28px] font-[700] text-dark-gray">Card Images</h2>
                        <button
                            onClick={() => setModalOpen(false)}
                            className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
                        >
                            <Icon icon="material-symbols:close" />
                        </button>
                    </div>
                    <div className="w-full flex items-center justify-center py-5">
                        <img src={row.cardImages[imgIndex].img} alt="card" className='w-full'/>
                    </div>
                    <div className=" flex items-center justify-between flex-wrap gap-3 mb-5">
                        <div className="">
                            <p className='text-[20px] font-bold text-dark-gray'>{dateTitle}:<span className='text-lg font-medium'> {date}</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <CustomButton>
                                <span className='flex items-center text-white gap-2'>
                                    <Icon className='text-lg text-white rotate-180' icon="tabler:edit-circle" />
                                    <span>Edit</span>
                                </span>
                            </CustomButton>
                            <button onClick={()=>setDeleteModal(true)} className=" bg-error/10 flex items-center justify-center hover:bg-[#FF4D4D]/80 duration-300 w-[38px] h-[38px] rounded-[4px] font-medium text-[#FF4D4D] hover:text-white">
                                <Icon icon="lucide:trash-2" className=" text-[20px]" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                navigation={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    320: {
                                      // width: 576,
                                      slidesPerView: 1,
                                    },
                                    580: {
                                      // width: 768,
                                      slidesPerView: 2,
                                    },
                                    800: {
                                      // width: 768,
                                      slidesPerView: 3,
                                    },
                                   920: {
                                      // width: 768,
                                      slidesPerView: 4,
                                    },
                                  }}
                                modules={[Navigation]}
                                className="mySwiper lg"
                            >
                                {row?.cardImages?.map((card, index) =>
                                    <SwiperSlide className='flex items-center justify-center' key={index}>
                                        <button  onClick={() =>setImageIndex(index)} className={`${imgIndex===index?'border-[3px] border-primary rounded-[18px]':'border-2 border-transparent rounded-[18px]'}`} >
                                            <div className='p-1.5 h-[106px] w-[185px]'>
                                                <img src={card?.img} alt="card" className='rounded-[14px] w-[185px]' />
                                            </div>
                                        </button>

                                    </SwiperSlide>
                                )}

                            </Swiper>
                        </>
                    </div>
                </div>
            </Modal>
            <DeleteModal
            modalOPen={deletModal}
            setModalOpen={setDeleteModal}
            title={'Delete Image'}
            title2={'Are You Sure?'}
            />
        </>
    );
};

export default CardModal;