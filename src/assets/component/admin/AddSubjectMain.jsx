import React from 'react'

function AddSubjectMain() {
  return (
    <>
    <div className="w-[95%] lg:w-[70%] bg-[#ffffff] rounded-[5px] flex flex-col gap-2.5 items-start justify-start relative mx-auto lg:mx-0" style={{ boxShadow: "0px 0px 30px 0px rgba(1, 41, 112, 0.1)" }}>
        <div className="w-full lg:w-[100%] pt-5 pr-3 pb-5 pl-3 flex flex-col gap-2 items-start justify-start shrink-0 relative">

            {/* Title */}
            <div className="text-[#012970] text-left font-['Poppins-Medium',_sans-serif] text-lg leading-[21.6px] font-medium relative flex items-center justify-start">
            Add a Subject
            </div>

            {/* Form */}
            <form className="w-[100%] lg:w-[100%] flex flex-col gap-4 items-start justify-start shrink-0 relative">

                {/* subject name */}
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[100%] h-[70px] relative overflow-hidden">
                    <div className="pr-2 pl-2 flex flex-col gap-1.5 items-start justify-start flex-1 w-full lg:w-[100%] relative">
                        <div className="text-[#444444] text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-start">
                            Subject Name
                        </div>
                        <input type="text" placeholder='Full Name' required className="bg-[#ffffff] rounded-md border-solid border-[#ced4da] border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-9 relative w-[100%]"/>
                    </div>
                </div>

                {/* Subject code */}
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[100%] h-[70px] relative overflow-hidden">
                    <div className="pr-2 pl-2 flex flex-col gap-1.5 items-start justify-start flex-1 w-full lg:w-[100%] relative">
                        <div className="text-[#444444] text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-start">
                            Subject code
                        </div>
                        <input type="text" placeholder='subject code' required className="bg-[#ffffff] rounded-md border-solid border-[#ced4da] border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-9 relative w-[100%]"/>
                    </div>
                </div>

                {/* Course */}
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[100%] h-[70px] relative overflow-hidden">
                    <div className="pr-2 pl-2 flex flex-col gap-1.5 items-start justify-start flex-1 w-full lg:w-[100%] relative">
                        <div className="text-[#444444] text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-start">
                            Course
                        </div>
                        <input type="text" placeholder='Course' required className="bg-[#ffffff] rounded-md border-solid border-[#ced4da] border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-9 relative w-[100%]"/>
                    </div>
                </div>


                {/* Email */}
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[100%] h-[70px] relative overflow-hidden">
                    <div className="pr-2 pl-2 flex flex-col gap-1.5 items-start justify-start flex-1 w-full lg:w-[100%] relative">
                        <div className="text-[#444444] text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-start">
                            Teacher
                        </div>
                        <input type="email" placeholder='Assign a Teacher' required className="bg-[#ffffff] rounded-md border-solid border-[#ced4da] border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 h-9 relative w-[100%]"/>
                    </div>
                </div>

               {/* Buttons */}
                <div className="pr-2 pl-2 flex flex-row gap-4 items-start justify-start shrink-0 relative">
                    {/* Submit */}
                    <button type='submit' className="bg-[#0d6efd] rounded-md border-solid border-[#0d6efd] border pt-[7px] pr-[12.94px] pb-[7px] pl-[13px] flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="text-[#ffffff] text-center font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center">
                            Submit
                        </div>
                    </button>
                    {/* Reset */}
                    <button className="bg-[#6c757d] rounded-md border-solid border-[#6c757d] border pt-[7px] pr-[13.17px] pb-[7px] pl-3 flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="text-[#ffffff] text-center font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center">
                            Reset
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddSubjectMain;