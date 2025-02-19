"use client";

import { useEffect, useState } from "react";

export default function User () {

    const [total, setTotal] = useState(0)

    const tambah = () => {
        setTotal(total+1)
    }

    useEffect(() => {
        tambah()
    },[])

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1>{total}</h1>
            <button onClick={tambah} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Aku di Klik
            </button>
        </div>
    )
}