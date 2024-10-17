import customer from "../assets/CustomerFeedback"

const CustomerFeedBack = () => {
  return (
    <section className="bg-gray-100 w-full p-4">
        <h3 className="text-[40px] mt-[24px] text-black ">Customer Feedbacks</h3>
        {
            customer && customer.length ? customer.map((item)=>(
                <div key={item.id} className="bg-white rounded-2xl my-4 p-8 ">
                    <p className="text-custom-gray text-[16px] italic ">"{item.comment}"</p>
                    <div className="flex gap-4 items-center my-4 ">
                        <span className=" h-[3rem] w-[3rem] flex items-center justify-center text-white font-semibold text-[16px]  rounded-full" style={{ backgroundColor: item.color }} >{item.img}</span>
                        <section>
                            <h6 className="text-black mt-[4px] text-[18px] font-semibold ">{item.name}</h6>
                            <p className="text-custom-gray text-[16px]">{item.country}</p>
                        </section>
                    </div>
                </div>
            )): null
        }
    </section>
  )
}

export default CustomerFeedBack
