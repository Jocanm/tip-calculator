import { useEffect, useState } from "react"

const ResultOperation = ({ bill, porc, porcInput, total, reset }) => {

    const [lastPorc, setLastPorc] = useState("")

    useEffect(()=>{
        (porcInput!=="")?(setLastPorc(porcInput)):(setLastPorc(porc))
    },[porc,porcInput])

    return (
        <div className="bg-cyan-strongest rounded-lg pt-10 pb-5 sm:py-10 w-full h-full items-center flex flex-col justify-between">
            <div className="flex flex-col h-1/2">
                <TipAumount 
                    bill={bill}
                    total={total}
                    porc={lastPorc}
                />
                <Total 
                    bill={bill}
                    total={total}
                />
            </div>
            <button className="bg-cyan-strong rounded-sm px-28 py-1 text-cyan-strongest font-semibold mt-6 sm:mt-0 hover:shadow-xl hover:text-warmGray-50"
            onClick={reset}
            >RESET</button>
        </div>
    )
}

const TipAumount = ({ bill, total, porc }) => {

    const [totalTip, setTotalTip] = useState(0)

    useEffect(() => {
        if (bill > 0 && total > 0 && porc > 0) {
            let por = (bill * porc) / 100
            let final = por/total
            let round = Math.round((final + Number.EPSILON)*100)/100;
            setTotalTip(round)
        } else {
            setTotalTip('0.00')
        }
    }, [total, porc, bill])

    return (
        <div className="grid grid-cols-2 gap-20 gap-x-14 sm:gap-20 justify-around w-full items-center h-full">
            <div className="flex flex-col justify-between">
                <h2 className="text-white text-sm font-semibold">Tip Amount</h2>
                <p className="text-gray-300 text-xs">/ person</p>
            </div>
            <div className="text-2xl text-cyan-strong font-bold tex">
                <h2>{`$${totalTip}`}</h2>
            </div>
        </div>
    )
}


const Total = ({ bill, total }) => {

    const [totalPerson, setTotalPerson] = useState(0)

    useEffect(() => {
        if (bill > 0 && total > 0) {
            let count = bill / total
            let round = Math.round((count + Number.EPSILON)*100)/100;
            setTotalPerson(round)
        } else {
            setTotalPerson('0.00')
        }
    }, [bill, total])

    return (
        <div className="grid grid-cols-2 gap-20 gap-x-14 sm:gap-20 justify-around w-full items-center h-full">
            <div className="flex flex-col justify-between">
                <h2 className="text-white text-sm font-semibold">Total</h2>
                <p className="text-gray-300 text-xs">/ person</p>
            </div>
            <div className="text-2xl text-cyan-strong font-bold tex">
                <h2>{`$${totalPerson}`}</h2>
            </div>
        </div>
    )
}

export default ResultOperation
