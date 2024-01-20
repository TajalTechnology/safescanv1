
const EditInput = ({ label, type, register, defaultValue }) => {
    return (
        <div className="flex flex-col items-start w-full mt-3">
            <label
                htmlFor="otp"
                className='mb-1.5 font-medium text-base text-dark-gray'
            >
                {label}
            </label>
            <input
                defaultValue={defaultValue}
                className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                type={type}
                id="otp"
                {...register}
            />

        </div>
    );
};

export default EditInput;